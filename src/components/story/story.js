import './story.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
    scrollHook_getYPerBreakPerc,
    scrollHook_getYPosition,
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
    const isMobile = window.outerWidth <= 750 ? true : false;

    const cardDynamicAnimation = () => {
        const scrollYBreak = isMobile ? 400 : 500
        const cardRowAdjustedBreak = isMobile ? 400 : 1100;
        const rowYBreak = scrollYBreak + ((props.row - 1) * cardRowAdjustedBreak)
        var playState = scrollHook_getYPosition() < rowYBreak ?  'paused' : 'running';

        if (props.placement == 'right') {
            return {
                animationPlayState: playState,
                justifyContent: 'flex-start'
            }
        } else {
            return {
                animationPlayState: playState,
                justifyContent: 'flex-end'
            }
        }
    }

    return (
        <div id='our-story' className={`story-card-content story-card-${props.placement}-animate`} style={cardDynamicAnimation()}>
            <CardLink isBefore={true} placement={props.placement}/>
            <Card sx={isMobile ? { maxWidth: '100vw' } : { maxWidth: '30vw' }}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        {props.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.desc}
                    </Typography>
                </CardContent>
            </Card>
            <CardLink isBefore={false} placement={props.placement}/>
        </div>
    );
}

const StoryCardRow = (props) => {
    const isMobile = window.outerWidth <= 750 ? true : false;

    return (
        <div className='story-line-row'>
            <div className='story-line-left'>
                <StoryCard
                    placement='left'
                    row={props.row}
                    image={props.imageL}
                    date={props.dateL}
                    desc={props.descL}
                />
            </div>
            <div className='story-line-right'>
                <div className='story-line-empty-card' style={isMobile ? {height: '20vh'} : {height: '45vh'}}/>
                <StoryCard
                    placement='right'
                    row={props.row}
                    image={props.imageR}
                    date={props.dateR}
                    desc={props.descR}
                />
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
                <StoryCardRow
                    row='1'
                    imageL='\images\grid\360-bridge.jpg' dateL='3.10.19'
                    descL='This is at 360 bridge'
                    imageR='\images\grid\atx-luvu.jpg' dateR='2.14.21'
                    descR='This is our 8th anniv'
                />
                <StoryCardRow
                    row='2'
                    imageL='\images\grid\atx-luvu.jpg' dateL='7.3.18'
                    descL='This is at atx'
                    imageR='\images\grid\ring.jpg' dateR='2.14.21'
                    descR='This is the ring'
                />
                <StoryCardRow
                    row='3'
                    imageL='\images\grid\360-bridge.jpg' dateL='3.10.19'
                    descL='This is at 360 bridge'
                    imageR='\images\grid\8-anniv.jpg' dateR='2.14.21'
                    descR='This is our 8th anniv'
                />
                <StoryCardRow
                    row='4'
                    imageL='\images\grid\atx-luvu.jpg' dateL='7.3.18'
                    descL='This is at atx'
                    imageR='\images\grid\ring.jpg' dateR='2.14.21'
                    descR='This is the ring'
                />
            </div>
        </div>
    );
}

export default Story;