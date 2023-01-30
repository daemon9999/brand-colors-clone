import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"

import {handleModal} from "store/modal"
const Sidebar = () => {

  const dispatch = useDispatch()
  
  return (
    <>
      <aside className="lg:w-88 h-full lg:py-9 pt-5 px-5 lg:px-10 border-r border-border overflow-hidden shrink-0">
        <Link
          to="/"
          className="bg-no-repeat mb-7.5 pl-[3.5rem] lg:-ml-5 bg-[length:44px_44px] h-11 flex items-center bg-logo text-2xl"
        >
          <h1>
            Brand<b>Colors</b>
          </h1>
        </Link>
        <p className="text-brand text-base mb-5 hidden lg:block ">
          The biggest collection of official brand color codes around. Curated
          by{" "}
          <a className="hover:text-link" href="https://twitter.com/brandcolors">
            @brandcolors
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/brandcolors/feedback/issues"
            className="hover:text-link"
          >
            friends
          </a>
          .
        </p>

        <div className="flex lg:flex-col lg:justify-center text-base font-bold text-main gap-x-6 lg:gap-y-2 lg:border-b border-border pb-7">
          <a
            href="https://github.com/brandcolors/feedback"
            className="hover:text-link"
            rel="noreferrer"
            target={"_blank"}
          >
            Suggest a Brand
          </a>
          <div onClick={() => dispatch(handleModal())} className="hover:text-link cursor-pointer">
            About BrandColors
          </div>
        </div>

        <a
          className="group flex flex-col gap-y-2 pb-7 lg:pt-6 lg:border-b border-border"
          rel="noreferrer"
          target="_blank"
          href="https://www.designbombs.com/how-to-make-a-website/"
        >
          <p className="text-base text-main">
            Brand<b>Colors</b> + DesignBombs
          </p>
          <p className="group-hover:text-link text-sm text-brand">
            Learn how to make a website - we have put together an in-depth guide
            that will help you build your first website with WordPress.
          </p>
        </a>
      </aside>
    </>
  );
};

export default Sidebar;
