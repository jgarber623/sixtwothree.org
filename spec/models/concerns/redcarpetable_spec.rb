RSpec.describe Redcarpetable do
  let :stub_class do
    Struct.new(:content) do
      include Redcarpetable

      redcarpet :content
    end
  end

  context 'when given figure content' do
    let(:redcarpetable) { stub_class.new("===\nAn example figure.\n===") }

    it 'renders a <figure> element' do
      expect(redcarpetable.content.to_html).to eq("<figure><p>An example figure.</p></figure>\n")
    end
  end

  context 'when given figure content and a pre-caption' do
    let(:redcarpetable) { stub_class.new("=== [An example figcaption.]\nAn example figure.\n===") }

    it 'renders <figure> and <figcaption> elements' do
      expect(redcarpetable.content.to_html).to eq("<figure><figcaption><p>An example figcaption.</p></figcaption><p>An example figure.</p></figure>\n")
    end
  end

  context 'when given figure content and a post-caption' do
    let(:redcarpetable) { stub_class.new("===\nAn example figure.\n=== [An example figcaption.]") }

    it 'renders <figure> and <figcaption> elements' do
      expect(redcarpetable.content.to_html).to eq("<figure><p>An example figure.</p><figcaption><p>An example figcaption.</p></figcaption></figure>\n")
    end
  end
end
