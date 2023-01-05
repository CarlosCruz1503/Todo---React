import React, { useContext, createContext, useReducer, useEffect } from 'react';
import FilterButtons from '../pure/FilterButtonsComponent';
import { TaskContexto } from './TaskListComponent';
import Table from '../pure/Table';
import CreateTaskComponent from '../pure/Form/CreateTaskComponent';


export const FilterContext = React.createContext()

const FilterComponent = () => {

    const stateTask = useContext(TaskContexto);

    const initialValues =  [{ filtro: stateTask.state, name: "ALL" }]

    const FilterReducer = (state, action) => {
        switch (action.type) {
            case "FILTER_ALL":
                return [{ filtro: stateTask.state, name: "ALL" }]
            case "FILTER_COMPLETED":
                let tempCompleted = [...stateTask.state]
                let filterTempCompleted = tempCompleted.filter(element => element.completed === true)
                return [{ filtro: filterTempCompleted, name: "COMPLETED" }]
            case "FILTER_ACTIVE":
                let tempActive = [...stateTask.state]
                let filterTempUncompleted = tempActive.filter(element => element.completed === false)
                return [{ filtro: filterTempUncompleted, name: "ACTIVE" }]
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(FilterReducer, initialValues)



    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            <div>
                <Table></Table>
                <CreateTaskComponent></CreateTaskComponent>
                <FilterButtons></FilterButtons>
            </div>
        </FilterContext.Provider>
    );
}

export default FilterComponent;
