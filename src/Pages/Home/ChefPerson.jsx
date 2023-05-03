import React, { useEffect } from "react";
import { useState } from "react";
import Categories from "./Categories";

const ChefPerson = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://parectice-project-server-abujafor1924.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-4 ">
      {chef.map((data) => (
        <Categories key={data.id} data={data}></Categories>
      ))}
    </div>
  );
};

export default ChefPerson;
// useEffect(() => {
//   fetch("https://parectice-project-server.vercel.app/category")
//     .then((res) => res.json())
//     .then((data) => setCategoryData(data));
// }, []);
// return (
//   <div className="grid grid-cols-3 gap-4">
//     {categorydata.map((data) => (
//       <Categories key={data.id} data={data}></Categories>
//     ))}
//   </div>
// );
