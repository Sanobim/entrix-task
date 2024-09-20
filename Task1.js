import React, { useState } from 'react';  
  import './Task1.css'

const CityInputForm = () => {  
  const [cities, setCities] = useState([]);  
  const [inputValue, setInputValue] = useState('');  
  const [error, setError] = useState('');  
  
  const handleSubmit = (e) => {  
 e.preventDefault();  
 const trimmedInput = inputValue.trim();  

 if (!trimmedInput) {  
 setError('City name cannot be empty or only whitespace.');  
return;  
  }  
  
 if (cities.includes(trimmedInput)) {  
 setError('This city has already been added.');  
 return;  
}  

 setCities([...cities, trimmedInput]);  
 setInputValue('');  
setError('');  
  };  
  
  return (  
<div className="city-input-form">  
<h2>Entrix Task:</h2>  
 <form onSubmit={handleSubmit}>  
 <input  
 type="text"  
 value={inputValue}  
onChange={(e) => setInputValue(e.target.value)}  
 placeholder="Enter city name"  
/>  
<button type="submit">Add City</button>  
 </form>  
{error && <p className="error">{error}</p>}  
<ul>  
{cities.map((city, index) => (  
 <li key={index}>{city}</li>  
 ))}  
</ul>  
 </div>  
  );  
};  
  
export default CityInputForm;
