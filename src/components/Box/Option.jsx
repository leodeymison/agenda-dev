import { Link } from 'react-router-dom'
import './style.css'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineArrowLeft, AiOutlineCheckCircle,AiOutlineFileText } from 'react-icons/ai'

const Option = ({Remove,type}) => {

    function Edit(){

    }
    function Finalided(){

    }
    return (
        <>
            {
                type && (
                    <ul>
                        <li onClick={Remove}><span><FaRegTrashAlt /></span>Excluir</li>
                        <li><span><AiOutlineArrowLeft /></span>Restaurar</li>
                    </ul>
                )
            }
            {
                !type && (
                    <ul>
                        <li onClick={Remove}><span><FaRegTrashAlt /></span>Excluir</li>
                        <li><span><FiEdit2 /></span>Editar</li>
                        <li><span><AiOutlineCheckCircle /></span>Finalizar</li>
                        <li>
                            <Link to="/desc">
                                <span><AiOutlineFileText /></span>
                                Notas
                            </Link>
                        </li>
                    </ul>
                )
            }
        </>
        
    )
}

export default Option