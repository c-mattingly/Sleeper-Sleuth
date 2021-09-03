import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LeagueCard from '../LeagueCard/LeagueCard';

export default function LeagueFeed({
    leagues,
    classes,
    userName
}) {

    return (
        <Grid>

            {leagues.map((league, index) => {

                return (
                    <LeagueCard
                        classes={classes}
                        league={league}
                        key={index}
                        userName={userName}
                    />
                );
            })}
        </Grid>
    )



}