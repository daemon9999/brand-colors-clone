import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import {setSearchedBrands} from "store/brand"
import {AiOutlineSearch} from "icons"
import {IoCloseSharp} from "icons"

const Input = () => {

  const [search, setSearch] = useState("");
  const {brands} = useSelector(state => state.brand)

  const dispatch = useDispatch()

  useEffect(() => {
    if (search) {
      dispatch(
        setSearchedBrands(
          brands.filter((b) =>
            b.title.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    } 
    else {
      dispatch(setSearchedBrands(brands));
    }
  }, [search, brands, dispatch]);

  return (
    <div className="flex items-center gap-x-2">
      <label htmlFor="search">
        <AiOutlineSearch size={24} className="text-brand" />
      </label>
      <input
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Brands"
        className="text-brand outline-none placeholder:text-brand placeholder:text-opacity-60"
      />
      {search && (
        <IoCloseSharp
          onClick={() => setSearch("")}
          size={20}
          className="text-brand cursor-pointer"
        />
      )}
    </div>
  );
};
export default Input