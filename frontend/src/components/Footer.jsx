import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-3 w-40" src={assets.medibook} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry
          </p>
        </div>

        {/* Center Section */}

        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section  */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-8857996759</li>
            <li>sahilshekh885799@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ MediBook All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
