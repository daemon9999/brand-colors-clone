const downloadAllBrands = (type, brands, setDownloadUrl) => {
    let output = "";

    switch (type) {
      case "css":
        brands.map((brand) => {
          
          brand.colors.map((c, key) => {
            output += `.bc-background-${brand.slug}-${
              key + 1
            } { background-color : #${c}; }\n`;
            output += `.bc-color-${brand.slug}-${key + 1} { color : #${c}; }\n`;
            return true
          });
          return true
        });
        break;
  
      case "scss":
        brands.map((brand) => {
          brand.colors.map((c, key) => {
            output += `$bc-${brand.slug}-${key + 1}: #${c};\n`;
            return true
          });
          return true
        });
        break;
  
      case "less":
        brands.map((brand) => {
        
          brand.colors.map((c, key) => {
            output += `@bc-${brand.slug}-${key + 1}: #${c};\n`;
            return true;
          });
          return true
        });
        break;
      case "styl":
        brands.map((brand) => {
     
          brand.colors.map((c, key) => {
            output += `bc-${brand.slug}-${key + 1} = #${c}\n`;
            return true;
          });
          return true
        });
        break;

      default: 
        break
    }
  
    const blob = new Blob([output]);
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
  
    return () => {
      URL.revokeObjectURL(url);
      setDownloadUrl("");
    };
}

export default downloadAllBrands