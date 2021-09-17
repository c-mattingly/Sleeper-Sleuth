import React, { useState } from 'react'; 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function SearchBar({handleFormSubmit}) {
    const [leagueSearch, setLeagueSearch] = useState("");

    function handleInput(e) {
        setLeagueSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleFormSubmit(leagueSearch);
    }


    return (
        <Container id="SearchBar-container">
            <form onSubmit={handleSubmit}>
            <TextField id="SearchBar-textField" 
            htmlFor="leagueSearch" 
            id="filled-search" 
            label="Sleeper Username" 
            type="text" 
            variant="standard"
            value={leagueSearch}
            onChange={handleInput} />
            <Button color="primary" type="submit">Search</Button>
            </form>
        </Container>
    )
}