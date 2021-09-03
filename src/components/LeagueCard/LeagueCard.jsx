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
import RosterCard from '../RosterCard/RosterCard';


export default function LeagueCard({ classes, league, userName }) {
    const [teams, setTeams] = useState();
    const [rosters, setRosters] = useState();
    const [teamInfo, setTeamInfo] = useState();
    const teamsUrl = `https://api.sleeper.app/v1/league/${league.league_id}/users`
    const rostersUrl = `https://api.sleeper.app/v1/league/${league.league_id}/rosters`


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

    useEffect(() => {
        if (league.league_id) {

            fetch(rostersUrl)

                .then((res) => res.json())
                .then((data) => {
                    setRosters(data)
                    console.log(data)
                });
        }
    }, [league.league_id]);

    if ((teams) && (rosters))  {

        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            <img id="LeagueCard-avatar" src={`https://sleepercdn.com/avatars/thumbs/${league.avatar}`} /> <br />
                            {league.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h4">
                            <b>Number of Teams:</b> {league.total_rosters}

                            {teams.map((team, index) => {

                                return (
                                    <TeamCard
                                        classes={classes}
                                        team={team}
                                        key={index}
                                        rosters={rosters}
                                        rosterInd={index}
                                        userName={userName}
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