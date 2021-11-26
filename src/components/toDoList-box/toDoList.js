import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";
import SearchForm from '../../components/search-form/searchForm'

const Todos = (props) => {
  
  const [todo, setTodo] = useState("");
  
  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (

    <div className="addTodos">
      <div className="box box-primary">
          <div className="box-header">
            <i className="ion ion-clipboard" />
            <h3 className="box-title">To Do List</h3>
            <div className="box-tools pull-right"></div>
          </div>{/* /.box-header */}

        {/* TODO List */}
        <ul className="todo-list">
          {props.todos.length > 0 &&
            props.todos.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <span className="handle"></span>
                    <input type="checkbox" defaultValue name />
                    <span className="text">{item.title}{item.item}</span>
                  </li>
                </>
              )
            })}
        </ul>

        <div className="box-body">
          {/* ADD NEW TODO */}
          <div className="box-footer clearfix no-border">
            <SearchForm placeholder={'add new todo..'} value={todo} onChange={handleChange} />
            <button className="btn btn-default pull-right"  onClick={() => add()}>
              <i className="fa fa-plus" /> 
              Add item
            </button>
          </div>
        </div>{/* /.box-body */}

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.reducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);