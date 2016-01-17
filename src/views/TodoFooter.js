import React, { Component } from 'react'
import TodoCount from './TodoCount'
import ClearCompleted from './ClearCompleted'
import Filter from './Filter'

export default class TodoFooter extends Component {
  render() {
    const {todos} = this.props
    let footer = null

    if (todos.length) footer = (
      <footer className="footer">
        <TodoCount todos={todos} />

        <Filter
          onClick={this.props.changeFilter}
          selectedFilter={this.props.filter}
        />

        <ClearCompleted todos={todos} onClick={this.props.clearCompleted} />
      </footer>
    )

    return footer
  }
}