import React, { memo } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { setSelectedBrands, setCopy } from "store/brand";
import { MdContentCopy, AiOutlineCheck, VscDebugBreakpointLog } from "icons";
import { calculateContrast, convertToDate } from "helpers";

const Color = ({ b }) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isSmallMobile = useMediaQuery({
    query: "(max-width: 400px)",
  });

  const { selectedBrands } = useSelector((state) => state.brand);

  const dispatch = useDispatch();

  const selected = selectedBrands.includes(b.slug);

  const handleSelected = () => {
    if (!selected) {
      dispatch(setSelectedBrands([...selectedBrands, b.slug]));
    } else {
      dispatch(
        setSelectedBrands(selectedBrands.filter((slug) => slug !== b.slug))
      );
    }
  };

  const handleCopy = (e, c) => {
    e.stopPropagation();
    dispatch(setCopy({ text: c, copied: true }));
  };

  const calculateHeight = (number, title) => {
    const row = (number - (number % 9)) / 9 + 1;
    const row2 =
      (title.length - (title.length % 20)) / 20 +
      (title.length % 20 === 0 ? 0 : 1);
    if (isSmallMobile) {
      return row * 100 + row2 * 45;
    }
    if (isMobile) {
      return row * 80 + row2 * 30;
    }
    if (row >= 2 || row2 >= 2) {
      return isTablet ? row * 50 + row2 * 10 : row * 45 + row2 * 40;
    }
    return isTablet ? 70 : 90;
  };

  return (
    <LazyLoad
      height={selected ? "auto" : calculateHeight(b.colors.length, b.title)}
    >
      <div
        onClick={handleSelected}
        className={classNames({
          " flex flex-col px-2 h-full justify-center py-2 border-t border-b border-border cursor-pointer lg:overflow-y-auto": true,
          "gap-y-1 sm:gap-y-3 lg:gap-y-5 !justify-between": selected,
          "border-t-none": b.title === "500px",
        })}
      >
        <div
          className={classNames({
            "flex flex-col  sm:flex-row sm:items-center gap-x-3 ": true,
            "lg:!items-start": selected,
          })}
        >
          <div className="sm:w-[20%] sm:min-w-[20%]  flex items-center gap-x-2">
            <h1
              className={classNames({
                "text-main text-lg lg:text-[1.375rem]  ": true,
                "font-bold": selected,
              })}
            >
              {b.title}
            </h1>
            {selected && (
              <span className=" text-link  flex items-center justify-center ">
                <AiOutlineCheck size={26} />
              </span>
            )}
          </div>
          <div className="flex gap-x-2 flex-1 items-center py-2 flex-wrap gap-y-2 ">
            {b.colors?.map((c, key) => (
              <CopyToClipboard text={c} key={key}>
                <button
                  onClick={(e) => handleCopy(e, c)}
                  className={classNames({
                    "h-11 flex border  group border-border w-10 lg:w-14 items-center justify-center -indent-[99999px] group": true,
                    "hover:indent-0 gap-x-3 w-0 grow px-16": selected,
                  })}
                  style={{
                    backgroundColor: "#" + c,
                    color: calculateContrast(c),
                  }}
                >
                  <span className="h-6 w-6">
                    <MdContentCopy
                      size={24}
                      className="hidden group-hover:block"
                    />
                  </span>
                  <p className="font-medium tracking-wide text-base">
                    <span className="opacity-[0.66]">#</span>
                    {c}
                  </p>
                </button>
              </CopyToClipboard>
            ))}
          </div>
        </div>
        {selected && (
          <div className="flex sm:gap-x-5 gap-x-2 items-center text-brand ">
            <p className="text-sm sm:text-base">
              Updated {convertToDate(b.modified)}
            </p>
            {b.brand_url && (
              <>
                <VscDebugBreakpointLog size={11} />
                <a
                  href={b.brand_url}
                  target="_blank"
                  className="hover:text-[#41545e] hover:underline text-sm sm:text-base"
                  rel="noreferrer"
                >
                  Brand URL
                </a>
              </>
            )}
            {b.source_url && (
              <>
                <VscDebugBreakpointLog size={11} />
                <a
                  href={b.source_url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#41545e] hover:underline text-sm sm:text-base"
                >
                  Source URL
                </a>
              </>
            )}
            <VscDebugBreakpointLog size={11} />
            <Link
              to={`/b/${b.slug}`}
              className="hover:text-[#41545e] hover:underline text-sm sm:text-base"
            >
              Permalink
            </Link>
          </div>
        )}
      </div>
    </LazyLoad>
  );
};

export default memo(Color);
