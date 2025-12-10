import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("John");
  const [userDetails, setUserDetails] = useState({
  name:"John",
   age:20,
   height:"67",
   DoB:"28/08/2000"
});

// COMMENT VARIABLES
  const [commentInput, setCommentInput] = useState("");

  const handleCommentChange = (event) => {
    const newCommentChange = event.target.value;

    setCommentInput(newCommentChange);
  }

  const [list,setList] = useState(["name, date, comment"]);

  const [comment,setComment] = useState([
    {name:"Carl" ,date:"25/08/2025" ,comment:"yap yap"},
    {name:"Kate" ,date:"25/08/2025" ,comment:"yap yap"},
    {name:"Mum" ,date:"25/08/2025" ,comment:"yap"},
    {name:"Dad" ,date:"25/08/2025" ,comment:"yap yap"},
    {name:"Vince" ,date:"just now" ,comment:"yap"}
  ]);
  
   const handleChange = (event) => {
    const newNameFromInputBox = event.target.value;
    setName(newNameFromInputBox);
  };
  
  const handleAddComment = () => {
    const newInputComment = {name:nameInput,date:new Date().toLocaleString(),comment:commentInput}
    setComment([...comment,newInputComment]);
  }

// NAME VARIABLES

const [nameInput, setNameInput] = useState("");

const handleNameChange = (event) => {
  const newNameChange = event.target.value;

  setNameInput(newNameChange);
}


  return (
    <>
      <div>
        <input
        type = "text"
        onKeyUp={(event)=>{if(event.key==='Enter')handleAddName();}}
        placeholder="Enter your Name"
        onChange= {handleNameChange}
        />
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
  <input
    type="text"
    onKeyUp={(event) => {
      if (event.key === 'Enter') handleAddComment();
    }}
    placeholder="Enter your Comment"
    onChange={handleCommentChange}
  />

  <button
    onClick={() => {
      handleAddComment();
      handleNameChange();
    }}
  >
    Submit
  </button>
</div>
        {comment.map((item) => (
          <span>
            <p>{item.name} | {item.date}</p>
            {item.comment}
          </span>   
        ))}
      </div>
        {/*new Date().toLocaleDateString()*/}
    </>
  )
}

export default App

     
