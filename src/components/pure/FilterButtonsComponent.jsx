import React, { useContext } from 'react';
import { FilterContext } from '../containers/FilterComponent';

const FilterButtons = () => {

    const filterState = useContext(FilterContext)

    return (
        <div class="filter-div">
            <p>Filters:</p>
            <button class="buttons-filter" onClick={() => filterState.dispatch({
                type: "FILTER_ALL"
            })}>ALL</button>
            <button class="buttons-filter" onClick={() => filterState.dispatch({
                type: "FILTER_COMPLETED"
            })}>COMPLETED</button>
            <button class="buttons-filter" onClick={() => filterState.dispatch({
                type: "FILTER_ACTIVE"
            })}>ACTIVE</button>
        </div>
    );
}

export default FilterButtons;
