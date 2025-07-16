import { Marker, Popup } from "react-leaflet"
import React from 'react'

function LocationMarks({markers}){
    if (!markers || markers.length === 0) return null;

    return (
        <>
        {markers.map((marker, index) => (
            <Marker key ={index} position ={marker.markLocation}>
                <Popup>
                    {marker.name}<br/>
                    {marker.popupText}
                    {marker.popupImg &&(
                    <img height={"300px"} width={"300px"} src={marker.popupImg} alt="" />    
                    )} 
                </Popup>
            </Marker>
        ))}
        </>
    )
}

export default LocationMarks