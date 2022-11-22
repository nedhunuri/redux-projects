import { useSelector,useDispatch } from "react-redux";
const ComponentTwo=({props})=>{
    const counter=useSelector(state=>state.counter);
    const text=useSelector(state=>state.text.value);
    return(
      //return the o/p of a component
      <>
      <h1>ComponentTwo</h1>
       {/* displaying store values into component */}
   <p>Counter value:{counter}</p>
   <p>Text value:</p>
      </>
    )
   }
   export default ComponentTwo;