import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cakeActions } from '../features/cake/cakeSlice';

const CakeView = () => {
    //determine the state of cakeSlice using useSelector Hooks provided by react-redux
    const noOfCakes =useSelector((state)=>state.cake.numOfCakes);
    const dispatch = useDispatch(); //to use reducer of slice like cake and icecream.
    const amountRef = useRef(0);
   
    const sellCake = ()=>{
           dispatch(cakeActions.cake_ordered(Number(amountRef.current.value)));
    };
    const restockedCake =()=>{
          dispatch(cakeActions.cake_stocked(Number(amountRef.current.value)));
    }

  return (
    <div>
      <h2>Cakes :{noOfCakes}</h2>
      <input type="number" name='amount' ref={amountRef}/>
      <button onClick={sellCake}>Sell Cake !</button>
      <button onClick={restockedCake}>Restocked Cake !</button>
    </div>
  )
}

export default CakeView

