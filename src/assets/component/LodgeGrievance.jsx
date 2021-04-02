import React from "react";

const LodgeGrievance = () => {
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputName">Your Name</label>
                                <input type="text" className="form-control" required name="name" value="" onChange={InputEvent} id="inputName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputMobileNumber">Mobile Number</label>
                                <input type="text" className="form-control" required name="number" value="" onChange={InputEvent} id="inputMobileNumber" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">E-mail ID</label>
                                <input type="email" className="form-control" required name="email" value="" onChange={InputEvent} id="inputEmail" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPincode">Pincode</label>
                                <input type="text" className="form-control" required name="pincode" value="" onChange={InputEvent} id="inputPincode" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputDepartmentConcerned">Department Concerned</label>
                                <input type="text" className="form-control" required name="department concerned" value="" onChange={InputEvent} id="InputDepartmentConcerned" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputLocalityGrievance">Locality of the Grievance</label>
                                <input type="text" className="form-control" required name="locality" value=""  onChange={InputEvent} id="InputLocalityGrievance" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputGrievanceAddress">Grievance Site Address</label>
                                <input type="text" className="form-control" required name="address" value="" onChange={InputEvent} id="inputGrievanceAddress" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputComplaintAddress">Complaint Address</label>
                                <input type="text" className="form-control" required name="complaint" value="" onChange={InputEvent} id="inputComplaintAddress" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormDescription">Description</label>
                                <textarea className="form-control" id="FormDescription" rows="3" name="reasontocontribute" value="" onChange={InputEvent}></textarea>
                                <small id="emailHelp" class="form-text text-muted">Max 2000 Characters. 
                                Please do not use the special character(~, `, !, $, ^, *, [, ], |, '', --) for entry</small>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" name="uploadfile" value="" onChange={InputEvent} />
                                <label className="custom-file-label" htmlFor="customFile">Upload Document, if required</label>
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