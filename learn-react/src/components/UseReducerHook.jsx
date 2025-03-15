import React, { useEffect, useReducer, useState } from "react";
const cartReducer = (state, action) =>{
  if(action.type === "addToCart"){
    return [...state, action.payload]
  }
  else if(action.type === 'removeToCart'){
    return state.filter((item)=>item.id !== action.payload)
  }
  else{
    return state
  }
}
const UseReducerHook = () => {
  const [products, setProducts] = useState([]);
  const[cartData, dispatch] = useReducer(cartReducer, [])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        console.log(data)
      })
      .catch((error) => console.error(error));
  }, []);

  
  return (
    <div className="hook-container">
      <h3>useReducer Hook in React</h3>
      <div className="wrapper-shopping">
        <div className="product-page">
          <h2>product page</h2>
          <ul>
            {products.map((product, index) => (
              <li className="product-wrapper" key={index}>
                <div className="image-container">
                  <img src={product.image} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button onClick={()=>dispatch({type:'addToCart', payload:product})}>add to cart</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-page">
          <h2>cart page</h2>
          {cartData.length === 0 ? <p>Cart is empty</p>: null}
          <ul>
            {cartData.map((product,index)=>(
              <li className="cart-product-wrapper" key={index}>
              <div className="image-container">
                <img src={product.image} alt={product.title} />
              </div>
             <div className="prod-info">
             <h3>{product.title}</h3>
             <p>{product.price}</p>
             <p>Quantity: {product.quantity}</p>
             <button onClick={()=>dispatch({type:'removeToCart', payload:product.id})}>remove</button>
             </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseReducerHook;
