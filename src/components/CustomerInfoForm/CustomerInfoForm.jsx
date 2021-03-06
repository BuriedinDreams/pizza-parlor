import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfoForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');

  const dispatch = useDispatch();

  const storeCustomerInfo = (evt) => {
    evt.preventDefault();
    console.log('storeCustomerInfo()');
    /*
      SUBMIT TO REDUX - CUSTOMER INFO
    */
const customer ={
name ,  // | in this spot if the variables and the names match we are able to just use the key.
address: address, // we chose to do it this way so that we know what is being sent to the reducer
city: city,
zip: zip,
deliveryOption: deliveryOption,
}
dispatch({
  type:'ADD_CUSTOMER_INFO',
payload: customer
})
  };

  return (
    <div>
      <h3>Step 2: Customer Info</h3>
      <form onSubmit={storeCustomerInfo}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Street Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Zip"
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
        <input
          type="radio"
          id="delivery"
          name="option"
          value="delivery"
          onClick={(e) => {
            setDeliveryOption('delivery');
          }}
        />
        <label htmlFor="delivery">Delivery</label>
        <input
          type="radio"
          id="pickup"
          name="option"
          value="pickup"
          onClick={(e) => {
            setDeliveryOption('pickup');
          }}
        />
        <label htmlFor="pickup">Pickup</label>
        <button>Submit Customer Info</button>
      </form>
    </div>
  );
}

export default CustomerInfoForm;
