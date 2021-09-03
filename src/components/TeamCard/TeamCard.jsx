import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function TeamCard({ classes, team, rosters, userName }) {

    const roster = rosters.find(({ owner_id }) => owner_id === team.user_id);

    if (roster) {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            <img id="TeamCard-avatar" src={team.metadata.avatar ? team.metadata.avatar : `https://sleepercdn.com/avatars/thumbs/${team.avatar}`} /> <br />
                            <span className={userName.toLowerCase() === team.display_name.toLowerCase() ? "UserTeam" : "OtherTeam"}>{team.metadata.team_name ? team.metadata.team_name : team.display_name}</span>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h4">
                            <b>WINS:</b> {roster.settings.wins} &nbsp;
                            <b>LOSSES:</b> {roster.settings.losses} &nbsp;
                            <b>TIES:</b> {roster.settings.ties} &nbsp; <br />
                            <b>TOTAL FANTASY POINTS:</b> {roster.settings.fpts} &nbsp; <br />
                            <b>FAAB SPENT:</b> {roster.settings.waiver_budget_used} &nbsp;

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