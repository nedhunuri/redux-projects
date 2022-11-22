import { useSelector,useDispatch } from "react-redux";
import allActions from "../../Actions";
const ComponentOne=({props})=>{
    const counter=useSelector(state=>state.counter);
    const text=useSelector(state=>state.text.value);
    const dispatch=useDispatch();
 return(
   //return the o/p of a component
   <>
   <h1>ComponentOne</h1>
   {/* displaying store values into component */}
   <button onClick={()=>dispatch(allActions.counterActions.increment())}>Increase Counter</button>
   <button onClick={()=>dispatch(allActions.counterActions.decrement())}>decrement Counter</button>
   <p>Counter value:{counter}</p>

   <p>Text value:</p>
   </>
 )
}
export default ComponentOne;