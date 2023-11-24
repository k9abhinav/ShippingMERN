import React, { useEffect, useState } from "react";
import '../stylesheets/styles.css'
import { useParams } from "react-router-dom";
import axios from 'axios';

const Formpage = () => {
  const [Name, setName] = useState("");
  const [Weight, setWeight] = useState("");
  const [Color, setColor] = useState("");
  const [Country, setCountry] = useState("");
  const [Cost, setCost] = useState("");

  const [userID, setuserID] = useState(null);
  const params = useParams();

  useEffect(() => {
    if(params && params.id){
      setuserID(params.id);
      getUserById(params.id);
    }else{
      setuserID(null);
    }
  }, [params]);

  


  const handleSubmit = async (e)=>{
    e.preventDefault();

    const data = {
        Name:Name,
        Color:Color,
        Weight:Weight,
        Country:Country,
        Cost:Cost
    }
  
    try{
        let response;
        if(userID){
            // Updating the user
            response = await axios.put("http://localhost:5000/user/" + userID, data);
        }
        else{
            // user is being created
            response = await axios.post("http://localhost:5000/user", data);
        }
        alert(response.data);
    }
    catch(error){
        alert(error)
    }
    
  }


  const calculateCost=()=>{
    let totalCost = Weight*Country;
    setCost(totalCost)

  }


 

  const getUserById = async (userID)=>{
    try{
        const response = await axios.get("http://localhost:5000/user/" + userID);
        const userdata = response.data;

        setName(userdata.Name)
        setColor(userdata.Color)
        setCountry(userdata.Country)
        setWeight(userdata.Weight)
        setCost(userdata.Weight*userdata.Country.value)
        // let ourCost = userdata.Weight*userdata.Country
        // if(userdata.Cost === 0){
        // setCost(ourCost)
        // }
        // else{
        //   setCost(userdata.Cost)
        // }
    }
    catch(error){
        alert(error)
    }
  }

  return (
    
      <div class="form-container">
    <form onSubmit={handleSubmit}>
      <h1>FILL DETAILS</h1>
      <div className="inputbox">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          required
          title="Cannot have a number"
          autoComplete="off"
          value={Name}
          pattern="[A-Z|a-z]"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="inputbox">
        <label htmlFor="Weight">Weight</label>
        <input
          type='text'
          // pattern="/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/"
          pattern="\d*\.?\d"
          placeholder="Weight of boxes (in kgs)"
          value={Weight}
          title="Its a number and decimal value is allowed"
          autoComplete="off"
          required
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        ></input>
      </div>
      <div className="inputbox">
        <label htmlFor="Color">Color</label>
        <input
          type="text"
          required
          placeholder="Enter the name of the color"
          autoComplete="off"
          value={Color}
          title="Valid color name"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        ></input>
      </div>
      <div className="inputbox">
        <label for="Country">Destination Country:</label>
        <select id="Country" required autoComplete="off" value={Country} onChange={(e)=>{
            setCountry(e.target.value)
        }}>
          <option value='' disabled>Select a Country</option>
          <option value="7.35">Sweden(7.35 INR)</option>
          <option value="11.53">China(11.53 INR)</option>
          <option value="15.63">Brazil(15.63 INR)</option>
          <option value="50.09">Australia(50.09 INR)</option>
        </select>
      </div>
      <button type='submit' className="btn" onClick={calculateCost}>SUBMIT</button>
    </form>
  </div>

  );
};

export default Formpage;
