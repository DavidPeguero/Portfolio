import { useEffect, useState } from 'react'
import api from '../api/genderize' 

export default function Builds(){
    const [display, setDisplay] = useState("")
    const [name, setName] = useState("")
    const [history, setHistory] = useState([])
    // const [historyElements, setHistoryElements] = useState([])

    useEffect(()=>{
        api.get(`/?name=${name}`)
        .then((res)=>{
            let newString = `Name: ${res.data.name}  Gender: ${res.data.gender} Probability: ${res.data.probability}`  
            let newDisp = (
            <div>
                <h1>Name: {res.data.name}</h1>
                <p>Gender: {res.data.gender}</p>
                <p>Probability:{res.data.probability}</p>
            </div>
                )
            setDisplay(newDisp)
        }).catch((err) => console.log(err))
    }, [name])

    // useEffect(()=>{
    //     if(name !== ""){
    //         let newElement = api.get(`/?name=${name}`).then((res) => {
    //             return (
    //                 {
    //                     id : history.length,
    //                     name : name,
    //                     gender : res.data.gender,
    //                     probability : res.data.probability
    //                 }
    //             )
    //             }
    //         ).catch((err) => 
    //         console.log(err))
    //         setHistoryElements((oldHistoryElements) => { [...oldHistoryElements, newElement]})
    //     }
        
            
    //     console.log(historyElements)})
    // , [history]

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if(name !== ""){
            setHistory(oldHistory => [...oldHistory, {id : oldHistory.length + 1, name : name}])
            historyElements= history.map(async (entry) => {
                wait(500)
                await api.get(`/?name=${entry.name}`)
                .then((res) => {
                    console.log(<div key={entry.id}>
                        <h1>Name: {res.data.name}</h1>
                        <p>Gender: {res.data.gender}</p>
                        <p>Probability: {res.data.probability}</p>
                    </div>)
                    
                    return(
                        <div key={entry.id}>
                            <h1>Name: {res.data.name}</h1>
                            <p>Gender: {res.data.gender}</p>
                            <p>Probability: {res.data.probability}</p>
                        </div>
                    )
                }).catch(err => console.log(err))
            })
        }    
    }

 
    
        let historyElements;
    
    

    

    
    return(
        <div className='page--container'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}></input>
                <button type='submit'>Reveal Gender</button>
            </form>
            {display}
            <div>{historyElements !== 0 && historyElements}</div>
        </div>
    )
}