import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import connect from "react-redux/lib/connect/connect";
import {createTodo} from "../redux/actions";

class CreateTodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        const newTodo = {
            title, checked: false, id: Date.now().toString()
        }

        this.props.createTodo(newTodo)
        this.setState({ title: '' })
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className={'submit-form'}>
                <TextField required value={this.state.title}
                           name="title" helperText="Максимум символов: 10"
                           label="Название" inputProps={{maxLength: 10}}
                           onChange={ this.changeInputHandler}/>
                <Button size="small" className={'submit-button'}
                        variant="contained" color="primary" type="submit"> Создать
                </Button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createTodo
}

export default connect(null, mapDispatchToProps)(CreateTodo)
