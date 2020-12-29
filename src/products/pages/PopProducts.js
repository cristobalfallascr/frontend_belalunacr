import React from "react";
import imgTest1 from "../../2020-09-07-094404915.jpg"
import imgTest2 from "../../2020-09-07-095012514.jpg"
import imgTest3 from "../../2020-09-07-095658270.jpg"


import ProductList from "../components/ProductList";
import "./PopProducts.css";

const DUMMY_POPULARS = [{
    id: "p1",
    title: "Netflix Chill",
    imageUrl: imgTest1,
    price:"$18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
    id: "p1",
    title: "Gatito",
    imageUrl: imgTest2,
    price:"$20",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
    id: "p1",
    title: "Disney",
    imageUrl: imgTest3,
    price:"$25",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},];

const PopProducts = (props)=>{

    return (<div>
    <h1 className="popular-title center">Los más populares</h1>
<ProductList items={DUMMY_POPULARS}/>
    </div>);
};

export default PopProducts;