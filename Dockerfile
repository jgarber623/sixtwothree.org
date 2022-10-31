################################################################################
# Base Stage
################################################################################
FROM ruby:2.4.9-slim-buster AS base-stage

EXPOSE 3000

# Update system packages and install dependencies.
RUN apt update --quiet && \
    apt upgrade --quiet --yes && \
    apt install --quiet --yes \
      libpq-dev \
      locales \
      shared-mime-info && \
    rm -rf /var/lib/apt/lists/*

# Configure the American English locale and use UTF-8 encoding.
RUN localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8

ENV LANG=en_US.utf8

# Install Node.js v18.x.
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt update --quiet && \
    apt install --quiet --yes nodejs && \
    rm -rf /var/lib/apt/lists/*

# Configure RubyGems to not install documentation.
RUN echo "gem: --no-document" >> ~/.gemrc

WORKDIR /usr/src/app

################################################################################
# Development
################################################################################
FROM base-stage AS development

RUN apt update --quiet && \
    apt install --quiet --yes g++ git make && \
    rm -rf /var/lib/apt/lists/*

# Install system-wide gems.
RUN gem install foreman

# Configure Bundler to use the persistent dependencies cache.
ENV BUNDLE_PATH=/usr/src/dependencies/bundler

# Create a folder to use as a persistent volume for caching dependencies.
RUN mkdir -p /usr/src/dependencies

VOLUME /usr/src/dependencies

################################################################################
# Production Build Stage
################################################################################
FROM base-stage AS production-build-stage

ENV BUNDLE_DEPLOYMENT=1 \
    BUNDLE_PATH=/usr/src/app/vendor/bundle \
    BUNDLE_WITHOUT=development:test \
    RAILS_ENV=production

RUN apt update --quiet && \
    apt install --quiet --yes g++ git make && \
    rm -rf /var/lib/apt/lists/*

COPY Gemfile Gemfile.lock ./

RUN bundle install && \
    bundle clean --force && \
    rm -rf vendor/bundle/cache/*.gem && \
    find vendor/bundle/gems/ \( -name "*.c" -o -name "*.o" \) -delete

COPY . .

ARG DATABASE_URL
ARG SECRET_KEY_BASE

RUN bundle exec rake assets:precompile

################################################################################
# Production
################################################################################
FROM base-stage AS production

ENV BUNDLE_DEPLOYMENT=1 \
    BUNDLE_PATH=/usr/src/app/vendor/bundle \
    BUNDLE_WITHOUT=development:test \
    RAILS_ENV=production

COPY . .

COPY --from=production-build-stage /usr/src/app/vendor/bundle ./vendor/bundle
COPY --from=production-build-stage /usr/src/app/public ./public

CMD ["bundle", "exec", "puma", "--config", "config/puma.rb"]
