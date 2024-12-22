import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-4 mt-8">
      <div className="text-center">
        <a href="https://t.me/alinavoloha" className="mx-4 hover:underline">
          My Telegram
        </a>
        <a
          href="mailto:alinavolokha@gmail.com"
          className="mx-4 hover:underline"
        >
          My Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
