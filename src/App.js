import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(null);

  // const fetchData = () =>{
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictedAge(res.data);
  //   });
  // };

  // return (
  //   <div>
  //     <input
  //       placeholder="Ex. Pedro..."
  //       onChange={(event) => {
  //         setName(event.target.value);
  //       }}
  //     />
  //     <button onClick={fetchData}>Predict Age</button>
  //     <h1>Name: {predictedAge?.name}</h1>
  //     <h1>Predicted Age: {predictedAge?.age}</h1>
  //     <h1>Count: {predictedAge?.count}</h1>
  //   </div>
  // );






  // const [generatedExcuse, setGeneratedExcuse] = useState("");

  // const fetchExcuse = (excuse) =>{
  //   Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
  //     setGeneratedExcuse(res.data[0].excuse);
  //   });
  // };

  // return (
  //   <div className="App">
  //     <h1>Generate An Excuse</h1>
  //     <button onClick={()=>fetchExcuse("party")}>Party</button>
  //     <button onClick={()=>fetchExcuse("family")}>Family</button>
  //     <button onClick={()=>fetchExcuse("office")}>Office</button>

  //     <p>{generatedExcuse}</p>
  //   </div>
  // );

  const data={fname: "", lname: ""};
  const [inputData,setInputData]=useState(data);

  const handleData = (e) =>{
    setInputData({...inputData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/users", inputData)
    .then((response)=>{
      console.log(response);
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    Axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
    .then((response) => {
        console.log(response);
      }
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    Axios.delete("https://jsonplaceholder.typicode.com/users/1").then(
      (response) => {
        console.log(response);
      }
    );
  };

  return(
    <>
      <label>First Name:</label>
      <input type="text" name="fname" value={inputData.fname} onChange={handleData}></input>
      <br />

      <label>Second Name:</label>
      <input type="text" name="lname" value={inputData.lname} onChange={handleData}></input>
      <br />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
    
}

export default App;
