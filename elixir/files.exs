dirs = ['/Users/Admin/Pictures']
for dir  <- dirs,
    file <- File.ls!(dir),
    path = Path.join(dir, file),
    File.regular?(path) do
      IO.puts File.stat!(path).size
end
