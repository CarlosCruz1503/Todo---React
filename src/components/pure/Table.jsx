import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../containers/FilterComponent';
import { TaskContexto } from '../containers/TaskListComponent';
import TaskComponent from '../pure/TaskComponent';

const Table = () => {

    const stateFilter = useContext(FilterContext)

    const filtro = stateFilter.state
    let state = []
    filtro.forEach((element) => {
        state.push(element.filtro)
    });


    function listTask() {
        if (state) {
            if (state.length > 0) {
                return (
                    <div>
                        <h2>{stateFilter.state[0].name}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scoper="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state[0].map((task, index) => {
                                        return (
                                            (<TaskComponent
                                                key={index}
                                                task={task}
                                                index={index}
                                            >
                                            </TaskComponent>)
                                        )
                                    })
                                }
                                {/** Iterar sobre una lista de tareas */}
                            </tbody>

                        </table>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>There are no tasks to show</h2>
                        <h4>Please, create new tasks</h4>
                    </div>
                )
            }
        }
    }

    return (
        <div>
            {listTask()}
        </div>
    )



}

export default Table;
