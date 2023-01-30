import { Outlet } from "react-router-dom";
import {useSelector} from "react-redux"
import {Copied, Modal} from "components/additional-components"
import {Sidebar} from "components/layout-components"

const HomeLayout = () => {

  const {modal} = useSelector(state => state.modal)

  return (
    <div className="lg:h-full block lg:flex ">
      {modal && <Modal/>}
      <Copied />
      <Sidebar />
      <Outlet/>
    </div>
  );
}


export default HomeLayout