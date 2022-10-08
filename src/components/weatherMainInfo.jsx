import React from 'react'

function WeatherMainInfo({weather}) {
  return (
    <div>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} width="128" alt={weather?.current.condition.text} />
            </div>
        </div>
    </div>
  )
}

export default WeatherMainInfo