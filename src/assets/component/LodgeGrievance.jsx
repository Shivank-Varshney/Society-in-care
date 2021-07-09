import React, {useState} from "react";
import axios from "axios";

const LodgeGrievance = () => {
    const [Image,setImage] = useState({});
  
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
    image:"",
  });
     
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

    const addto = async () => {
        console.log("done");
        //console.log(data);
        var formdata = new FormData();
        formdata.append('Name',data.name );
        formdata.append('Mobileno',data.number );
        formdata.append('Email',data.email );
        formdata.append('Pincode',data.pincode );
        formdata.append('Department',data.department );
        formdata.append('Locality',data.locality );
        formdata.append('Siteaddress',data.address );
        formdata.append('Complaintaddress',data.complaint );
        formdata.append('Reasontocontribute',data.reasontocontribute );
        formdata.append('image',data.image );
        //console.log(formdata);
        
        const resp = axios.post("http://localhost:7000/prgi",formdata);
        //console.log(resp);
        console.log()
      };
     
     
    
      
    
      const InputEvent = (event) => {
        const { name, value } = event.target;

        setData({...data,[name]:value});
      };

     const handlefile=(e)=>{
      console.log('img upload');
      console.log(e.target.files);
      setData({ ...data, [e.target.name]: e.target.files[0]})

     }
      const formSubmit = (e) => {
        e.preventDefault();
        //addto(data);
    
      };
      
      const fileonchange = (event) =>{
          setImage(event.target.files[0]);
      }
      const sendImage = (event) =>{
          let formData = new FormData();

        formData.append('avtar',Image)

          fetch('http://localhost:7000/uploadfile',{
              method:'post',
              body:formData,
          }).then((res) => res.text())
            .then((resBody)=>{
              console.log(resBody)
          })
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
                        <form onSubmit={formSubmit}  encType="multipart/form-data">
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
                                <textarea className="form-control" id="FormDescription" maxLength='1000' rows="3" name="reasontocontribute" value={data.reasontocontribute} onChange={InputEvent}></textarea>
                                <small className="form-text text-muted">Max 2000 Characters. 
                                Please do not use the special character(~, `, !, $, ^, *, [, ], |, '', --) for entry</small>
                            </div>
                            <div className="custom-file">
                                <input  type="file" className="custom-file-input" id="customFile" name="image" multiple onChange={handlefile} />
                                <label className="custom-file-label" htmlFor="customFile">Upload Document, if required</label>
                                <small className="form-text text-muted">Photo size should less than 2MB</small>
                            </div>
                            <button type="submit" className="btn-lodge-grievance" onClick={addto} >Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LodgeGrievance;