var app = app || {}

app.ACTIVE_TODOS = 'active'
app.COMPLETED_TODOS = 'completed'

var TodoItem = app.TodoItem
var TodoFooter = app.TodoFooter

TodoApp = React.createClass({

  getInitialState: function () {
    return {
      nowShowing: 'all',
      editing: null
    }
  },

  componentDidMount: function () {
    var setState = this.setState;
    var router = Router({
      '/': setState.bind(this, {nowShowing: app.ALL_TODOS}),
      '/active': setState.bind(this, {nowShowing: app.ACTIVE_TODOS}),
      '/completed': setState.bind(this, {nowShowing: app.COMPLETED_TODOS})
    });
    router.init('/');
  },
  
  toggle: function (todo) {
    this.props.model.toggle(todo)
  },

  toggleAll: function (event) {
    var checked = event.target.checked
    this.props.model.toggleAll(checked)
  },

  destroy: function (todo) {
    this.props.model.destroy(todo)
  },

  edit: function (todo) {
    this.setState({ editing: todo.id })
  },

  cancel: function () {
    this.setState({editing: null});
  },

  save: function (todoToSave, text) {
    this.props.model.save(todoToSave, text);
    this.setState({editing: null});
  },

  handleNewTodoKeyDown: function(event) {
    if (event.which !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.refs.newField.getDOMNode().value.trim();

    if (val) {
      this.props.model.addTodo(val);
      this.refs.newField.getDOMNode().value = '';
    }
  },

  clearCompleted: function () {
    this.props.model.clearCompleted();
  },

  render: function() {
    var main
    var footer
    var todos = this.props.model.todos

    var shownTodos = todos.filter(function(todo) {
      switch (this.state.nowShowing) {
        case app.ACTIVE_TODOS:
          return !todo.completed
        case app.COMPLETED_TODOS:
          return todo.completed
        default:
          return true
      }
    }, this)

    var todoItems = shownTodos.map(function(todo) {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={this.toggle.bind(this, todo)}
          onDestroy={this.destroy.bind(this, todo)}
          onEdit={this.edit.bind(this, todo)}
          editing={this.state.editing === todo.id}
          onSave={this.save.bind(this, todo)}
          onCancel={this.cancel}
        />
      )
    }, this)

    if (todos.length) {
      main = (
        <section id='main'>
          <input
            id='toggle-all'
            type='checkbox'
            onChange={this.toggleAll}
          />

          <ul id='todo-list'>
            {todoItems}
          </ul>
        </section>
      )
    }

    var activeTodoCount = todos.reduce(function (accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);


    var completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer =
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={this.state.nowShowing}
          onClearCompleted={this.clearCompleted}
        />;
    }

    return (
      <div>
        <header id='header'>
          <h1>todos</h1>
          <input
            ref='newField'
            id='new-todo'
            placeholder='Yo man!'
            onKeyDown={this.handleNewTodoKeyDown}
            autoFocus={true}
          />
        </header>
        {main}
        {footer}
      </div>
    )
  }
})

var model = new app.TodoModel('react-todos')

function render() {
  React.render(
    <TodoApp model={model} />,
    document.getElementById('todoapp')
  )
}

model.subscribe(render)
render()
