import {toast} from 'react-hot-toast';
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed successfully")
  }

  return (
    <div>
      <div className='flex'>
        <div>
          <img src={item.image}/>
        </div>
        <div className='flex flex-col '>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className='flex justify-between'>
            <p>{item.price}</p>
            <div
              onClick={removeFromCart}
            >
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
      <div className='border-solid border-2 bg-slate-500'></div>
    </div>
  );
};

export default CartItem;
