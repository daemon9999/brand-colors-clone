import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames"

import {setSelectedBrands} from "store/brand"
import {Download} from "components/content-header-components";
import {IoCloseSharp, FiLink2} from "icons"


const Actions = () => {
    

  const { selectedBrands } = useSelector((state) => state.brand);
  const dispatch = useDispatch();

  const length = selectedBrands.length
  const linkUrl =
    (process.env.NODE_ENV === "development"
      ? "localhost:3000"
      : process.env.REACT_APP_PROD_URL) +
    "/" +
    (length === 1 ? "b" : "c") +
    "/" +
    selectedBrands.join(",");

  return (
    <div className="h-7 items-center gap-x-2 hidden sm:flex">
      <Download allBrands={false} />
      <FiLink2
        size={24}
        onClick={() => length && prompt("Here's the URL to share", linkUrl)}
        className={classNames({
          "text-brand ": true,
          " hover:text-main cursor-pointer": length,
          "text-opacity-40": !length,
        })}
      />
      <IoCloseSharp
        size={28}
        className={classNames({
          "text-brand ": true,
          " hover:text-main cursor-pointer": length,
          "text-opacity-40": !length,
        })}
        onClick={() => dispatch(setSelectedBrands([]))}
      />

      <p
        className={classNames({
          "text-brand pr-4 border-r border-border": true,
          "text-opacity-40": !length,
        })}
      >
        {selectedBrands.length} brands collected
      </p>

      <Download allBrands={true} />
    </div>
  );
}
export default Actions