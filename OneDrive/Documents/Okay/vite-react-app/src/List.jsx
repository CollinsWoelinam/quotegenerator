const List = () => {

    const fruits = [
        {id:1, name: "apple", calories:95},
        {id:2, name:"banana", calories:105},
        {id:3, name:"orange", calories:60},
        {id:4, name:"coconut", calories:354}
    ]
    fruits.sort()

    const frit = fruits.map(fruit => <li key={fruit.id}>{fruit.name} has a calory amount of <b>{fruit.calories}</b></li>)


    return (<ol>{frit}</ol>);
}
 
export default List;