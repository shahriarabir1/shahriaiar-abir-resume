import React from "react";
import Work from "./Work.jsx";
const data = [
  {
    year: 2022,
    title: "Entity Relationship Diagram",
    type: "Database",
    duration: "Project Base",
    details:
      "First Analysis the requirements.Identify entity and make entity sets.Identify attributes and types.Identify relationship and constraints.Make mapping and participations.Create final ER diagram",
  },
  {
    year: 2022,
    title: "Relational Database Develop",
    type: "Database",
    duration: "Project Base",
    details:
      "First create ER diagram. Degree of relationship, Constraint, MappingGeneralization and SpecializationRelational Keys. Code with SQL and using MySQL",
  },
  {
    year: 2023,
    title: "Diabetes Prediction Machine Learning Model",
    type: "Machine Learning",
    duration: "Project Base",
    details:
      "First collect data and download data. Import all libraries and create environment. Data preprocessing, Label encoding, Outlier remove, Null value reduce. Analysis of choosing model and visualization. Fit to a model and get score. Regularization ,Bias and other optimization.Export to pickle and create UI website and import model to UI.Deploy the final work to website",
  },
  {
    year: 2023,
    title: "Student Interview Website",
    type: "Web Development",
    duration: "Project Base",
    details:
      "Create all pages with react. Setup Database. Connect to database. Handover to client with deploy into their domain.",
  },
];

const Workitem = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 md:h-full h-full mb-40 mt-40"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-indigo-900 mb-5">
        Work
      </h1>
      {data.map((item, idx) => (
        <Work
          key={idx}
          year={item.year}
          title={item.title}
          type={item.type}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Workitem;
