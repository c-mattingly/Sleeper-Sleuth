import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function TeamCard({ classes, team }) {



    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        <img id="TeamCard-avatar" src={team.metadata.avatar ? team.metadata.avatar : `https://sleepercdn.com/avatars/thumbs/${team.avatar}`} /> 
                        {team.metadata.team_name ? team.metadata.team_name : team.display_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h4">
                        
                        
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}