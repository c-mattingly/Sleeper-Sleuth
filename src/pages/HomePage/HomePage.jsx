import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../../components/SearchBar/SearchBar'
import InfoCard from '../../components/InfoCard/InfoCard'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function HomePage() {
    const [userName, setUserName] = useState();
    const [userID, setUserID] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const[avatar, setAvatar] = useState();
    const classes = useStyles();
    const userUrl = `https://api.sleeper.app/v1/user/${userName}`
    const avatarUrl = `https://sleepercdn.com/avatars/${userAvatar}`

    function handleFormSubmit(userName) {
        setUserName(userName);
    }

    useEffect(() => {
        if (userName) {

            fetch(userUrl)

                .then((res) => res.json())
                .then((data) => {
                    setUserID(data.user_id)
                    setUserAvatar(data.avatar)
                    console.log(data.avatar)
                    console.log(data)
                });
        }
    }, [userName]);

    useEffect(() => {
        if (userAvatar) {

            fetch(avatarUrl)

                .then((res) => res.json())
                .then((dataAvatar) => {
                    setAvatar(dataAvatar)
                    console.log(dataAvatar)
                });
        }
    }, [userAvatar]);

    return (
        <>
            <h1>Sleeper Sleuth</h1>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar handleFormSubmit={handleFormSubmit} />
                    </Grid>
                    <Grid item xs={6}>
                        <InfoCard 
                        classes={classes} 
                        userID={userID} 
                        userName={userName}
                        userAvatar={userAvatar} />
                    </Grid>
                </Grid>
            </div>
        </>


    );


}
