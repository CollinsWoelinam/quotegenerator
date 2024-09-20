import { useState } from "react";

useState

const MyComponent = () => {

    const[name, setName] = useState("Guest")
    const[age, setAge] = useState(0)
    const[isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Cole_man")
    }

    const updateAge = () => {
        setAge(age+1)
    }

    const switchStatus = () => {
        setIsEmployed(!isEmployed)
    }



    return ( 
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={updateAge}>Increment Age</button>

                <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={switchStatus}>Toggle Status</button>
            </div>
        </>
     );
}
 
export default MyComponent;