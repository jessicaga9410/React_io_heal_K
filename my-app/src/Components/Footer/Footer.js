// import React from 'react'
// import {
//   //   Card,
//   //   CardHeader,
//   //   CardBody,
//      CardFooter,
//      Typography,
//      Tooltip,
//    } from "@material-tailwind/react";
   
// function Footer() {
//   return ( 


// <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
//     <div className="sm:flex sm:items-center sm:justify-between">
//     </div>

//     <CardFooter className="flex justify-center gap-12 pt-">

// <Tooltip content="Follow">
//   <Typography
//     as="a"
//     href="#instagram"
//     variant="lead"
//     color="purple"
//      textGradient
//   >
//     <i className="fa fa-instagram" id="insta" aria-hidden="true"></i>
//   </Typography>
// </Tooltip>
// </CardFooter>
//     <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> Copyright © 2022 <a href="/" className="hover:underline" alt="">Healing with Kate</a>. All Rights Reserved.
//     </span>
// </footer>

//   )
// }

// export default Footer

import React from 'react'
 import {
  
      Typography,
     Tooltip,
   } from "@material-tailwind/react";
function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
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
      <p>Copyright © 2022.Healing With Kate. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer