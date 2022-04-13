import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './CovidIndia.css'

const CovidIndia = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      console.log(res);
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      

      <div className="dataContainer">
        <div className="country  div">
          <div className="head ">
            <p>
              <span>Our</span> Country
            </p>
            <h1>India</h1>
          </div>
        </div>

        <div className="recover div">
          <div className="head">
            <p>
              <span>Total</span> Recovered
            </p>
            <h1>{data.recovered}</h1>
          </div>
        </div>

        <div className="confirm div">
          <div className="head">
            <p>
              <span>Total</span> Confirmed
            </p>
            <h1>{data.confirmed}</h1>
          </div>
        </div>

        <div className="death div">
          <div className="head">
            <p>
              <span>Total</span> Deaths
            </p>
            <h1>{data.deaths}</h1>
          </div>
        </div>

        <div className="active div">
          <div className="head">
            <p>
              <span>Total</span> Active
            </p>
            <h1>{data.active}</h1>
          </div>
        </div>

        <div className="update div">
          <div className="head">
            <p>
              <span>Last</span> UPDATE
            </p>
            <h1>{data.lastupdatedtime}</h1>
          </div>
        </div>

      </div>
    </>
  );
};

export default CovidIndia;
