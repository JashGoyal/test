import React from "react";
import styled from "styled-components";
import Navbaruser from "../components/Navbaruser";
import Sidebar from "../components/Sidebar";

const AddStyles = styled.div`
  form {
    margin-top: 2rem;
  }
  .box,
  .box button {
    align-items: center;
  }
  .box {
    width: 500px;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .box button {
    width: 180px;
    border-radius: 4px;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    padding: 10px 0;
  }
  .box-two input label {
    position: absolute;
    top: 0;
  }
  .box-two input::placeholder {
    font-size: 1.2rem;
  }
  .box-two .next-btn {
    background-color: #930606;
    color: #fff;
    border-color: #930606;
    float: right;
  }

  input[type="text"],
  input[type="date"] {
    background-color: #e9e9e9;
    border-radius: 4px;
    border-color: #e9e9e9;
    margin-bottom: 1.5rem;
    width: 200px;
    height: 40px;
  }
  label,
  button {
    margin-right: 10rem;
    color: #000;
    font-size: large;
    font-weight: 400;
    width: 120px;
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  select {
    background-color: white;
    border: thin solid blue;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 8px;
    background-color: #e9e9e9;
    border-color: #e9e9e9;
    margin-bottom: 1rem;
    width: 200px;
    height: 40px;
  }
  h1 {
    color: red;
    font-size: 25px;
  }
  input[type="checkbox"] {
    border-radius: 8px;
    margin: 10px;
  }
  .minimal select {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }
`;
const Add = () => {
  return (
    <>
      <Navbaruser />
      <Sidebar>
        <AddMain />
      </Sidebar>
    </>
  );
};

const AddMain = () => {
  return (
    <AddStyles>
      <div className="box box-two">
        <h1>Add Student</h1>
        <form>
          <div>
            {" "}
            <label type="text">Full Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            {" "}
            <label type="text">Date Of Birth</label>
            <input type="date" placeholder="dd-mm-yyyy" />
          </div>
          <div className="minimal">
            <label type="text">School</label>
            <select>
              <option>Junior</option>
              <option>Secondary</option>
              <option>Senior</option>
            </select>
          </div>
          <div className="minimal">
            <label type="text">Class</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="minimal">
            <label type="text">Division</label>
            <select>
              Select
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <label type="checkbox">Status</label>
          <input type="checkbox" /> Active
          <input type="checkbox" /> Invoice
        </form>
        <button type="submit" className="next-btn">
          Save
        </button>
      </div>
    </AddStyles>
  );
};

export default Add;
