import React from "react";

const About = () => {
  return (
    <div className="border-b">
      <div className="px-4 md:pl-10 my-5">
        <h3 className="text-sm text-[#6E6D6D] mb-3 md:mb-5">About the job</h3>
        <div className="space-y-1">
          <ol className="list-[number] list-inside space-y-1">
            <li>
              <span>Handle the UI/UX research design</span>
            </li>
            <li>
              <span>
                Work on researching on latest web applications designs & trends
              </span>
            </li>
            <li>
              <span>Work on conceptualizing and visualizing</span>
            </li>
            <li>
              <span>
                Work on creating graphics content and other graphic related
                works
              </span>
            </li>
          </ol>
          <p>Benefits</p>
          <ul className="list-disc pl-6">
            <li>
              <span>Health insurance</span>
            </li>
            <li>
              <span>Provident fund</span>
            </li>
          </ul>

          <p>Schedule</p>
          <ul className="list-disc pl-6">
            <li>
              <span>Day shift</span>
            </li>
          </ul>

          <p>Supplemental pay types</p>
          <ul className="list-disc pl-6"> 
            <li>
              <span>Performance bonus...</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
