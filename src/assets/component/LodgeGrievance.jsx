import React, {useState} from "react";
import axios from "axios";

const LodgeGrievance = () => {
    const addto = () => {
        console.log("done");
        axios.post(
          "http://localhost:7000/prgi",
          {
            Name: data.name,
            Mobileno: data.number,
            Email: data.email,
            Pincode: data.pincode,
            Department: data.department,
            Locality: data.locality,
            Siteaddress: data.address,
            Complaintaddress:data.complaint,
            Reasontocontribute:data.reasontocontribute,
          },
          config
        );
      };
    
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const [data, setData] = useState({
        name: "",
        number: "",
        email:"",
        pincode:"",
        department: "",
        locality: "",
        address: "",
        complaint: "",
        reasontocontribute: "",
      });
    
      const InputEvent = (event) => {
        const { name, value } = event.target;
    
        setData((preVal) => {
          return {
            ...preVal,
            [name]: value,
          };
        });
      };
    
      const formSubmit = (e) => {
        e.preventDefault();
        addto();
      };
    return(
        <>
            <section className="container-fluid" id="lodge-grievance">
                <div className="row lodge-grievance-header">
                    <div className="col d-flex justify-content-center align-items-center text-white">
                        <h1>lodge public grievance</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 px-2 mx-auto my-5">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name">Your Name<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="name" value={data.name} onChange={InputEvent} id="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="MobileNumber">Mobile Number<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="number" value={data.number} onChange={InputEvent} id="MobileNumber" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">E-mail ID<span className="asterisk">*</span></label>
                                <input type="email" className="form-control" required name="email" value={data.email} onChange={InputEvent} id="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Pincode">Pincode<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="pincode" value={data.pincode} onChange={InputEvent} id="Pincode" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="DepartmentConcerned">Department Concerned<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="department" value={data.department} onChange={InputEvent} id="DepartmentConcerned" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="LocalityGrievance">Locality of the Grievance<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="locality" value={data.locality}  onChange={InputEvent} id="LocalityGrievance" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="GrievanceAddress">Grievance Site Address<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="address" value={data.address} onChange={InputEvent} id="GrievanceAddress" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ComplaintAddress">Complaint Address<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="complaint" value={data.complaint} onChange={InputEvent} id="ComplaintAddress" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormDescription">Description<span className="asterisk">*</span></label>
                                <textarea className="form-control" id="FormDescription" rows="3" name="reasontocontribute" value={data.reasontocontribute} onChange={InputEvent}></textarea>
                                <small className="form-text text-muted">Max 2000 Characters. 
                                Please do not use the special character(~, `, !, $, ^, *, [, ], |, '', --) for entry</small>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" name="uploadfile" value={data.uploadfile} onChange={InputEvent} />
                                <label className="custom-file-label" htmlFor="customFile">Upload Document, if required</label>
                                <small className="form-text text-muted">Photo size should less than 2MB</small>
                            </div>
                            <button type="submit" className="btn-lodge-grievance">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LodgeGrievance;