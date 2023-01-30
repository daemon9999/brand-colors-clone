import {useNavigate, useLocation} from "react-router-dom" 
import {AiOutlineArrowLeft} from "icons"

const BackAction = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleBack = () => {
        navigate(location.state?.return_url || "/", {
            replace: true
        })
    }

    return (
        <div className="cursor-pointer flex items-center gap-x-2 text-brand hover:text-main" onClick={handleBack}>
            <AiOutlineArrowLeft size={23}/>
            All Brands
        </div>
    )
}

export default BackAction