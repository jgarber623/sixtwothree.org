namespace :assets do
  desc 'Generate a spritesheet from a folder of SVGs'
  task :spritesheet do
    assets_path = './app/assets/images'
    file_paths = Dir.glob(File.join(assets_path, 'icons/*.svg'))
    output_file_path = File.join(assets_path, 'icons.svg')
    output_file_contents = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">'

    if File.exist?(output_file_path)
      puts %{Existing SVG file found at '#{output_file_path}'. Deleting...}
      File.delete output_file_path
    end

    puts %{Combining #{file_paths.length} SVG files...}

    file_paths.each do |file_path|
      file_contents = IO.read(file_path)
      pattern = %r{^<svg.*?(?<viewbox>viewBox=".*?").*?>(?<content>.*?)</svg>$}

      file_contents.match(pattern) do |matches|
        output_file_contents << %{<symbol id="icon-#{File.basename(file_path, '.svg').downcase}" #{matches[:viewbox]}>#{matches[:content]}</symbol>}
      end
    end

    output_file_contents << '</svg>'

    File.open(output_file_path, 'w') do |f|
      f.write output_file_contents
    end

    puts %{New SVG spritesheet filed saved at '#{output_file_path}'. Excelsior!}
  end
end
