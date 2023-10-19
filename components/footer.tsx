import React from "react";


import{SiInstagram} from "react-icons/si";
import{SiTwitter} from "react-icons/si"



export default function Footer() {
  const code = React.createElement(SiInstagram)
  const code_T = React.createElement(SiTwitter)


  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
       <div className="flex items-center text-xs"> {code} &nbsp; <p>@thoufeekx</p></div>
      <div className="flex items-center text-xs"> {code_T} &nbsp; <p>@thoufeekx</p></div>
      <small className="mb-2 block text-xs">
        &copy; 2023 Thoufeek Baber. All rights reserved. 
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js , TypeScript, Tailwind CSS,
        Framer Motion, hosting by Vercel.
      </p>
     

    </footer>
  );
}
