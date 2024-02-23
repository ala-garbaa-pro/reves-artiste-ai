import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 py-6 my-8">
      <div className="container mx-auto text-center text-gray-800 font-bold">
        This project was developed by{" "}
        <a
          href="https://www.alagarbaa.com/"
          className="text-indigo-800 hover:text-indigo-600 underline"
        >
          Ala GARBAA
        </a>{" "}
        © All rights reserved 2024
      </div>
    </footer>
  );
}

export default Footer;
