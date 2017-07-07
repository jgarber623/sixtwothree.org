RSpec.describe Syndication, type: :model do
  describe '#name' do
    context 'when given a URL with an arbitrary host' do
      let :syndication do
        Syndication.new(url: 'http://www.example.com/foo')
      end

      it 'returns the host name' do
        expect(syndication.name).to eq('www.example.com')
      end
    end

    context 'when given a URL with a known host' do
      let :syndication do
        Syndication.new(url: 'https://archive.org/foo')
      end

      it 'returns the site name' do
        expect(syndication.name).to eq('Internet Archive')
      end
    end
  end

end
