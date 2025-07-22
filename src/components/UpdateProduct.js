import React, { useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom"

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [category, setCategory] = React.useState("");
  const params =useParams();
  const navigate =useNavigate();

  useEffect(()=>{
    
     getProductDetails();

  },[]);

  const getProductDetails = async ()=>{

    let result = await fetch (`http://localhost:3008/product/${params.id}`);
    result = await result.json();

    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
    

  }
 
  const updateProduct = async () => {
       console.warn(name, price, company, category);
       let result = await fetch(`http://localhost:3008/product/${params.id}`,{
        method:"put",
        body: JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json'
        }
        
       });
       result=await result.json();
       console.warn(result)
       navigate('/')

    
  };
  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="inputBox"
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="inputBox"
      />
      <input
        type="text"
        placeholder="Enter Product Category"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        className="inputBox"
      />
      <input
        type="text"
        placeholder="Enter Product Company"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        className="inputBox"
      />
 
      <button onClick={updateProduct} className="btn">
        UpdateProduct
      </button>
    </div>
  );
};

export default UpdateProduct;
