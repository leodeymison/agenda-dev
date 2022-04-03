import { useState } from "react"
import "./style.css"
const CreateAndSearch = ({setDataNew, setData, db}) => {
    const [name, setName] = useState()
    const [date, setDate] = useState()
    function SubmitForm(e){
        e.preventDefault()
        if(!name){
            alert('name vazio')
            return
        }
        if(!date){
            alert('date vazio')
            return
        }
        var NData = {
            "id": Date.now(),
            "name": name,
            "desc": "",
            "active": "desactive",
            "date": date
        }
        db.push(NData)
        setDataNew(NData)
        setData(db)

        // clear
        setName('')
        setDate('')
    }
    function nameFunc(e){
        const newName = e.target.value
        setName(newName)
        const search = db.filter(
            newD => newD.name.toUpperCase().match(newName.toUpperCase())
        )
        setData(search)
        
    }
    return (
        <form onSubmit={SubmitForm} className="Input">
            <input 
                onChange={(e) => nameFunc(e)}
                type="text" 
                value={name}
                placeholder="Agendar"
                className="text" />
            <input 
                onChange={(e) => setDate(e.target.value)}
                type="time" 
                value={date}
                className="time" />
            <button type="submit" className="btn">Salvar</button>
        </form>
    )
}

export default CreateAndSearch