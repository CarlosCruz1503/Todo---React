import React, { useContext } from 'react';
import { TaskContexto } from '../containers/TaskListComponent';
import "../../styles/sass/task.scss";
import { FilterContext } from '../containers/FilterComponent';

const TaskComponent = ({ task, index }) => {
    const taskList = useContext(TaskContexto)
    const filtros = useContext(FilterContext)
    function taskLevelBagde() {
        switch (task.important) {
            case "NORMAL":
                return (<h5 ><span className="badge bg-primary">{task.important}</span></h5>)
            case "URGENT":
                return (<h5><span className="badge bg-warning">{task.important}</span></h5>)
            case "CHILL":
                return (<h5><span className="badge bg-success">{task.important}</span></h5>)
            default:
                break;
        }
    }
    function TaskImportant() {
        if (task.completed) {
            return (<i onClick={() => {
                taskList.dispatch({
                    type: "CHANGE_COMPLETE",
                    payload: {
                        completeId: index,
                        complete: false
                    }
                })
                if (filtros.state[0].name === "ALL") {
                    filtros.dispatch({
                        type: "FILTER_ALL",
                    })
                } else if (filtros.state[0].name === "COMPLETED") {
                    filtros.dispatch({
                        type: "FILTER_COMPLETED",
                    })
                } else if (filtros.state[0].name === "ACTIVE") {
                    filtros.dispatch({
                        type: "FILTER_ACTIVE",
                    })
                }

            }} className="bi bi-toggle-on task-action" style={{ color: "green", fontSize: "1.4rem" }}></i>)
        } else {
            return (<i onClick={() => {
                taskList.dispatch({
                    type: "CHANGE_COMPLETE",
                    payload: {
                        completeId: index,
                        complete: true
                    }
                })
                if (filtros.state[0].name === "ALL") {
                    filtros.dispatch({
                        type: "FILTER_ALL",
                    })
                } else if (filtros.state[0].name === "COMPLETED") {
                    filtros.dispatch({
                        type: "FILTER_COMPLETED",
                    })
                } else if (filtros.state[0].name === "ACTIVE") {
                    filtros.dispatch({
                        type: "FILTER_ACTIVE",
                    })
                }
            }
            } className="bi bi-toggle-off task-action" style={{ color: "gray", fontSize: "1.4rem" }}></i>)
        }
    }

    return (
        <tr className={task.completed ? "fw-normal task-completed" : "fw-normal task-pending"}>
            <td>
                <span className='ms-2'>{task.name}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span className=''>{taskLevelBagde()}</span>
            </td>
            <td className='align-middle'>
                {TaskImportant()}
                <i onClick={() => {
                    taskList.dispatch(
                        {
                            type: "DELETE_TASK",
                            payload: {
                                deleteId: index
                            }
                        }
                    )
                    filtros.dispatch({
                        type: "FILTER_ALL",
                    })
                }
                } className="bi bi-trash task-action" style={{ color: "red", fontSize: "1.4rem" }}></i>
            </td>

        </tr>
    );
}

export default TaskComponent;
