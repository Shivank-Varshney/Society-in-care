import React, {useState} from "react";

const LodgeGrievance = () => {
    const [data, setData] = useState(
        {
            name : "",
            number : "",
            email : "",
            pincode : "",
            department : "",
            locality : "",
            address : "",
            complaint : "",
            reasontocontribute : "",
            uploadfile : ""        
        }
    );

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preVal) =>{
            return{
                   ...preVal,
                   [name] : value
            };
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${data.name}.`)

    }
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
                        <form formSubmit={formSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputName">Your Name<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="name" value={data.name} onChange={InputEvent} id="inputName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputMobileNumber">Mobile Number<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="number" value={data.number} onChange={InputEvent} id="inputMobileNumber" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">E-mail ID<span className="asterisk">*</span></label>
                                <input type="email" className="form-control" required name="email" value={data.email} onChange={InputEvent} id="inputEmail" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPincode">Pincode<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="pincode" value={data.pincode} onChange={InputEvent} id="inputPincode" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputDepartmentConcerned">Department Concerned<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="department" value={data.department} onChange={InputEvent} id="InputDepartmentConcerned" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputLocalityGrievance">Locality of the Grievance<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="locality" value={data.locality}  onChange={InputEvent} id="InputLocalityGrievance" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputGrievanceAddress">Grievance Site Address<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="address" value={data.address} onChange={InputEvent} id="inputGrievanceAddress" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputComplaintAddress">Complaint Address<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="complaint" value={data.complaint} onChange={InputEvent} id="inputComplaintAddress" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormDescription">Description<span className="asterisk">*</span></label>
                                <textarea className="form-control" id="FormDescription" rows="3" name="reasontocontribute" value={data.reasontocontribute} onChange={InputEvent}></textarea>
                                <small id="emailHelp" class="form-text text-muted">Max 2000 Characters. 
                                Please do not use the special character(~, `, !, $, ^, *, [, ], |, '', --) for entry</small>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" name="uploadfile" value={data.uploadfile} onChange={InputEvent} />
                                <label className="custom-file-label" htmlFor="customFile">Upload Document, if required</label>
                                <small id="emailHelp" class="form-text text-muted">Photo size should less than 2MB</small>
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