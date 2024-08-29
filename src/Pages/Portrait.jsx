import React from "react";
import { useParams } from "react-router-dom";
import StarryNight from "/starry-night/hero-small.jpg";
import Pearl from "/girl-with-pearl-earring/hero-large.jpg";
import Guernica from "/guernica/hero-small.jpg";
import Magdalene from "/penitent-magdalene/hero-small.jpg";
import VanGogh from "/van-gogh-self-portrait/hero-large.jpg";
import TheStorm from "/the-storm-on-the-sea-of-galilee/hero-small.jpg";
import TheNightCafe from "/the-night-cafe/hero-small.jpg";
import Lady from "/lady-with-an-ermine/hero-large.jpg";

const Portrait = () => {
    const arrayOfportrait = [
        { id: 1, img:[StarryNight], name:"StarryNight"},
        { id: 2, img:[Pearl], name: "Pearl" },
        { id: 3, img:[Guernica], name: "Guernica" },
        { id: 4, img:[Magdalene], name: "Magdalene" },
        { id: 5, img:[VanGogh], name: "VanGogh" },
        { id: 6, img:[TheStorm], name: "TheStorm" },
        { id: 7, img:[TheNightCafe], name: "TheNightCafe" },
        { id: 7, img:[Lady], name: "Lady" },
    ]
    const {id} = useParams()
    const image = arrayOfportrait.find(img => img.id === parseInt(id));

    if (!image) return <h2>Image not found</h2>;

    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1>{image.name}</h1>
        <img src={image.img} alt={image.name} style={{ width: '300px'}} />
        </div>
    )
}

export default Portrait;