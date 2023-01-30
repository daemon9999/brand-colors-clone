import { useEffect, memo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchedBrands, setSelectedBrands } from "store/brand";

import { Content } from "components/layout-components";
import { Actions, Download, BackAction} from "components/content-header-components";
import { Colors, ColorDetail } from "components/content-main-components";

const BrandDetail = () => {
  const { type, brandsUrl } = useParams();
  const { brands } = useSelector((state) => state.brand);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const brandsArray = brandsUrl.split(",");
  const slugs = brands.map((b) => {
    return b.slug;
  });

  const searched = brands.filter((b) => brandsArray.some((s) => b.slug === s));

  const selectedBrand = searched.map((b) => {
    return b.slug;
  });

  const checkBrands = useCallback(() => { 
    if (brandsArray.length === 1){
      return slugs.includes(brandsArray[0])
    }
    return !brandsArray.some((s) => !slugs.includes(s));
  }, [brandsArray, slugs]);

  const handleUrl = useCallback(() => {
    dispatch(setSearchedBrands(searched));
    dispatch(setSelectedBrands(selectedBrand));

    if (type !== "b" && type !== "c") {
      navigate("/error", {
        replace: true,
      });
    }

    if (!checkBrands()) {
      navigate("/error", {
        replace: true,
      });
    }

    if (brandsArray.length > 1 && type === "b") {
      dispatch(setSearchedBrands([]));
    }
  }, [type]);

  useEffect(() => {
    handleUrl();
  }, [handleUrl]);
  return (
    <Content
      leftComponent={<BackAction />}
      rightComponent={
        type === "b" ? <Download allBrands={true} /> : <Actions />
      }
      main={
        type === "b" && brandsArray.length === 1 ? (
          <ColorDetail brandUrl={brandsUrl} />
        ) : (
          <Colors />
        )
      }
    />
  );
};

export default memo(BrandDetail);
