import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function InfoCard({userName, userID, userAvatar, classes, leagues}) {

console.log(leagues.length)

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                    <img id="InfoCard-avatar" src={`https://sleepercdn.com/avatars/${userAvatar}`} /> {userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h4">
                        <b>Leagues:</b> {leagues.length}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}