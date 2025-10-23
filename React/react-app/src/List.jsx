function ListItems(){
    const listItems = [
       {id: 1, name: "Apple", calories : 38 },
       {id : 2, name:  "Banana", calories: 13},
       {id : 3, name: "Mango", calories: 41},
        {id : 4, name: "Orange", calories: 23},
        {id: 5, name :"Pizza", calories:34},
        {id : 6, name: "Bee", calories : 12}];

        // listItems.sort((a,b)=>a.name.localeCompare(b.name));// Alphabetical
        // // listItems.sort((a,b)=>b.name.localeCompare(a.name)); //Revere Alphabetical order of sorting
        // listItems.sort((a,b)=>a.calories - b.calories)  // Numerical order
        // listItems.sort((a,b)=> b.calories - a.calories) //   REVERSE ALPHABETICAL ORDER

        
        
        const  lowCalories   = listItems.filter(listItems => listItems.calories < 20);
        

        

    
    const newList = listItems.map(listItems => <li key={listItems.iid}>
                                                {listItems.name} : &nbsp; 
                                                {listItems.calories}</li> 

                                           )
    
    return(<ol><h2>{newList}</h2></ol>);

}

export default ListItems