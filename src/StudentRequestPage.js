import React from "react";
import pic from "./image6.png"

export default function StudentRequestPage(){
    return (
        <div>
            <img src={pic} className="image6"></img>
            <h2 id="studentReqText">STUDENT REQUEST PAGE</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Course</th>
                        <th>Branch</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}