import React, {useEffect, useState} from 'react'
import WeatherForm from './weatherForm'

function WeatherApp() {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo();
    }, []);

    //arreglo vacio => solo cuando se crea el componente

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }
    async function loadInfo(city = 'london'){
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);

            const json = await request.json();
            setWeather(json)
            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <WeatherForm onChangeCity={handleChangeCity} />
        <div>{weather?.current.temp_c}</div>
    </div>
  )
}

export default WeatherApp