import React,{useState,useEffect} from 'react'
import './App.css';
import Video from './Video'
import axios from './axios';
function App() {
  const [data,setData]=useState([]);
  useEffect(() => {
   async function fetchData(){
     const res=await axios.get('/v2/posts')
     setData(res.data);
   }
   fetchData()
  }, [])
  console.log(data);
  return (
    <div className="app">
      <div className="app__video">
        {
          data.map((value)=>{
               return <Video key={value._id} url={value.url}/>
          })
        }
      </div>
       
    </div>
  );
}

export default App;
