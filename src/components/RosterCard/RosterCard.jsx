import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function RosterCard({ classes, player, roster, playerDB }) {

    // const playerFind = Object.values(playerDB)
    // const playerFindArr = Array.from(playerFind)
    // const playerFile = Object.values(playerFindArr).reduce((acc, v) => Map.set(v.fantasy_data_id, v), new Map());
    // console.log(playerFindArr, " <--values");







    return (

        <Card className={classes.root} id="RosterCard-Card">
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="h4">
                        <img id="Player-avatar" src={`https://sleepercdn.com/content/nfl/players/${player}.jpg`} /> <br />

                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}