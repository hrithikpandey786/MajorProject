import React from "react"
import './App.css';
import headerpic from "./image6.png"
import TableData from "./TableData.js"

export default function AdminDashboard(){
    
    const [studentData, setStudentData] = React.useState([{
        name: "Hrithik",
        rollNo: 2022073031,
        address: "Varanasi",
        status: "Requested"
      },
      {
        name: "Anup",
        rollNo: 2022104018,
        address: "Gorakhpur",
        status: "Fulfilled"
      }]);
    
      function addStudentData(){
        setStudentData();
      }

    return (
        <>
            <img src={headerpic} className='image6' alt="header"/>
      <div className="admin-dash-mid-section">
        <h3 className="admin-dash-title">ADMIN DASHBOARD</h3>
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
        </>
    )
}