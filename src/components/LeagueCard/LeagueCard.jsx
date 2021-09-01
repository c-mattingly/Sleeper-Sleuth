import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TeamCard from '../TeamCard/TeamCard';


export default function LeagueCard({ classes, league }) {
    const [teams, setTeams] = useState();
    const teamsUrl = `https://api.sleeper.app/v1/league/${league.league_id}/users`


    useEffect(() => {
        if (league.league_id) {

            fetch(teamsUrl)

                .then((res) => res.json())
                .then((data) => {
                    setTeams(data)
                    console.log(data)
                });
        }
    }, [league.league_id]);

    if (teams) {

        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            <img id="InfoCard-avatar" src={`https://sleepercdn.com/avatars/thumbs/${league.avatar}`} /> {league.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h4">
                            <b>Number of Teams:</b> {league.total_rosters}

                            {teams.map((team, index) => {

                                return (
                                    <TeamCard
                                        classes={classes}
                                        team={team}
                                        key={index}
                                    />
                                );
                            })}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    } else {
        return (
            <h3>.</h3>
        )
    }
}