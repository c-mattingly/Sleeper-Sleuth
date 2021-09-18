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
import RosterCard from '../RosterCard/RosterCard';


export default function TeamCard({ classes, team, rosters, userName, playerDB }) {

    const roster = rosters.find(({ owner_id }) => owner_id === team.user_id);

    if ((roster) && (userName !== "Username Not Found")) {
        return (
            <div id="TeamCard-card">
            <Card className={classes.root} >
                <CardActionArea>
                    <CardContent>
                    {/* <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header"> */}

                        <Typography gutterBottom variant="h4" component="h2" className="teamNameWithAvatar">
                            <img id="TeamCard-avatar" src={team.metadata.avatar ? team.metadata.avatar : `https://sleepercdn.com/avatars/${team.avatar}`} /> <br />
                            <span className={userName.toLowerCase() === team.display_name.toLowerCase() ? "UserTeam" : "OtherTeam"}>{team.metadata.team_name ? team.metadata.team_name : team.display_name}</span>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h4">
                            <b>WINS:</b> {roster.settings.wins} &nbsp;
                            <b>LOSSES:</b> {roster.settings.losses} &nbsp;
                            <b>TIES:</b> {roster.settings.ties} &nbsp; <br />
                            <b>TOTAL FANTASY POINTS:</b> {roster.settings.fpts} &nbsp; <br />
                            <b>FAAB SPENT:</b> {roster.settings.waiver_budget_used} &nbsp;
                        </Typography>
                        {/* </AccordionSummary>
                        <AccordionDetails>
                        */}
                        {/* <Typography>
                            
                            {roster.players.map((player, index) => {

                                return (
                                    <RosterCard
                                        classes={classes}
                                        player={player}
                                        key={index}
                                        roster={roster}
                                        playerDB={playerDB}
                                    />
                                );
                            })}
                        </Typography> */}
                      
                        {/* </AccordionDetails>
                        </Accordion> */}
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        )
    } else {
        return (
            <h3></h3>
        )
    }

}