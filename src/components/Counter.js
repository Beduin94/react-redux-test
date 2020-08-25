import * as React from "react";
import connect from "react-redux/lib/connect/connect";

const Counter = props => {
    const { todos } = props

    return (
        <div className={'counter'}>
            Выполнено:{todos.filter(todo => todo.checked === true).length}<br/>
            Не выполнено:{todos.filter(todo => todo.checked === false).length}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos.origin
    }
}

export default connect(mapStateToProps, null)(Counter)
