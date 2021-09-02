import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function RosterCard({ classes, team }) {



    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="h4">
                        
                        
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}