import React from "react";
import {Routes, Route} from "react-router-dom";
// import './App.css';
// import headerpic from "./image6.png"
// import TableData from "./TableData.js"
import StudentReqPage from "./StudentRequestPage"
import AdminDashboard from "./AdminDashboard";

function App() {
  // const [studentData, setStudentData] = React.useState([{
  //   name: "Hrithik",
  //   rollNo: 2022073031,
  //   address: "Prayagraj",
  //   status: "Requested"
  // },
  // {
  //   name: "Anup",
  //   rollNo: 2022104029,
  //   address: "Gorakhpur",
  //   status: "Fulfilled"
  // }]);

  // function addStudentData(){
  //   setStudentData();
  // }
  

  return (
    

    <div className="App">
      <Routes>
      <Route path="/" element={<StudentReqPage/>}/>
      <Route path="/admin" element={< AdminDashboard />}/>
    </Routes>
      {/* <img src={headerpic} className='image6' alt="header"/>
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
      </div> */}
      
    </div>
  );
}

export default App;
