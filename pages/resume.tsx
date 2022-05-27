import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-6 my-2">
      {/* //Education & Experiences */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Web Development Online Trained
            </h5>
            <p className="my-3">
              Academy of Technology: <b>IT-BARI</b> Web Design and Development
              Course (2016-2019)
            </p>
            <p className="my-3">
              Javascript Library of React Frontend Web Development Course:
              <b>Programming Hero</b>(2020-2021 & Unlimited Access)
            </p>
            <p className="my-3">
              Fullstack Web Development Course: <b>Stack-Learner</b>
              (2022-Running: Premium)
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experiences</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Fullstack Web Development
            </h5>
            <p className="my-3">
              Fullstack Web Development Experiences about 1 years & Frontend
              Experiences about 2 years
            </p>
          </div>
        </div>
      </div>

      {/* Language & Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language and Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>{" "}
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tolls & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
