import React from "react";
import {connect} from "react-redux"
class ComponentThree extends React.Component{
    render(){
        let counter=this.props.counter;
        let text=this.props.text.value;
        return(

            <>
            <h2>ComponentThree</h2>
             {/* displaying store values into component */}
   <p>Counter value:{counter}</p>
   <p>Text value:</p>
            </>
        )
    }
}
function mapStateToProps(state){
    const counter=state.counter;
    const text=state.text;
    return{
        counter,
        text
    }
}
export default connect(mapStateToProps)(ComponentThree);