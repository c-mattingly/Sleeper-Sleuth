import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import InfoCard from '../../components/InfoCard/InfoCard';
import LeagueFeed from '../../components/LeagueFeed/LeagueFeed';

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
    const [leagues, setLeagues] = useState([]);
    const classes = useStyles();
    const userUrl = `https://api.sleeper.app/v1/user/${userName}`
    const leaguesUrl = `https://api.sleeper.app/v1/user/${userID}/leagues/nfl/2021`

    function handleFormSubmit(userName) {
        setUserName(userName);
    }

    useEffect(() => {
        if (userName) {

            fetch(userUrl)

                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                    setUserID(data.user_id)
                    setUserAvatar(data.avatar)
                    console.log(data.avatar)
                    console.log(data)
                    } else if (data == 0){
                        setUserName("")

                    }else {
                        setUserName("Username Not Found")
                    }
                });
        }
    }, [userName]);

    useEffect(() => {
        if (userID) {

            fetch(leaguesUrl)

                .then((res) => res.json())
                .then((data) => {
                    setLeagues(data)
                    console.log(data)
                });
        }
    }, [userID]);

    return (
        <>
            <img id="logo" src="/sleuthlogo.gif"></img>

            <div className={classes.root}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
                        <SearchBar handleFormSubmit={handleFormSubmit} />
                    </Grid>
                    <Grid item xs={12}>
                        <InfoCard 
                        classes={classes} 
                        userID={userID} 
                        userName={userName}
                        userAvatar={userAvatar}
                        leagues={leagues} />
                    </Grid>
                    <Grid item xs={12}>
                        <LeagueFeed
                        classes={classes} 
                        leagues={leagues}
                        userName={userName} />
                    </Grid>
                </Grid>
            </div>
            <div id="copyright">
                ©2021 Mike Mattingly
            </div>
        </>


    );


}
