import { Link } from "react-router-dom"
import './style.css'

const BtnRouter = ({link, name}) => {
    return (
        <div className="BtnRouter">
            <Link to={link}>{name}</Link>
        </div>
    )
}

export default BtnRouter