import { useState } from "react";

const ArrayInStateUpdate = () => {

    const[car, setCar] = useState([])
    const[carYear, setCarYear] = useState(new Date().getFullYear)
    const[carMake, setCarMake] = useState("")
    const[carModel, setCarModel] = useState("")

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel}

        setCar(c => [...c, newCar])
    }

    function handleRemoveCar(index){

    }

    function handleYearChange(event){
        setCarYear(event.target.value)
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)
    }
    function handleModelChange(event){
        setCarModel(event.target.value)
    }


    return ( <>
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {car.map((car, index) => <li key={index}>{car.year} {car.make} {car.model}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car Make" />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car Model" />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    </> );
}
 
export default ArrayInStateUpdate;