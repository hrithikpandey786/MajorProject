import React from "react";
import './App.css';
import headerpic from "./image6.png"
import TableData from "./TableData.js"

function App() {
  const [studentData, setStudentData] = React.useState([{
    name: "Hrithik",
    rollNo: 2022073031,
    address: "Prayagraj",
    status: "Requested"
  },
  {
    name: "Anup",
    rollNo: 2022104029,
    address: "Gorakhpur",
    status: "Fulfilled"
  }]);
  

  return (
    <div className="App">
      <img src={headerpic} className='image6' alt="header"/>
      <div className="mid-section">
        <h3 className="title">ADMIN DASHBOARD</h3>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ROLL NO</th>
              <th>ADDRESS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {
              studentData.map(data=>{
                return <TableData data={data}/>
              })
            }
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default App;
