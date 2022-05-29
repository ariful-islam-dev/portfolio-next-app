import { GetStaticProps } from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { IService } from "../type";

const index = () => {
  return (
    <>
      <div className="flex flex-col flex-grow px-6 pt-1">
        <h5 className="my-3 font-medium">
          This is Md. Ariful Islam. I am a fullstack web developer. I have 2.5
          years experiences of Javascript and Javascript Most Popular library is
          React. I have also experiences of nodejs in 1 years. I am finding a
          reasonable fullstack remote job from any companies. I design many
          type's of web application using that's technology
        </h5>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service: IService, i: number) => (
              <div
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                key={i}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
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

  return {
    props: {
      services: data.services,
    },
  };
};
