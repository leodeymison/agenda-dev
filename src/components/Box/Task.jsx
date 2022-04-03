import './style.css'
import Options from './Options'
import { BiTimeFive } from 'react-icons/bi'
import { useState } from 'react'


const Task = ({name,active,date,id,datas,type}) => {
    const [similar, setSimilar] = useState('')

    return (
        <div className={`Task ${active}`}>
            <p className='name'>{name}</p>
            <p className='time'>
                <span className='i'>
                    <BiTimeFive />
                </span>
                {date}</p>
            <Options 
            datas={datas}
            id={id} 
            type={type}
            setSimilar={setSimilar} />
        </div>
    )
}

export default Task