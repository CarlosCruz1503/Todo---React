import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../containers/FilterComponent';
import { TaskContexto } from '../containers/TaskListComponent';
import TaskComponent from '../pure/TaskComponent';
import "../../styles/sass/table.scss"

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
                        <h2 className="filter-title">{stateFilter.state[0].name}</h2>
                        <div className='table-task'>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col-table">Title</th>
                                        <th scope="col-table">Description</th>
                                        <th scope="col-table">Priority</th>
                                        <th scoper="col-table">Actions</th>
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
