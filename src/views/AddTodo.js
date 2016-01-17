import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onSubmit(e) {
    if (e.key === 'Enter') {
      const value = this.state.value.trim()

      this.props.onSubmit(value)
      this.setState({
        value: ''
      })
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {  
    return (
      <header className="header">
        <h1>todos</h1>

        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyPress={e => this.onSubmit(e)}
          onChange={e => this.onChange(e)}
          value={this.state.value}
          autoFocus
        />
      </header>
    )
  }
}