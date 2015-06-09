var app = app || {}

var ESCAPE_KEY = 27
var ENTER_KEY = 13

app.TodoItem = React.createClass({

  handleSubmit: function (event) {
    var val = this.state.editText.trim();
    if (val) {
      this.props.onSave(val);
      this.setState({editText: val});
    } else {
      this.props.onDestroy();
    }
  },

  getInitialState: function () {
    return {editText: this.props.todo.title};
  },

  handleChange: function (event) {
    this.setState({editText: event.target.value});
  },

  handleEdit: function () {
    this.props.onEdit();
    this.setState({editText: this.props.todo.title});
  },

  handleKeyDown: function (event) {
    if (event.which === ESCAPE_KEY) {
      this.setState({editText: this.props.todo.title});
      this.props.onCancel(event);
    } else if (event.which === ENTER_KEY) {
      this.handleSubmit(event);
    }
  },

  render: function () {
    return (
      <li className={React.addons.classSet({
        completed: this.props.todo.completed,
        editing: this.props.editing
      })}>
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
          <label onDoubleClick={this.handleEdit}>
            {this.props.todo.title}
          </label>
          <button className="destroy" onClick={this.props.onDestroy} />
        </div>
        <input
          ref="editField"
          className="edit"
          value={this.state.editText}
          onBlur={this.handleSubmit}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    )
  }
})
