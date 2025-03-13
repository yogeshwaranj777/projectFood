import React from "react";
import Slider from "react-slick";
import img21 from "../assets/juice/apple.jpg";
import img22 from "../assets/juice/kirini1.jpg";
import img23 from "../assets/juice/lemon.jpg";
import img24 from "../assets/juice/mathulai.jpg";
import img25 from "../assets/juice/orange.jpg";
import img26 from "../assets/juice/rose.jpg";
import img27 from "../assets/juice/sathukudi1.jpg";
import img28 from "../assets/juice/watermelon.jpg";


export default function Freshjuice() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2,
    responsive:[
      {breakpoint:1024, settings:{slidesToShow: 3}},
      {breakpoint:640, settings:{slidesToShow: 2}},
      {breakpoint:580, settings:{slidesToShow: 1}},
    ]
  };
  
    
  
 
  return <div></div>
}
 
