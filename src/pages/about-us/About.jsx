import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto">
      <img
        src="/about2.png"
        alt=""
        // style={{ height: '80vh', margin: '0 auto' }}
      />
      <p
        className="my-4 mx-auto leading-4 "
        style={{ width: '80%', lineHeight: '21px', color: 'gray' }}
      >
        Welcome to Furniturlelo! We aim to offer our customers a variety of the
        latest Furniture. We’ve come a long way, so we know exactly which
        direction to take when supplying you with high quality yet
        budget-friendly products. We offer all of this while providing excellent
        customer service and friendly support. We always keep an eye on the
        latest trends in Furniture and put our customers’ wishes first. That is
        why we have satisfied customers all over the world, and are thrilled to
        be a part of the Furniture industry. The interests of our customers are
        always top priority for us, so we hope you will enjoy our products as
        much as we enjoy making them available to you.
      </p>
      <hr />
    </div>
  );
};

export default About;
