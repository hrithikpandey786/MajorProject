import React from "react";
import pic from "./image6.png"
import accountpic from "./accountImage.png";
import pencilImage from "./pencilImage.png";
export default function StudentRequestPage(){
    
    const [userData, setUserData] = React.useState({
        name: "Anup",
        rollNo: "2022073031",
        course: "MCA",
        branch: "ITCA"
    });

    const [userRequestData, setUserRequestData] = React.useState({
        address: "",
        transactionNumber: "",
        contactNumber: ""
    });

    return (
        <div className="studentRequestDiv">
            <img src={pic} className="image6"></img>
            <h2 id="studentReqText">STUDENT REQUEST PAGE</h2>
            <div className="student-req-mid-section">
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
                        <tr>
                            <td>{userData.name}</td>
                            <td>{userData.rollNo}</td>
                            <td>{userData.course}</td>
                            <td>{userData.branch}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="user-account">
                    <img src={accountpic} className="useraccount-pic"></img>
                    <h3>EDIT YOUR PROFILE</h3>
                    <img src={pencilImage} className="pencil-image"></img>
                </div>
            </div>

            <form>
                <div className="labelAndInput">
                    <label htmlFor="userAddress">
                        Enter Your Present Address:
                    </label>
                    <input 
                        id="userAddress"
                        type="text"
                        value= {userRequestData.address}
                    >
                    </input>
                </div>
                
                <div className="labelAndInput">
                    <label htmlFor="userTransactionNum">
                        Enter Your Transaction Number:
                    </label>
                    <input 
                        id="userTransactionNum"
                        type="text"
                        value= {userRequestData.transactionNumber}
                    >
                    </input>
                </div>

                <div className="labelAndInput">
                    <label htmlFor="userContactNum">
                        Enter Your Contact Number:
                    </label>
                    <input 
                        id="userContactNum"
                        type="text"
                        value= {userRequestData.contactNumber}
                    >
                    </input>
                
                </div>

                <button typt="submit">Submit Your Request</button>
            </form>
        </div>
    )
}