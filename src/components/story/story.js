import './story.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
    scrollHook_getDynamicMarginYPosition,
    scrollHook_getYPerBreakPerc,
    scrollHook_getYPerBreakPercFromStart } from '../util/scrollHooks';

const CardLink = (props) => {
    if (props.placement == 'right' && props.isBefore) {
        return <div className='story-line-link'><h4></h4></div>
    } else if (props.placement == 'left' && !props.isBefore) {
        return <div className='story-line-link'><h4></h4></div>
    } else {
        return <div/>
    }
}

const StoryCard = (props) => {
    const scrollYBreak = 700;
    const cardRowAdjustedBreak = 475;
    const travelFactor = 2.5;

    const cardSlideInStyle = () => {
        var yBreak = scrollHook_getYPerBreakPerc(scrollYBreak);
        var yBreakAdj = props.row == 1 ? yBreak : scrollHook_getYPerBreakPercFromStart(cardRowAdjustedBreak, scrollYBreak);
        var percent = ((yBreakAdj - 100) * -1) * travelFactor;

        if (props.placement == 'right') {
            return {left: `${percent}px`, justifyContent: 'flex-start' }
        } else {
            return {right: `${percent}px`, justifyContent: 'flex-end' }
        }
    }

    return (
        <div className='story-card-content' style={cardSlideInStyle()}>
            <CardLink isBefore={true} placement={props.placement}/>
            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="images/grid/ring.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                    01.14.21
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    2010 - Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>
            <CardLink isBefore={false} placement={props.placement}/>
        </div>
    );
}

const StoryCardRow = (props) => {
    return (
        <div className='story-line-row'>
            <div className='story-line-left'>
                <StoryCard placement='left' row={props.row}/>
                <div className='story-line-empty-card'/>
            </div>
            <div className='story-line-right'>
                <div className='story-line-empty-card'/>
                <StoryCard placement='right' row={props.row}/>
            </div>
        </div>
    );
}

const Story = () => {
    return (
        <div className='story-root' id='our-story'>
            <div className='story-text-title-div gold-underline'>
                <p className='story-text-title'>Our Story</p>
            </div>
            <div className="story-line-root">
                <StoryCardRow row='1'/>
                <StoryCardRow row='2'/>
            </div>
        </div>
    );
}

export default Story;