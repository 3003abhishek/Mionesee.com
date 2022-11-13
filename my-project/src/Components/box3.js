import React from "react";
import Data1 from "../data/data1";
function Box3(){
    return (

   <div className="box3">
    <div className="box3_heading">Our fan favorites</div>
    <div className="box3_description">Nutritious meets delicious with our rotating menu of single-serve, ready-in-minute meals. Take a look at what's new.</div>
    <div className="mealsbox">
       <div className="meals1">
        {
            Data1.map((el)=>{
                return(
                    <div className="each_food">
                    <img className="each_food_pic"  src={el.image}/>
                  <h1 className="each_food_header">{el.name}</h1>
                  <p className="each_food_desc">{el.desc}</p>
                  <p className="each_food_cal">{el.cal}</p>
                    
                  </div>
                  


                )
            })
        }
        
        
        </div> 
    </div>
   </div>


    )
}
export default Box3;
