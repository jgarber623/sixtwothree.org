RSpec.describe ApplicationHelper, type: :helper do
  let(:site_title) { 'sixtwothree.org' }
  let(:site_description) { 'Online home to Jason Garber, one of the Internet’s top Jason Garbers.' }

  describe '#page_title' do
    context 'when @page_title is not set' do
      it 'returns a string with the site title and site description.' do
        expect(helper.page_title).to eq("#{site_title} — #{site_description}")
      end
    end

    context 'when @page_title is set' do
      it 'returns a string with the page title and site title.' do
        @page_title = 'foo'
        expect(helper.page_title).to eq("foo — #{site_title}")
      end
    end
  end

  describe '#rss_link_tag' do
    it 'returns a <link> element' do
      expect(helper.rss_link_tag(href: '/foo.rss', title: 'bar')).to eq('<link href="/foo.rss" rel="alternate" title="bar" type="application/rss+xml">')
    end
  end
end
