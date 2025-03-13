import React, { useEffect } from "react";
import img1 from "../../assets/milkshake/oreo.jpg";
import img2 from "../../assets/milkshake/blackcurrent.jpg";
import img3 from "../../assets/milkshake/butterscotch.jpg";
import img4 from "../../assets/milkshake/chocolate.jpg";
import img5 from "../../assets/milkshake/nuts.jpg";
import img6 from "../../assets/milkshake/pinapple.jpg";
import img7 from "../../assets/milkshake/strawbeery.jpg";
import img8 from "../../assets/milkshake/vennila.jpg";
import CustomizedRating from "./../rating";
// import Orderform from './Form'
import GradientText from "./../Gradiant";
// import { Button } from '@mui/material';
import CustomizedDialogs from "./../Dialogorderform";

function Milkshakes({scroll}) {
  useEffect(()=>{
    scroll()
  },[])
   
     
  return (
    <div className="w-full">
      <div>
        {/* <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={5}
          showBorder={false}
          className="custom-class"
        > */}
          <h1  className="font-bold text-3xl text-center mt-5 ">
            Our Milkshakes Items
          </h1>
        {/* </GradientText> */}
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 mt-10 mb-10 gap-5 xl:grid-cols-4 justify-around">
        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200   w-full rounded-2xl ">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img1}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Oreo </h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs />
          </div>
        </div>
        
        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img2}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Blackcurrent</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img3}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Butterscotch</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img4}
              alt="Sandwich"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Chocolate</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img5}
              alt="Burger"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Nuts Milkshake</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img6}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Pinapple</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img7}
              alt="Burger"
            />
          </div>

          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold">Strawberry</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>

        <div className="bg-gray-100 hover:scale-105 scale-100 duration-200 w-full rounded-2xl">
          <div>
            <img
              className="rounded-2xl w-full h-full lg:w-170 lg:h-80 object-cover"
              src={img8}
              alt="French Fries"
            />
          </div>
          <div className="flex justify-between mx-3 my-2">
            <h1 className="font-bold font-3xl">Vennila</h1>
            <CustomizedRating />
          </div>
          <div className="flex justify-between mx-3 mb-5">
            Price $100
            <CustomizedDialogs/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milkshakes;
