import React from 'react'

const Trafficlights = () => {
    const [color, setColor] = useState('red');

    return (
        <div id='container' className='d-flex flex-column border bg-dark'>
            
            {/* red light */}
            <div onClick={(e) => setColor('red')} id='red' className= {color === 'red' ? 'red glow' : 'red'}>red</div>

            {/* yellow light */}
            <div onClick={(e) => setColor('yellow')} id='yellow' className={color === 'yellow' ? 'yellow glow' : 'yellow'}></div>

            {/* green light */}
            <div onClick={(e) => setColor('green')} id='green' className={color === 'green' ? 'green glow' : 'green'} ></div>

        </div>
    )
}
export default Trafficlights;