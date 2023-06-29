import React, { useState } from "react";
import Header from "./Header.jsx" ;
import Footer from "./footer.jsx" ;
import Note from "./Note.jsx" ;
import CreateArea from "./CreateArea.jsx";



function App(){

  const [item , setItems] = useState([]) ;
  function addNote(NewNote){
    setItems(prevValue =>{
      return [...prevValue , NewNote] ;
    }) ;
  }
  function DeleteNote(id){
    setItems(prevValue =>{
     return prevValue.filter((item,index)=> {
        return index !== id ;
     })
    }) ;
  }
    return (
          <div>
            <Header></Header>
            <CreateArea 
              onAdd = {addNote}
            />
            {item.map((element,index) =>{
              return(
                <Note
                  onDelete = {DeleteNote}
                  id = {index}
                  key = {index}
                  title = {element.title}
                  main = {element.content}/>
              )
            })}         
            <Footer></Footer>
          </div>
    )
} ;


export default App ;