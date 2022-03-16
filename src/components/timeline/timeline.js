import './timeline.css'

const Timeline = () => {
    const imgWidth = window.outerWidth <= 1100 ? '85vw' : '50vw';

    return (
        <div className='timeline-root' id='timeline'>
            <p className='timeline-title gold-underline'>Day Of Timeline</p>
            <div className='timeline-content'>
                <table>
                    <tr>
                        <td className='table-time-cell'>5:00</td>
                        <td className='table-descr-cell'>Ceremony</td>
                    </tr>
                    <tr>
                        <td className='table-time-cell'>5:30</td>
                        <td className='table-descr-cell'>Cocktail</td>
                    </tr>
                    <tr>
                        <td className='table-time-cell'>5:45</td>
                        <td className='table-descr-cell'>Grand Entrance</td>
                    </tr>
                    <tr>
                        <td className='table-time-cell'>6:15</td>
                        <td className='table-descr-cell'>Fajitas!</td>
                    </tr>
                    <tr>
                        <td className='table-time-cell'>7:30</td>
                        <td className='table-descr-cell'>Party Time!</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Timeline;