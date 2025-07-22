import React from "react";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [error, setError] = React.useState(false);

  const addProduct = async () => {
        console.warn(!name);
        if (!name || !category || !company || !price) {
             setError(true);
             return false;
        }

    console.warn(name, price, company, category);
    const UserId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:3008/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, UserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="inputBox"
      />
     { error && !name && <span className='invalid-input'>Enter valid name</span>}
      <input
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="inputBox"
      />
        { error && !price && <span className='invalid-input'>Enter valid name</span>}
      <input
        type="text"
        placeholder="Enter Product Category"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        className="inputBox"
      />
    { error && !category &&<span className='invalid-input'>Enter valid name</span>}
      <input
        type="text"
        placeholder="Enter Product Company"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        className="inputBox"
      />
    { error && !company &&<span className='invalid-input'>Enter valid name</span>}
      {/* <input type="text" placeholder="Enter Product UserId" className="inputBox" /> */}
      <button onClick={addProduct} className="btn">
        AddProduct
      </button>
    </div>
  );
};

export default AddProduct;
