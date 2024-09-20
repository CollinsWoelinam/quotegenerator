import React, {useState} from "react"

function OnChange(){

    const[name, setName] = useState("Guest")
    const[quantity, setQuantity] = useState(1)
    const[comment, setComment] = useState("")
    const[payment, setPayment] = useState("")
    const[shipping, setShipping] = useState()
    

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return(
        <>
            <div>Helloooooo</div>

            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea placeholder="Enter delivery instructions" value={comment} onChange={handleCommentChange}/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    )
}
export default OnChange