import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: this.props.text,
      editing: false
    }
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  onInputKeyDown(e) {
    switch(e.key) {
      case('Escape'):
        this.setState({
          inputValue: this.props.text,
          editing: false
        })

        break

      case('Enter'):
        this.props.onEdit(this.state.inputValue.trim())
        this.setState({
          editing: false
        })

        break
    }
  }

  onLabelDoubleClick() {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    const className = cx({
      completed: this.props.completed,
      editing: this.state.editing
    })

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={this.props.onChange}
          />

          <label onDoubleClick={() => this.onLabelDoubleClick()}>
            {this.props.text}
          </label>

          <button className="destroy" onClick={this.props.onDestroy} />
        </div>

        <input
          className="edit"
          type="text"
          value={this.state.inputValue} 
          onChange={e => this.onInputChange(e)}
          onKeyDown={e => this.onInputKeyDown(e)}
        />
      </li>
    )
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  onDestroy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}