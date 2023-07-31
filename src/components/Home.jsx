import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";



  
const Home = () => {
  const ProductList = [
    {
      name: "Mac book",
      price: 12000,
      Imgsrc: img1,
      id: 1,
    },
    {
      name: "Black Shoose",
      price: 999,
      Imgsrc: img2,
      id: 2,
    },
  ];
  const dispatch = useDispatch()

  const addtoCart = (opt) => {
    dispatch({type: 'addtoCart',payload: opt})
    dispatch({ type: "calculatePrice" });
    toast.success('Added to cart')
  };
  return (
    <div className="home">
 
      {ProductList.map((i) => {
        return (
          <ProductCard
            key={i.id}
            name={i.name}
            price={i.price}
            Imgsrc={i.Imgsrc}
            id={i.id}
            handler={addtoCart}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ name, id, Imgsrc, handler, price }) => (
  <div className="productCard">
    <img src={Imgsrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name,price,id,quantity:1,Imgsrc })}>Add to cart</button>
  </div>
);
export default Home;
