import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import classNames from "classnames";
import { MdFileDownload } from "icons";
import { setFileContext, downloadAllBrands } from "helpers";

const Download = ({ allBrands, size = 26, isDownloadHidden = false }) => {

  const [downloadUrl, setDownloadUrl] = useState();
  const [type, setType] = useState("css");
  const { selectedBrands, brands } = useSelector((state) => state.brand);
  
  const length = selectedBrands.length;
  const types = [
    { value: "css", label: "CSS" },
    { value: "scss", label: "SCSS" },
    { value: "less", label: "LESS" },
    { value: "styl", label: "Stylus" },
  ];

  useEffect(() => {
    if (allBrands) {
      downloadAllBrands(type, brands, setDownloadUrl);
    } 
    else {
      if (length > 0) {
        setFileContext(type, selectedBrands, brands, setDownloadUrl);
      }
    }
  }, [allBrands, brands, selectedBrands, type]);

  return (
    <div
      className={classNames({
        "relative hidden sm:flex items-center justify-center ": true,
        "!flex": isDownloadHidden,
      })}
    >
      {allBrands ? (
        <a
          href={type ? downloadUrl : null}
          download={`brandcolors-${nanoid()}.${type}`}
          className="hover:text-main text-brand flex items-center ml-1 gap-x-1 cursor-pointer"
        >
          <MdFileDownload size={size} />
          <p className="mr-2">All Brands</p>
        </a>
      ) : (
        <button disabled={!length}>
          <a
            download={`brand-${nanoid()}.${type}`}
            href={type ? downloadUrl : null}
            className={classNames({
              "pointer-events-none": !length,
            })}
          >
            <MdFileDownload
              size={size}
              className={classNames({
                "text-brand ": true,
                " hover:text-main cursor-pointer": length && type,
                "!text-opacity-40 ": !length,
              })}
            />
          </a>
        </button>
      )}

      <select
        disabled={allBrands ? false : !length}
        name="types"
        id="types"
        className={classNames(
          !allBrands
            ? {
                "flex z-10  outline-none border-none text-brand": true,
                "cursor-pointer hover:text-main": length,
                "text-opacity-40": !length,
              }
            : {
                "flex z-10  outline-none text-brand border-none hover:text-main cursor-pointer": true,
              }
        )}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        {types.map((type, key) => (
          <option key={key} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Download