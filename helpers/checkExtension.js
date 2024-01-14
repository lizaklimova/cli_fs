const checkExtension = (fileName) => {
  const EXTENSIONS = ["doc", "jpeg", "svg", "tsx", "jsx"];

  const parts = fileName.toLowerCase().split(".");

  const extension = parts[parts.length - 1];

  return {
    extension,
    result: EXTENSIONS.includes(extension),
  };
};

export default checkExtension;
