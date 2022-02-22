import './timeline.css'

const Timeline = () => {
    const imgWidth = window.outerWidth <= 1100 ? '85vw' : '50vw';

    return (
        <div className='timeline-root' id='timeline'>
            <p className='timeline-title gold-underline'>Timeline</p>
            <div className='timeline-content'>
                <p>hi</p>
            </div>
        </div>
    );
}

export default Timeline;