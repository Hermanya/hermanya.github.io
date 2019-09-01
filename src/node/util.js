module.exports.getMeta = fileContents => {
  const parts = fileContents.split("---\n");
  const metadata = parts[1].split("\n").reduce((data, line) => {
    const parts = line.split(":");
    data[parts[0]] =
      parts[1] && parts[1].trim().startsWith('"')
        ? parts[1].trim().slice(1, -1)
        : parts[1] && parts[1].trim();
    return data;
  }, {});
  return metadata;
};
