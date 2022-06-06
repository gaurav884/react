import React from 'react';
import {useParams} from "react-router-dom"

const Products = () => {
const params = useParams();
console.log(params);
  return <div>
      <h1>{params.yo}</h1>
  </div>;
};

export default Products;
