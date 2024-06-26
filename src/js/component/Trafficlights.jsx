import React, {useState, useEffect} from 'react'

const Trafficlights = () => {
    const [color, setColor] = useState('red');
    const [showPurple, setShowPurple] = useState(false);

    function handleColor(colorName) {
        setColor(colorName)
        console.log(color)
    } 

    
    return (
        
        <div id='container' className='d-flex flex-column border '>

            {/* red light */}
            <div onClick={() => handleColor('red')} className= {color === 'red' ? 'red glow1' : 'red'}></div>

            {/* yellow light */}
            <div onClick={() => handleColor('yellow')} className={color === 'yellow' ? 'yellow glow2' : 'yellow'}></div>

            {/* green light */}
            <div onClick={() => handleColor('green')} className={color === 'green' ? 'green glow3' : 'green'} ></div>

            <div onClick={() => setShowPurple(prev => !prev)} className={showPurple ? 'show' : 'purple'}></div>
        </div>
    )
}
export default Trafficlights;