const setFileContext = (type, selectedBrands, brands, setDownloadUrl) => {
  let output = "";

  switch (type) {
    case "css":
      selectedBrands.map((slug) => {
        const brand = brands.find((b) => b.slug === slug);
        brand.colors.map((c, key) => {
          output += `.bc-background-${slug}-${
            key + 1
          } { background-color : #${c}; }\n`;
          output += `.bc-color-${slug}-${key + 1} { color : #${c}; }\n`;
        });
      });
      break;

    case "scss":
      selectedBrands.map((slug) => {
        const brand = brands.find((b) => b.slug === slug);
        brand.colors.map((c, key) => {
          output += `$bc-${slug}-${key + 1}: #${c};\n`;
        });
      });
      break;

    case "less":
      selectedBrands.map((slug) => {
        const brand = brands.find((b) => b.slug === slug);
        brand.colors.map((c, key) => {
          output += `@bc-${slug}-${key + 1}: #${c};\n`;
        });
      });
      break;
    case "styl":
      selectedBrands.map((slug) => {
        const brand = brands.find((b) => b.slug === slug);
        brand.colors.map((c, key) => {
          output += `bc-${slug}-${key + 1} = #${c}\n`;
        });
      });
      break;
  }

  const blob = new Blob([output]);
  const url = URL.createObjectURL(blob);
  setDownloadUrl(url);

  return () => {
    URL.revokeObjectURL(url);
    setDownloadUrl("");
  };
};

export default setFileContext