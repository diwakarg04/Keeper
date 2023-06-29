import React, {useState} from "react";
import AddTaskSharpIcon from '@mui/icons-material/AddTaskSharp';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom' ;

function CreateArea(props){
    const [isExpanded , setExpanded] = useState(false) ;

    const [note , setNote] = useState({
        title: "" ,
        content: ""  
    }) ;
    function handleChange(event){
        const {name ,value} = event.target ;
        setNote(prevValue =>{
            return{
                ...prevValue ,
                [name]: value
            } ;
        });
    }
    function addItems(event){
        props.onAdd(note) ;
        setNote({
            title: "" ,
            content: ""  
        }) ;
        event.preventDefault() ;
    }
    function expand(){
        setExpanded(true) ;
    }
    return (
        <div>
            <form className="create-note">
            {isExpanded && <input 
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={note.title} />} 
                <textarea 
                    onClick= {expand}
                    onChange={handleChange}
                    name="content" 
                    placeholder="Write a Note..." 
                    rows= {isExpanded ? 3 : 1} 
                    value={note.content}
                    />
                <Zoom in ={isExpanded}>
                    <Fab onClick={addItems}><AddTaskSharpIcon /></Fab>
                </Zoom> 
            </form>
        </div>
    )
};

export default CreateArea ;