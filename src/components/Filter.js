import * as React from "react";
import TextField from "@material-ui/core/TextField";
import connect from "react-redux/lib/connect/connect";
import MenuItem from "@material-ui/core/MenuItem";
import {changeFilter} from "../redux/actions";

const options = [
    {
        value: 'all',
        label: 'Все',
    },
    {
        value: 'checked',
        label: 'Выполнено',
    },
    {
        value: 'unchecked',
        label: 'Не выполнено',
    },
];

class Filter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: 'all'
        }
    }

    handleChange = event => {
        event.persist()
        const { changeFilter } = this.props
        const { name, value } = event.target
        this.setState({[name]: value}, () => {
            changeFilter(this.state.filter);
        })
    }

    render() {
        return (
            <form noValidate autoComplete="off">
                <TextField
                    id="standard-select-currency"
                    name="filter"
                    select
                    label="Фильтр"
                    value={this.state.filter}
                    onChange={this.handleChange}
                    helperText="Фильтр todo"
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
        )
    }
}

const mapDispatchToProps = {
    changeFilter
}

export default connect(null, mapDispatchToProps)(Filter)
