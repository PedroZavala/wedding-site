import './timeline.css'

const eventItems = [
    {time: '5:00pm', descr: 'Ceremony'},
    {time: '6:00pm', descr: 'Dinner'},
    {time: '7:00pm', descr: 'Party!'},
    {time: '9:00pm', descr: 'Cake'},
    {time: '11:00pm', descr: 'Grand Exit'}
]

const Timeline = () => {
    return (
        <div className='timeline-root' id='timeline'>
            <p className='timeline-title gold-underline'>Day Of Timeline</p>
            <div className='timeline-content'>
                <table>
                    {eventItems.map((event) => (
                        <tr>
                            <td className='table-time-cell'>{event.time}</td>
                            <td className='table-descr-cell'>{event.descr}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default Timeline;