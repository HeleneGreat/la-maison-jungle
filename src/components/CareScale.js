import sun from '../assets/sun.svg'
import water from '../assets/water.svg'



// function CareScale(props) {
    // const scaleValue = props.scaleValue
    // const scaleType = props.scaleType
    // const {scaleValue, careType} = props

const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3]

    const scaleType = careType === "light" ? (
            <img src={sun} alt="Ensoleillement"/>
        ) : (
            <img src={water} alt="Arrosage"/>
        )

    return (
        <div 
            onClick={() => alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`)}>

            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
            
        </div>
    )
}



export default CareScale