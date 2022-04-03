import './style.css'
import Task from './Task'

const Tasks = ({datas, type}) => {
    return (
        <div className="Tasks">
            {datas.map(task => 
                <Task 
                key={task.id}
                type={type}
                id={task.id}
                name={task.name} 
                active={task.active}
                date={task.date} 
                datas={datas}/>
            )}
        </div>
    )
}

export default Tasks