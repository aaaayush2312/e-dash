// import { warn } from "console";
// import { set } from "mongoose";
import React,{useState,useEffect}from "react";
import {Link} from "react-router-dom";

const ProductList=()=>{
    const [products,setProduct]= useState([]);

    useEffect(()=>{
            getProducts();
    },[])

    const getProducts= async()=>{
        let result= await fetch("http://localhost:3008/products");
        result =await result.json();
        setProduct(result);

    }
    console.warn("products",products);

    const deleteProduct= async (id)=>{
        console.warn(id)
        let result = await fetch(`http://localhost:3008/product/${id}`,{
            method:"Delete"
        })
        result= await result.json()   
        if(result){
            alert("record is deleted")
        }
    }

    const searchHandle= async (event)=>{
        let key =event.target.value;
        if(key){
            let result = await fetch(`http://localhost:3008/search/${key}`);
            result= await result.json();
            if(result){
                setProduct(result)
            }

        }
        else{
            getProducts();
        }
       
    }




    return(
        <div className="product-list">
            <h1>
                Product List
            </h1>
            <input type="text" placeholder="search box" className="search" onChange={searchHandle}/>
            <ul>
                <li>S .No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
               
            </ul>
            <ul>
            {
            products.length>0?products.map((item,index)=>
                <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>${item.price}</li>
                <li>{item.category}</li>
                <li>
                <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                <Link to={"/update/"+item._id}>Update</Link>
                </li>
               
                
             </ul>
                )
                :<h1>Result not found</h1>
               
            }
               
            </ul>
           
        </div>
    )
}
export default ProductList;