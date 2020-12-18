import React, {useState, useEffect} from 'react'
import './App.css';
import Axios from 'axios'

function App() {

  const [name, setname] = useState('')
  const [phone, setphone]= useState('')
  const [Email, setemail]= useState('')
  const [Alldata, setAllData] = useState([])
 
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setAllData(response.data)
    })
  },[])

  const submitall = ()=>{
    Axios.post('http://localhost:3001/api/insert',
              {Name: name, 
               Phone: phone,
               Email: Email}).then (()=>{alert("Success!")}).then(()=>{
                 alert("success");
               })
              };





  return (
    <div className="App">
     
     <h1> INPUT TEST </h1>
     <p>Name</p>
     <input type='text' 
            name='Name'
            onChange={(event)=>{ setname(event.target.value)} }></input>
     <br></br>
     <p>Phone</p>
     <input type= 'text'
            name='Phone' 
            onChange={(event)=>{ setphone(event.target.value)} }></input>
     <br></br>
     <p>Email</p>
     <input type= 'text' 
            name ='Email'
            onChange={(event)=>{ setemail(event.target.value)} }></input>
     <br></br>
     <button onClick = {submitall}>Submit</button>

     {Alldata.map((val) => {
       return <h1>Name: {val.customer_name}  |   Phone: {val.customer_phone}  | Email: {val.customer_email}</h1>
     })}

    

    </div>
  );
}

export default App;
