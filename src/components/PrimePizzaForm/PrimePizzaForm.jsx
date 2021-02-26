import {useEffect, useState} from 'react';
import axios from 'axios';

function PrimePizzaForm() {
  const [pizzaList, setPizzaList] = useState([]);
  
  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza',
    })
      .then((response) => {
        console.log('response received', response);
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
<>
  <h2>HELLO</h2>

  <ul> 
    {pizzaList.map(pizza => {
    return <li> {pizza.name} {pizza.description} {pizza.price} </li>
   })} </ul>
  </>
)

}

export default PrimePizzaForm;
