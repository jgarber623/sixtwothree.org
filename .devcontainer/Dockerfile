FROM ruby:2.4.9-slim-buster

# Update system packages and install dependencies.
RUN apt update --quiet && \
    apt install --quiet --yes \
      g++ \
      git \
      libpq-dev \
      locales \
      make \
      nodejs \
      postgresql-client \
      shared-mime-info \
      && \
    rm -rf /var/lib/apt/lists/*

# Configure the American English locale and use UTF-8 encoding.
RUN localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8

ENV LANG=en_US.utf8

# Install system-wide gems.
RUN gem install --no-document foreman
