import React, { useContext, useRef } from 'react';
import { FilterContext } from '../../containers/FilterComponent';
import { TaskContexto } from '../../containers/TaskListComponent';
import "../../../styles/sass/form.scss"
const CreateTaskComponent = ({ }) => {

    const state = useContext(TaskContexto)
    const filterState = useContext(FilterContext)

    const nameRef = useRef()
    const descriptionRef = useRef()
    const importantRef = useRef()

    return (
        <form className="form-task">
            <h2 className='form-task-title'>Create New Task</h2>
            <div class="form">
                <div>
                    <input type="text" class="form-control" placeholder='Name' ref={nameRef} />
                    <input type="text" class="form-control" placeholder="Description" ref={descriptionRef} />
                </div>
                <div className='div-form-select'>
                    <label> Urgency of task </label>
                    <div >
                        <select name="select" class="form-select new-task-select" ref={importantRef} defaultValue="NORMAL">
                            <option value="NORMAL">Normal</option>
                            <option value="URGENT">Urgent</option>
                            <option value="CHILL">Chill</option>
                        </select>

                    </div></div>
            </div>
            <button class="btn btn-info btn-task-form" type="submit" onClick={(e) => {
                e.preventDefault()
                if (nameRef.current.value !== "") {
                    state.dispatch({
                        type: "ADD_TASK",
                        payload: {
                            name: nameRef.current.value,
                            description: descriptionRef.current.value,
                            important: importantRef.current.value
                        }
                    })
                } else {
                    return nameRef.current.placeholder = "Nombre Necesario"
                }
                filterState.dispatch({
                    type: "FILTER_ALL",
                })
            }}> Add Task  </button>
        </form>
    );
}

export default CreateTaskComponent;
