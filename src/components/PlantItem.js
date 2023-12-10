import CareScale from "./CareScale"
import '../styles/plantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ id, cover, name, light, water }) {
    return (
        
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)}/>
            {name}
            <CareScale careType="water" scaleValue={water}/>
            <CareScale careType="light" scaleValue={light}/>
        </li> 
    )
}

export default PlantItem