import { useState } from 'react'
import Title from '../components/txt/title'
import './styles.css'
import db from '../db/test.json'
import Tasks from '../components/Box/Tasks'
import BtnRouter from '../components/Bottons/BtnRouter'

const Finalided = () => {
    const [datas, setDatas] = useState(db.Finalided)

    return (
        <div className="Primary">
            <Title name="A_G_E_N_D_A" />
            <Tasks type="2" datas={datas} />
            <BtnRouter 
            name="Voltar" 
            link="/" />
        </div>
    )
}

export default Finalided