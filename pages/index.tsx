import { GetStaticProps } from "next";
import React from "react";
// import { services } from "../data";

const index = ({ services }) => {
 

  return (
    <div>
      <h1 className="text-3xl">Bye Bye World</h1>
    </div>
  );
};

export default index;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("Server", data.services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("Server", data.services);

  return {
    props: {
      services: data.services,
    },
  };
};
