require 'English'
require 'rouge/plugins/redcarpet'

module Redcarpetable
  extend ActiveSupport::Concern

  class_methods do
    def redcarpet(*fields)
      fields.each do |field|
        define_method field do
          Markdown::Parser.new(self[field])
        end
      end
    end
  end

  module Markdown
    class Parser
      EXTENSIONS = {
        fenced_code_blocks: true,
        footnotes: true,
        highlight: true,
        no_intra_emphasis: true,
        space_after_headers: true,
        strikethrough: true
      }.freeze

      def initialize(markdown)
        @markdown = markdown
        @renderer = Redcarpet::Markdown.new(Renderer, EXTENSIONS)
      end

      def smarten
        html_entities.decode Redcarpet::Render::SmartyPants.render(@markdown)
      end

      def to_html
        @renderer.render(@markdown)
      end

      def to_s
        @markdown
      end

      private

      def html_entities
        @html_entities ||= HTMLEntities.new
      end
    end

    class Renderer < Redcarpet::Render::SmartyHTML
      include Rouge::Plugins::Redcarpet

      # Renders <figure> and <figcaption> elements
      #
      # === Examples
      #
      #   ===
      #   ![Lubitel 166 illustration](http://f.cl.ly/items/0g2h2m3q0m102X2l2D1t/lubitel-166.jpg)
      #   ===
      #
      #  <figure>
      #    <p><img src="http://f.cl.ly/items/0g2h2m3q0m102X2l2D1t/lubitel-166.jpg" alt="Lubitel 166 illustration"></p>
      #  </figure>
      #
      #   === [A figure caption before the content.]
      #   ![Lubitel 166 illustration](http://f.cl.ly/items/0g2h2m3q0m102X2l2D1t/lubitel-166.jpg)
      #   ===
      #
      #  <figure>
      #    <figcaption>
      #      <p>A figure caption before the content.</p>
      #    </figcaption>
      #    <p><img src="http://f.cl.ly/items/0g2h2m3q0m102X2l2D1t/lubitel-166.jpg" alt="Lubitel 166 illustration"></p>
      #  </figure>
      #
      #   ===
      #   ![Lubitel 166 illustration](http://f.cl.ly/items/0g2h2m3q0m102X2l2D1t/lubitel-166.jpg)
      #   === [A figure caption after the content.]
      #
      #  <figure>
      #    <p><img src="http://f.cl.ly/items/0g2h2m3q0m102X2l2D1t/lubitel-166.jpg" alt="Lubitel 166 illustration"></p>
      #    <figcaption>
      #      <p>A figure caption after the content.</p>
      #    </figcaption>
      #  </figure>
      #
      def preprocess(markdown)
        figure(markdown)
      end

      private

      def figcaption(markdown)
        "<figcaption>#{Parser.new(markdown).to_html}</figcaption>"
      end

      def figure(markdown)
        markdown.gsub(/^={3,}(?:\s\[(?<precaption>.*)\])?\r?\n(?<content>.*)?\r?\n={3,}(?:\s\[(?<postcaption>.*)\])?$/m) do
          markup = Parser.new($LAST_MATCH_INFO[:content].chomp).to_html

          markup.prepend(figcaption($LAST_MATCH_INFO[:precaption])) if $LAST_MATCH_INFO[:precaption]
          markup.concat(figcaption($LAST_MATCH_INFO[:postcaption])) if $LAST_MATCH_INFO[:postcaption]

          "<figure>#{markup}</figure>".tr("\n", '')
        end
      end
    end
  end
end
