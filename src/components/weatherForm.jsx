import React, {useState} from 'react'

function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState('')
    function onChange(e){
        const value=e.target.value;
        if(value !== '') setCity(value)
    }
    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} name="" id="" />
    </form>
  )
}

export default WeatherForm