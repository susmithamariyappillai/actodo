
import TodoItem from "./TodoItem"


function TodoList(props){
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return(
       
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's list</h1>
            {activityArr.length===0?<p> you haven't added any activities yet</p>:""}
            
            {
                activityArr.map(function(item,index){
                   return <TodoItem  id={item.id}item={item} index={index} activityArr={activityArr} setactivityArr={setactivityArr}/>
                })
            }
          </div>
    )
}
export default TodoList