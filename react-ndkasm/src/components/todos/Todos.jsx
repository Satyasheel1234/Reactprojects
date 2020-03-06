import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodo, getTodos } from "../.././actions";

class Todos extends Component {
  componentDidMount() {
    this.props.getTodos().then(() => {
      const firstTodo = !!this.props.todos[0] && this.props.todos[0].id;

      console.log("First todo ID is:", firstTodo);

      // call getTodo with this ID
      this.props.getTodo(firstTodo)
        .then(() => {
          console.log('ID details are:', this.props.todo)
        });
    });
  }

  handleClick = id => {
    this.props.getTodo(id).then(() => {
      console.log(`You Clicked: ${JSON.stringify(this.props.todo)}`);
    });
  };

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <li key={todo.id} onClick={() => this.handleClick(todo.id)}>
              <span>
                {" "}
                {todo.id} {todo.title}`{" "}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { todos, todo } = state;

  return {
    todos,
    todo
  };
};

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
  getTodo: id => dispatch(getTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
