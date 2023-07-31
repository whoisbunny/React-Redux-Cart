import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiOutlineHome } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
   return (
     <nav>
       <h2>Whoisbunny </h2>
       <div>
         <Link to={"/"}>
           <AiOutlineHome />
         </Link>

         <Link to={"/cart"}>
           <FiShoppingCart />
           <p> {cartItems.length}</p>
         </Link>

         <Link to={""}>
           <AiFillGithub />
         </Link>
       </div>
     </nav>
   );
}

export default Header