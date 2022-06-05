import './story.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { scrollHook_getYPosition } from '../util/scrollHooks';

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
        const cardRowAdjustedBreak = isMobile ? 400 : 900;
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
                    loading="lazy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div"
                        sx={{
                            fontFamily: '\'Dancing Script\', cursive',
                            fontSize: '4vmin'
                            }}>
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
                    imageL='\images\story\first-pic.jpg' dateL='Sept • 7 • 2013'
                    descL='Our very first picture together in senior year high school!'
                    imageR='\images\story\p-grad.jpg' dateR='May • 3 • 2017'
                    descR="Celebrating Pedro's college graduation after 4 years together! #gocoogs"
                />
                <StoryCardRow
                    row='2'
                    imageL='\images\story\a-grad.jpg' dateL='May  • 12 • 2018'
                    descL="Celebrating Ashley's college graduation after 5 years together! #gocoogs"
                    imageR='\images\story\house-move.jpg' dateR='June  • 30 • 2018'
                    descR='Super excited buying our first home and moving to Austin!'
                />
                <StoryCardRow
                    row='3'
                    imageL='\images\story\proposal.jpg' dateL='Jan  • 17 • 2021'
                    descL='OMG! I said Yess! #7thanniversary'
                    imageR='\images\story\8-anniv.jpg' dateR='Jan • 17 • 2022'
                    descR='Celebrating our 8th anniversary! #oneyearengaged'
                />
            </div>
        </div>
    );
}

export default Story;