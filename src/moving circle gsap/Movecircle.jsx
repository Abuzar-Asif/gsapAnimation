// import React, { useRef, useState } from "react";
// import "../moving circle gsap/Movecircle.css";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// const Movecircle = () => {
//   const circleref = useRef(null);
//   const [circleValue, circleValueset] = useState(0);

//   useGSAP(() => {
//     gsap.to(
//       circleref.current,
//       {
//         x: circleValue,
//         duration: 1,
  
//       },
     
//     );
//   }, [circleValue]);
//   return (
//     <>
//       <div className="container-fluid d-flex flex-column justify-content-center align-items-center mainofcircle text-white">
//         <div
//           onClick={() => {
//             const random = gsap.utils.random(-500, 500, 100);
//             circleValueset(random);
//             console.log(random)

//           }}
//           className="btn btn-primary my-5"
//         >
//           move
//         </div>
//         <div ref={circleref} className="circle"></div>
//       </div>
//     </>
//   );
// };

// export default Movecircle;

// use contextSafe for faster animation that uses less memory

// import React, { useRef, useState, useEffect } from 'react';
// import '../moving circle gsap/Movecircle.css';
// import gsap from 'gsap';

// const Movecircle = () => {
//   const circleref = useRef();
//   const [circleValue, circleValueset] = useState(0);

//   useEffect(() => {
//     if (circleValue !== 0) { 
//       gsap.to(circleref.current, {
//         x: circleValue,
//         duration: 1
//       });
//     }
//   }, [circleValue]); 

//   const handleMove = () => {
//     const random = gsap.utils.random(-500, 500, 100); 
//     circleValueset(random); 
//   };

//   return (
//     <div className="container-fluid d-flex flex-column justify-content-center align-items-center mainofcircle text-white">
//       <div onClick={handleMove} className="btn btn-primary my-5">Move</div>
//       <div ref={circleref} className="circle"></div>
//     </div>
//   );
// };

// export default Movecircle;
