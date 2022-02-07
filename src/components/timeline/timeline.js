import './timeline.css'

const Timeline = () => {
    const imgWidth = window.outerWidth <= 1100 ? '85vw' : '50vw';

    return (
        <div className='timeline-root' id='timeline'>
            <p className='timeline-title gold-underline'>Timeline</p>
            <img className='timeline-img' src='/images/agenda.png' style={{width: imgWidth}}></img>
        </div>
    );
}

export default Timeline;