import React,{useContext} from 'react';
import { FilterContext } from '../containers/FilterComponent';

const FilterButtons = () => {

    const filterState = useContext(FilterContext)

    return (
        <div>
            <button onClick={() => filterState.dispatch({
                type:"FILTER_ALL"
            })}>ALL</button>
            <button onClick={() => filterState.dispatch({
                type:"FILTER_COMPLETED"
            })}>Completed</button>
            <button onClick={() => filterState.dispatch({
                type:"FILTER_ACTIVE"
            })}>ACTIVE</button>
        </div>
    );
}

export default FilterButtons;
