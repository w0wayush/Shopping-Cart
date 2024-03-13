import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardItem from '../components/CartItem'
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing cart")
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    //if (cart && cart.length > 0) {
      const totalPrice = cart.reduce((total, item) => total + item.price, 0);
      setTotalAmount(totalPrice);
    // } else {
    //   setTotalAmount(0);
    // }
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ? 
          (<div  className="flex justify-between items-center max-w-6xl mx-auto">
              <div className="flex flex-col max-w-3xl ">
                {
                  cart.map((item, index) => (
                      <CardItem key={item.id} item={item} itemIndex={index} />
                  ))
                }
              </div>

              <div className="flex flex-col max-w-3xl h-[40vh] justify-around">
                <div>
                    <div className="text-green-500 text-2xl font-bold">Your Cart</div>
                    <div className="text-green-500 text-5xl font-bold">Summary</div>
                    <p>
                      <span className="text-green-500 text-lg font-bold">Total Items : {cart.length}</span>
                    </p>
                </div>

                <div>
                  <p className="text-green-500 font-bold text-lg">Total Amount : ${totalAmount}</p>
                  <button className="text-xl mt-2 w-30 h-14 bg-green-600 px-24 rounded-2xl text-white">
                    Checkout Now
                  </button>
                </div>
              </div>

          </div>):
          (<div className="flex w-screen h-screen flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-xl ">Your Cart is Empty!!!</h1>  
                <NavLink to="/">
                  <button className="text-xl mt-2 w-30 h-14 bg-slate-900 px-24 rounded-full uppercase text-white">
                    Shop Now
                  </button>
                </NavLink>
            </div>
          </div>)
      }
    </div>
  );
};

export default Cart;
