import React, { useContext, useRef } from 'react';
import { FilterContext } from '../../containers/FilterComponent';
import { TaskContexto } from '../../containers/TaskListComponent';
const CreateTaskComponent = ({ }) => {

    const state = useContext(TaskContexto)
    const filterState = useContext(FilterContext)

    const nameRef = useRef()
    const descriptionRef = useRef()
    const importantRef = useRef()

    return (
        <form>
            <input type="text" placeholder='Name' ref={nameRef} />
            <input type="text" placeholder="description" ref={descriptionRef} />
            <select name="select" ref={importantRef} defaultValue="NORMAL">
                <option value="NORMAL">Normal</option>
                <option value="URGENT">Urgent</option>
                <option value="CHILL">Chill</option>
            </select>
            <button type="submit" onClick={(e) => {
                e.preventDefault()
                state.dispatch({
                    type: "ADD_TASK",
                    payload: {
                        name: nameRef.current.value,
                        description: descriptionRef.current.value,
                        important: importantRef.current.value
                    }
                })
                filterState.dispatch({
                    type: "FILTER_ALL",
                })
            }}> Enviar  </button>
        </form>
    );
}

export default CreateTaskComponent;
