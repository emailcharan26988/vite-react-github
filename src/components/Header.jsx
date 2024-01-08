import React from "react";

const Header = () => {
  console.log(import.meta.env);
  return (
    <>
      <div>{import.meta.env.VITE_API_KEY}</div>
      <div>{import.meta.env.VITE_TEST}</div>
    </>
  );
};

export default Header;
