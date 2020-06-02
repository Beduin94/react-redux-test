import React from 'react';
import './App.css';
import CreateTodo from "./components/CreateTodo";
import TodosList from "./components/TodosList";
import Filter from "./components/Filter";
import Counter from "./components/Counter";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <div>
        <Container fixed>
            <Paper elevation={3} className="app-container">
                <Box m={2}>
                    <h3>Список Todo</h3>
                </Box>
                <Box m={2}>
                    <CreateTodo/>
                </Box>
                <Box m={2} display="flex">
                    <Box>
                        <Counter/>
                    </Box>
                    <Box>
                        <Filter/>
                    </Box>
                </Box>
                <Box m={2}>
                    <TodosList/>
                </Box>
            </Paper>
        </Container>
    </div>
  );
}

export default App;
