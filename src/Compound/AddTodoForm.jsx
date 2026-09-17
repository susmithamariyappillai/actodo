import { useState } from "react"
function AddTodoForm(props) 
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setNewactivity]=useState("")

    function handleChange(evt){
        setNewactivity(evt.target.value)

    }
    function addActivity(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input  value={newactivity} onChange={handleChange} type="text" className="border border-black p-1 bg-transparent placeholder:text-gray-500" placeholder="Next Activity?"></input>
                <button  onClick={addActivity}className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>

    )



}

export default AddTodoForm