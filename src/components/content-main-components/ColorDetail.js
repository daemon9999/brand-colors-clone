import { useSelector, useDispatch } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classNames from "classnames";

import { setCopy } from "store/brand";
import { Download } from "components/content-header-components";
import { FiLink2, MdContentCopy, VscDebugBreakpointLog } from "icons";
import { calculateContrast, convertToDate } from "helpers";

const ColorDetail = ({ brandUrl }) => {
  const { brands } = useSelector((state) => state.brand);

  const dispatch = useDispatch();

  const brand = brands?.find((b) => b.slug === brandUrl);
  const linkUrl =
    (process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : "https://brand-colors-clone.vercel.app") +
    "/b/" +
    brandUrl;

  const handleCopy = (c) => {
    dispatch(
      setCopy({
        text: c,
        copied: true,
      })
    );
  };

  return (
    <div className="p-4 sm:p-8 flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-main font-bold text-[32px]">{brand?.title}</h1>
        <div className="flex items-center gap-x-1">
          <Download allBrands={false} size={24} isDownloadHidden={true} />
          <FiLink2
            size={22}
            onClick={() => prompt("Here's the URL to share", linkUrl)}
            className={classNames({
              "text-brand hover:text-main cursor-pointer ": true,
            })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        {brand?.colors.map((c, key) => (
          <CopyToClipboard text={c} key={key}>
            <button
              onClick={() => handleCopy(c)}
              className="w-full flex items-center justify-center h-10 group gap-x-3"
              style={{
                backgroundColor: `#${c}`,
                color: calculateContrast(c),
              }}
            >
              <span className="h-6 w-6">
                <MdContentCopy size={24} className="hidden group-hover:block" />
              </span>
              <p className="font-medium tracking-wide text-base hidden group-hover:block">
                <span className="opacity-[0.66]">#</span>
                {c}
              </p>
            </button>
          </CopyToClipboard>
        ))}
        <div className="flex gap-x-5 items-center text-brand ">
          <p className="text-sm sm:text-base">
            Updated {convertToDate(brand?.modified)}
          </p>
          {brand?.brand_url && (
            <>
              <VscDebugBreakpointLog size={11} />
              <a
                href={brand.brand_url}
                target="_blank"
                className="hover:text-[#41545e] hover:underline text-sm sm:text-base"
                rel="noreferrer"
              >
                Brand URL
              </a>
            </>
          )}
          {brand?.source_url && (
            <>
              <VscDebugBreakpointLog size={11} />
              <a
                href={brand?.source_url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#41545e] hover:underline text-sm sm:text-base"
              >
                Source URL
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorDetail;
