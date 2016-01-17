import React from 'react'
import cx from 'classnames'

export default function FilterButton(props) {
  const className = cx({
    selected: props.selectedFilter === props.value
  })

  return (
    <li>
      <a className={className} onClick={() => props.onClick(props.value)}>
        {props.label}
      </a>
    </li>
  )
}