import React from "react";
import "./about.css";
//  import {
// //   Card,
// //   CardHeader,
// //   CardBody,
//    CardFooter,
//    Typography,
//    Tooltip,
//  } from "@material-tailwind/react";
import img7 from "../../Assets/90.png";

function About() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        {/* <Feature title="About Me" text="#" />
      {/* <img className='h10Img' src={aboutMeImg} alt=""/> */}
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">About</h1>
      </div>
      {/* <img className='h10Img' src={aboutMeImg} alt=""/> */}
      <div className="gpt3__whatgpt3-container">
        <img className="aboutImg" src={img7} alt="" />
        <h1 className="about-me-section"> Hi, I’m Kate Carrara. I help people in their healing journey, <br />
        by overcoming the emotional, spiritual and physical obstacles <br /> they may be encountering in their lives.
      
        </h1>
        <div class="container mx-auto px-4 text_about_container">
         
        </div>
        {/* <CardFooter className="flex justify-center gap-7 pt-2">

         <Tooltip content="Follow">
           <Typography
             as="a"
             href="#instagram"
             variant="lead"
             color="purple"
              textGradient
           >
             <i className="fa fa-instagram" id="insta" aria-hidden="true"></i>
           </Typography>
         </Tooltip>
       </CardFooter> */}
      </div>
    </div>
  );
}

export default About;

//   return (

// <div className="gpt3__whatgpt3-heading whoAmI">
//     <h1 className="gradient__text">Who am I </h1>

//     <Card className="w-96 card-Container">
//       <CardHeader floated={false} className="h-80">
//         <img src={img7} alt="about-me" />
//       </CardHeader>
//       <CardBody className="text-center">
//         <Typography variant="h4" color="blue-grey" className="mb-2">
//         Kate Carrara
//         </Typography>
//         <Typography color="blue" className="font-medium" textGradient>

//         </Typography>
//       </CardBody>
//       <CardFooter className="flex justify-center gap-7 pt-2">

//         <Tooltip content="Follow">
//           <Typography
//             as="a"
//             href="#instagram"
//             variant="lead"
//             color="purple"
//             textGradient
//           >
//             <i className="fa fa-instagram" id="insta" aria-hidden="true"></i>
//           </Typography>
//         </Tooltip>
//       </CardFooter>
//     </Card>

//     <div className="md:container md:mx-auto my-info">
//  Hello this is me
// </div>
//   </div>
//   );
// }
// export default About
