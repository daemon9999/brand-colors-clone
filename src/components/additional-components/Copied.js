import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCopy } from "store/brand";
const Copied = () => {
  const { copy } = useSelector((state) => state.brand);
  const dispatch = useDispatch();

  useEffect(() => {
    if (copy.copied) {
      setTimeout(() => {
        dispatch(setCopy({ text: "", copied: false }));
      }, 2000);
    }
  }, [copy]);

  if (copy.copied) {
    return (
      <div className="fixed whitespace-pre bottom-5 z-50 right-8 bg-black bg-opacity-70 text-white rounded h-14 px-8 flex items-center justify-center">
        Copied <span className=" tracking-wider font-bold">{copy.text}</span> to
        clipboard
      </div>
    );
  }
};

export default Copied;
