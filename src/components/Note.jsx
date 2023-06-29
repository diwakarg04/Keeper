import React from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
function Note(props){
  function handeClick(){
    props.onDelete(props.id)
  }
  return (
    <div className= "note">
      <h1>{props.title}</h1>
      <p >{props.main}</p>
      <button onClick={handeClick}> <DeleteSweepIcon /> </button>
    </div>
  ) ;
} ;


export default Note ;