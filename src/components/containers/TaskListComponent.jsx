import React, { useReducer, useContext,useEffect } from 'react';

import FilterComponent, { FilterContext } from './FilterComponent';

export const TaskContexto = React.createContext()



const initalState = () => {
    if (localStorage.getItem("tasks").length === null) {
        return []
    } else {
        return JSON.parse(localStorage.getItem("tasks"))
    }
}
const TaskListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            let newTasks = [
                ...state,
                {
                    name: action.payload.name,
                    description: action.payload.description,
                    important: action.payload.important,
                    completed: false
                }
            ]
            localStorage.setItem("tasks", JSON.stringify(newTasks))
            return newTasks
        case "DELETE_TASK":
            let temp = [...state]
            temp.splice(action.payload.deleteId, 1)
            localStorage.setItem("tasks", JSON.stringify(temp))
            return temp
        case "CHANGE_COMPLETE":
            const tempTasks = [...state]
            tempTasks[action.payload.completeId].completed = action.payload.complete
            localStorage.setItem("tasks", JSON.stringify(tempTasks))
            return tempTasks
        default:
            return state
    }
}

const TaskListComponent = () => {



    const [state, dispatch] = useReducer(TaskListReducer, initalState())

    function advice() {
        if (state.length < 1) {
            return (
                <div>
                    <h3 class="text-center">You do not have any tasks yet </h3>
                    <h4 class="text-center">If you want you can create new tasks</h4>
                </div>
            )
        }
    }



    return (
        <TaskContexto.Provider value={{ state, dispatch }}>
            {advice()}
            <div className="col-12 card-col">
                <div className="card">
                    <div className="card-header p-3">
                        <h3>
                            Your Tasks:
                        </h3>
                    </div>
                    <div className="card-body p-3" data-mdb-perfect-scrollbar="true" style={{ position: "relative" }}>
                        <FilterComponent></FilterComponent>
                    </div>
                </div>
            </div>

        </TaskContexto.Provider>

    );

}

export default TaskListComponent;
