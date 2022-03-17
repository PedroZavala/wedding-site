import './timeline.css'

const eventItems = [
    {time: '5:00', descr: 'Ceremony'},
    {time: '5:30', descr: 'Cocktail'},
    {time: '5:45', descr: 'Grand Entrance'},
    {time: '6:15', descr: 'Dinner'},
    {time: '7:30', descr: 'Party!'},
    {time: '8:30', descr: 'Events'},
    {time: '9:30', descr: 'Cake'},
    {time: '11:00', descr: 'CLean Up'}
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