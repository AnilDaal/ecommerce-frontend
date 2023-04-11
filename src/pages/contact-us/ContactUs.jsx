import React, { useState } from 'react';

const ContactUs = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default ContactUs;
