import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from '../redux/Slices/CartSlice';
import { useState } from "react";


const Product = ({item}) => {

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? `${item.description}` : `${item.description.split(" ").slice(0, 10).join(" ") + "..."}`;
    // if readmore true then show whole description 
    
  function readmoreHandler(){
      setReadmore(!readmore);
  }

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed successfully");
  }

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added successfully");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-3 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left">{description}
          <span className="text-blue-400 cursor-pointer" onClick={readmoreHandler}>
                {readmore ? `  show less` : `read more`} 
                {/* if readmore true then show less otherwise read more  */}
          </span>
        </p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full " />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>
      
        {
          cart && cart.some((i) => i.id === item.id) ? 
          (<button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
            >
            Remove Item
          </button>) :
          (<button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
           >
            Add to Cart
          </button>)
        }
      </div>
    </div>
  );
};

export default Product;
