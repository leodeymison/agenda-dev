import './styles.css'
import CreateAndSearch from '../components/Inputs/CreateAndSearch';
import Tasks from '../components/Box/Tasks';
import BtnRouter from '../components/Bottons/BtnRouter';
import { useState } from 'react';
import db from '../db/test.json'
import Title from '../components/txt/title'

const App = () => {
  const [dataNew, setDataNew] = useState()
  const [data, setData] = useState(db.Tasks)


  return (
    <div className="Primary">
      <Title name="A_G_E_N_D_A" />
      <CreateAndSearch 
        setDataNew={setDataNew} 
        setData={setData}
        db={db.Tasks} />
      <br/>

      <Tasks datas={data} />
      <br/>
      <BtnRouter name="finalizados" link="/finalided" />
    </div>
  );
}

export default App;
