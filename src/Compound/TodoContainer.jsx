import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
function TodoContainer()
{
     const [activityArr,setactivityArr] =useState([
            {
                id:1,
                activity:"Go for a Walk"
            },
            {
                id:2,
                activity:"Have Breakfast"
            },
            {
                id:3,
                activity:"Go to Work"
            }

        ])
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                
                <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}></AddTodoForm>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
          

          
          
        </div>
        </div>

    )
}
export default TodoContainer