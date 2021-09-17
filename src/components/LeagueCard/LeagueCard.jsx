import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import TeamCard from '../TeamCard/TeamCard';
import RosterCard from '../RosterCard/RosterCard';




export default function LeagueCard({ classes, league, userName }) {
    const [teams, setTeams] = useState();
    const [rosters, setRosters] = useState();
    const [playerDB, setPlayerDB] = useState();
    const teamsUrl = `https://api.sleeper.app/v1/league/${league.league_id}/users`
    const rostersUrl = `https://api.sleeper.app/v1/league/${league.league_id}/rosters`
    const playerDBUrl = "/players.json"


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

    useEffect(() => {
        if (league.league_id) {

            fetch(playerDBUrl)

                .then((res) => res.json())
                .then((data) => {
                    setPlayerDB(data)
                    console.log(data)
                });
        }
    }, [league.league_id]);

    if ((teams) && (rosters) && (userName !== "Username Not Found")) {

        return (
            <div id="LeagueCard-card">
            <Card className={classes.root} >
                <CardActionArea >
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            <img id="LeagueCard-avatar" src={`https://sleepercdn.com/avatars/${league.avatar}`} /> <br />
                            {league.name}
                        </Typography>
                        <Accordion id="LeagueCard-accordion">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">

                                <Typography variant="body2" color="textSecondary" component="h4">
                                    <b>Number of Teams: </b> {league.total_rosters}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                    {teams.map((team, index) => {

                                        return (
                                            <TeamCard
                                                classes={classes}
                                                team={team}
                                                key={index}
                                                rosters={rosters}
                                                rosterInd={index}
                                                userName={userName}
                                                playerDB={playerDB}
                                            />
                                        );
                                    })}
                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                    </CardContent>
                </CardActionArea>
            </Card >
            </div>
        )
    } else {
        return (
            <h3></h3>
        )
    }
}