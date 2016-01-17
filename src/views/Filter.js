import React from 'react'
import FilterButton from './FilterButton'
import { FILTERS } from '../constants'

export default function Filter(props) {
  return (
    <ul className="filters">
      <FilterButton
        selectedFilter={props.selectedFilter}
        value={FILTERS.SHOW_ALL}
        label="All"
        onClick={props.onClick}
      />

      <FilterButton
        selectedFilter={props.selectedFilter}
        value={FILTERS.SHOW_ACTIVE}
        label="Active"
        onClick={props.onClick}
      />

      <FilterButton
        selectedFilter={props.selectedFilter}
        value={FILTERS.SHOW_COMPLETED}
        label="Completed"
        onClick={props.onClick}
      />
    </ul>
  )
}

