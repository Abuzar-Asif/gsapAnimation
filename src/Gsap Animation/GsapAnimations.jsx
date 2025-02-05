import React, { useRef } from "react";
import "../Gsap Animation/GsapAnimations.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GsapAnimations = () => {
    //without using useRef hook
    // useGSAP(()=>{
    //     gsap.to('.box',{
    //         x:1000,
    //         duration:3,
    //         delay:1


    //     })
    // })

// using with useRef 
const gsapRef=useRef()
useGSAP(()=>{
    gsap.to(gsapRef.current,{
x:1000,
rotate:360,
duration:4,
    })
})
  return (
    <>
      <div className="container-fluid main">
      {/* without using useRef hook */}
        {/* <div className="box">

        </div> */}
        {/* using with ref  */}
        <div ref={gsapRef} className="box">

        </div>
      </div>
    </>
  );
};

export default GsapAnimations;
