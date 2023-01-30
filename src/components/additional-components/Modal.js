import {useDispatch} from "react-redux"
import {handleModal} from "store/modal"
import {IoCloseSharp} from "icons"
const Modal = () => {
   const dispatch = useDispatch()
    
  return (
    <div className="fixed bg-white bg-opacity-80 w-full h-full flex items-center justify-center z-40">
      <div className="bg-white w-[800px] text-lg max-w-[90%] shadow-2xl text-brand p-4 sm:p-14 relative flex flex-col gap-y-5">
        <span onClick={() => dispatch(handleModal())} className="w-8 h-8 text-main bg-border bg-opacity-40 flex items-center justify-center cursor-pointer absolute top-3 right-3">
            <IoCloseSharp size={26} />
        </span>
        <h1 className="text-main text-[26px] font-bold">About BrandColors</h1>
        <p>
          BrandColors was created by{" "}
          <a
            href="https://www.designbombs.com/"
            className="text-main font-bold"
          >
            DesignBombs
          </a>
          . The goal was to create a helpful reference for the brand color codes
          that are needed most often.
        </p>

        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <span className="text-main font-bold">2 million pageviews</span>. There are now over <span className="text-main font-bold">600 brands</span>
          with <span className="text-main font-bold">1600 colors</span> and the collection is always growing.
        </p>
      </div>
    </div>
  );
};

export default Modal;
