import React from 'react';
import './App.css';
export default function Box(props){
    // const [on , setOn ] = React.useState(props.on)
    // function toggle() {
    //     setOn(prevOn => ! prevOn)
    // }
    // console.log(props.id)
    const styles = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }
    return(
        // <div style={styles} className="box" onClick={()=>props.toggle(props.id)} ></div>

        <div style={styles} className="box" onClick={props.toggle} ></div>
    );
}