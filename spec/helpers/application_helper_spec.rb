RSpec.describe ApplicationHelper, type: :helper do
  let(:site_title) { 'sixtwothree.org' }
  let(:site_description) { 'Online home to Jason Garber, one of the Internet’s top Jason Garbers.' }
  let(:user_avatar) { '/jgarber.png' }

  describe '#page_card_type' do
    context 'when @photo does not exist' do
      it 'returns a string' do
        expect(helper.page_card_type).to eq('summary')
      end
    end

    context 'when @photo exists' do
      it 'returns a string' do
        @photo = 'foo'
        expect(helper.page_card_type).to eq('summary_large_image')
      end
    end
  end

  describe '#page_description' do
    context 'when @page_description is not set' do
      it 'returns a string with the site description' do
        expect(helper.page_description).to eq(site_description)
      end
    end

    context 'when @page_description is set' do
      it 'returns a string with the page description' do
        @page_description = 'foo'
        expect(helper.page_description).to eq('foo')
      end
    end
  end

  describe '#page_image' do
    context 'when @photo does not exist' do
      it 'returns the user avatar URL' do
        expect(helper.page_image).to eq(user_avatar)
      end
    end

    context 'when @photo exists' do
      skip 'returns the photo URL' do
      end
    end
  end

  describe '#page_title' do
    context 'when @page_title is not set' do
      it 'returns a string with the site title and site description' do
        expect(helper.page_title).to eq("#{site_title} — #{site_description}")
      end
    end

    context 'when @page_title is set' do
      it 'returns a string with the page title and site title' do
        @page_title = 'foo'
        expect(helper.page_title).to eq("foo — #{site_title}")
      end
    end
  end
end
