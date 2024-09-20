const Button = () => {
    // const handleClick = () => console.log("Yeah Babbbyyyyyy 😘😘😘!!!!!");

    // const handleClick2 = (name) => console.log(`${name} OMGGG Stooopppppp 😜😜😜😜!!!!`)

    let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++
            console.log(`${name} you clicked me ${count} times`)
            
        }
        else{
            console.log(`${name} stop clicking me.`)
        }
    }


    return ( 
        
        <>
            <button onClick={() => handleClick("Cole_man")}>Click Me 😏</button>
        </>
     );
}
 
export default Button;