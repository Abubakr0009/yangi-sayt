import React from "react";
import getData from "../hooks/getdata";

const Brands = () => {
  const { data, loading, error } = getData("/brands/all");
  console.log(data);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      {data.map((brand,index) => {
        return (
            <div key={index}>
            <img src={`./src/assets/brands ${brand.imeg}`} alt="" />
            <h2>Brand Name : {brand.name}</h2>
            <h1 className="text-red-700">AAA</h1>
        </div>
        )
      })}
    </div>
  );
};

export default Brands;
