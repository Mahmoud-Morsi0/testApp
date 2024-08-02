import { useNavigate } from "react-router-dom"
import "../App.css"
function Error() {

    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate("/")
    }
    return (
        <div className="custom-height flex justify-center items-center text-center">
            <div>
                <div className=" mb-5 font-mono text-red-600" > Page Not Found</div>
                <button
                    onClick={navigateToHome}
                    className="btn"
                >
                    Home
                </button>

            </div>
        </div>
    )
}

export default Error