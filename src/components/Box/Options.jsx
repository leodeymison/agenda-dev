import { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import './style.css'
import { AiOutlineClose } from 'react-icons/ai'
import Option from './Option'

const Options = ({setSimilar,id,datas,type}) => {
    const [option, setOption] = useState();

    function stateTransf(){
        if(option === ''){
            setSimilar('active')
            setOption('active')
            return
        }
        setOption('')
        setSimilar('')
    }
    function Remove(){
        const RemoveElementData = datas.filter(
            data => data.id !== id
        )
        console.log(RemoveElementData)
    }

    return (
        <div className='Options'>
            {
                option && (
                    <Option type={type} Remove={Remove} />
                )  
            }
            <span onClick={stateTransf}>
                {
                    option && (
                        <AiOutlineClose />
                    )
                }
                {
                    !option && (
                        <CgMenuGridR />
                    )
                }
                
            </span>
        </div>
    )
}

export default Options