import React, { useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { icecreamActions } from '../features/icecream/icecreamSlice';

const IceCreamView = () => {
    const amountIce = useRef(0);
    //dertermine state
    const noOfIce = useSelector((state)=>state.icecream.numOfIcecreams);
    const dispatch = useDispatch();
    const sellIce=()=>{
         dispatch(icecreamActions.icecream_sold(Number(amountIce.current.value)));
    }
    const stockedIce =()=>{
        dispatch(icecreamActions.icecream_stock(Number(amountIce.current.value)));
    }
  return (
    <div>
       <h2>IceCreams:{noOfIce}</h2>
       <input type="number" name="amount" ref={amountIce} />
       <button onClick={sellIce}>Sell IceCream</button>
       <button onClick={stockedIce}>Stocked IceCream</button>
    </div>
  )
}

export default IceCreamView




