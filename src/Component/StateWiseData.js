import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import './StateWiseData.css';
const StateWiseData =()=> {


const [data, setdata] = useState([])
const [inputData, setInputData] = useState('')

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      console.log(res);
      const actualData = await res.json();
      console.log(actualData.statewise);
      setdata(actualData.statewise)
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
    return (
      <>

      <div className='tableData'>

      <div className='searchDiv'> 
      <input type="text" placeholder="Search State Name.." name="search"  onChange={(e)=>{
        setInputData(e.target.value)
      }}/>
      </div>

      <table  id="customers">
        <thead  >
          <tr>
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>RECOVERED</th>
            <th>DEATHS</th>
            <th>ACTIVE</th>
            <th>UPDATED</th>
          </tr>
        </thead>
        <tbody>

      {
        data.filter((ele)=>{
          console.log(ele)

          if(inputData === ''){
            return ele;
          }

          else if(inputData.toLowerCase().includes((ele.state.toLowerCase()))){
            return ele;
          }
         
        }).map((val,index)=>{
          return(
            <>
            <tr key={index} >
          <td>{val.state}</td>
          <td>{val.confirmed}</td>
          <td>{val.recovered}</td>
          <td>{val.deaths}</td>
          <td>{val.active}</td>
          <td>{val.lastupdatedtime}</td>
        </tr>
            </>
          )
        })
      }




        
        </tbody>
      </table>

      </div>

          
      </>
    )
  }


export default StateWiseData