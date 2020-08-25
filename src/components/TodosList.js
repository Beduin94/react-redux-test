import * as React from "react";
import {List, ListItemText, Checkbox, ListItemIcon, ListItem} from "@material-ui/core";
import connect from "react-redux/lib/connect/connect";
import {checkedTodo} from "../redux/actions";

const TodosList = props => {
    const {
        todos,
        filter,
        checkedTodo
    } = props

    const handleToggle = (todo) => () => {
        todo.checked = !todo.checked;
        checkedTodo(todo);
    }
    if(todos && todos.length)
        return (
            <List className={'todos-list'}>
                {todos.filter(todo => {
                    console.log(filter);
                    if(filter ==='all')
                        return todo
                    else if (filter ==='checked')
                        return todo.checked === true
                    else if (filter ==='unchecked')
                        return todo.checked === false
                }).map((todo) => {
                    const labelId = `checkbox-list-label-${todo.id}`;

                    return (
                        <ListItem key={todo.id} dense button onClick={handleToggle(todo)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.checked}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${todo.title}`} />
                        </ListItem>
                    );
                })}
            </List>
        );
    else
        return (
            <div>
                Нет записей
            </div>
        );
}

const mapDispatchToProps = {
    checkedTodo
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        filter: state.filter.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
