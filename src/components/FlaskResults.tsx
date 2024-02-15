import React,{useState,useEffect} from 'react'

type Props = {}

const FlaskResults = (props: Props) => { 
  const [flaskHome,setFlaskHome]:any=useState('');
  const [studentData,setStudentData]:any=useState([])
  useEffect(()=>{
    //getFlaskHome();
  },[])
   
    const getFlaskHome=()=>{
        fetch('http://127.0.0.1:5000').then(response => response.json()).then(data => {
        setFlaskHome(data.toString())
       console.log(data);
  });
    }
    const getStudentData=()=>{
      fetch('http://127.0.0.1:5000/students').then(response => response.json()).then(data => {
        setStudentData(data)
       console.log(data);
    });
  }
  return (
    <div>
        <p>Flask should be running, click below to access flask server result </p>
        <button className='bg-blue-400 text-center text-pretty text-black text-bold' onClick={()=>{
            getFlaskHome();
        }}>Press here to get results</button>
        {flaskHome? <p>We have found the following result : {flaskHome}</p>  : <p>There is no data from flask</p>
            

        }
        <button className='bg-blue-400 text-center text-pretty text-black text-bold' onClick={()=>{
            getStudentData();
        }} >Clik here to get student data</button>
      {
        studentData? <div>
          <p>Below is the results for the student data received from flask</p>
          {
            studentData.map((student:any,index:any)=>
              <li key={index}>
                <p>{student.id}</p>
                <p>{student.programme}</p>
              </li>
            )
          }
        </div> :<></>
      }
    </div>
  )
}

export default FlaskResults