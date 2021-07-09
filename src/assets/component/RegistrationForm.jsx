import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () =>{

    const [data, setData] = useState({
        name: "",
        number1: "",
        number2: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        qualification: "",
        profession: "",
        facebooklink: "",
        twitterlink: "",
        instagramlink: "",
        reasontocontribute: "",
        hours: "",
        days: "",
        image: "",
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    const addtolist = async () => {
        // console.log("uim",data.image)
        // console.log(data);
        var formData = new FormData();
        formData.append('Name', data.name);
        formData.append('Number1', data.number1);
        formData.append('Number2',data.number2);
        formData.append('Email', data.email);
        formData.append('Address', data.address);
        formData.append('City', data.city);
        formData.append('State', data.state);
        formData.append('Zipcode', data.zipcode);
        formData.append('Qualification', data.qualification);
        formData.append('Profession', data.profession);
        formData.append('Facebooklink', data.facebooklink);
        formData.append('Twitterlink', data.twitterlink);
        formData.append('Instagramlink', data.instagramlink);
        formData.append('Reasontocontribute', data.reasontocontribute);
        formData.append('Hours', data.hours);
        formData.append('Days', data.days);
        formData.append('image', data.image);
        const resp = axios.post("http://localhost:7000/volu",formData);
      };
    
    
    
      
      const InputEvent = (event) => {
        const { name, value } = event.target;
    
        // setData((preVal) => {
        //   return {
        //     ...preVal,
        //     [name]: value,
        //   };
        // });
        setData({...data,[name]:value});
      };

     const handlefile=(e)=>{
      console.log('img upload');
      console.log(e.target.files[0]);
      setData({ ...data, [e.target.name]: e.target.files[0]})

     }
      const formSubmit = (e) => {
        e.preventDefault();
        //addtolist(data);
      };
    return(
        <>
            <section className="container-fluid" id="registration-form">
                <div className="row registration-header">
                    <div className="col d-flex justify-content-center align-items-center text-white">
                        <h1>Become a volunteer</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 px-2 mx-auto my-5">
                        <form onSubmit={formSubmit} encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="InputName">Name<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="name" value={data.name} placeholder="Enter your name" onChange={InputEvent} id="InputName" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="inputNumber1">Mobile No. 1<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="number1" value={data.number1} placeholder="Enter your mobile no." onChange={InputEvent} id="inputNumber1" />
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="inputNumber2">Mobile No. 2</label>
                                <input type="text" className="form-control" name="number2" value={data.number2} placeholder="Enter another number if you have" onChange={InputEvent} id="inputNumber2" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email<span className="asterisk">*</span></label>
                                <input type="email" className="form-control" required name="email" value={data.email} placeholder="Enter email address" onChange={InputEvent} id="InputEmail" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="address" value={data.address} placeholder="Enter your address" onChange={InputEvent} id="inputAddress" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                <label htmlFor="inputCity">City<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="city" value={data.city} placeholder="Enter your city" onChange={InputEvent} id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                <label htmlFor="inputState">State<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="state" value={data.state} placeholder="Enter your state" onChange={InputEvent} id="inputState" />
                                </div>
                                <div className="form-group col-md-3">
                                <label htmlFor="inputZip">Zip Code<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="zipcode" value={data.zipcode} placeholder="Enter your zipcode" onChange={InputEvent} id="inputZip" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputQualification">Qualification<span className="asterisk">*</span></label>
                                <input type="text" className="form-control" required name="qualification" value={data.qualification} placeholder="Enter your qualification" onChange={InputEvent} id="InputQualification" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputProfession">Profession</label>
                                <input type="text" className="form-control" name="profession" value={data.profession} placeholder="Enter your profession" onChange={InputEvent} id="InputProfession" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputFacebookprofilelink">Facebook profile link</label>
                                <input type="text" className="form-control" name="facebooklink" value={data.facebooklink} placeholder="Enter your facebook link" onChange={InputEvent} id="InputFacebookprofilelink" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputTwitterprofilelink">Twitter profile link</label>
                                <input type="text" className="form-control" name="twitterlink" value={data.twitterlink} placeholder="Enter your twitter link" onChange={InputEvent} id="InputTwitterprofilelink" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputInstagramprofilelink">Instagram profile link</label>
                                <input type="text" className="form-control" name="instagramlink" value={data.instagramlink} placeholder="Enter your instagram link" onChange={InputEvent} id="InputInstagramprofilelink" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormControlReason">How would you like to contribute to Society in Care?<span className="asterisk">*</span></label>
                                <textarea className="form-control" id="FormControlReason" maxLength="1000" rows="3" name="reasontocontribute" value={data.reasontocontribute} onChange={InputEvent} placeholder=""></textarea>
                            </div>
                            <div className="form-row">
                                <label htmlFor="inputHours" className="form-group">How much time you can devote to Society in Care?<span className="asterisk">*</span></label>
                                <div className="form-group col-6">
                                <label htmlFor="inputHours" className="sr-only">Hours</label>
                                <input type="number" className="form-control mr-1" required id="inputHours" name="hours" value={data.hours} placeholder="Enter Hours" onChange={InputEvent} />
                                </div>
                                <div className="form-group col-6">
                                <label htmlFor="inputState" className="sr-only">Days<span className="asterisk">*</span></label>
                                <select size="3" id="inputState" className="form-control" required name="days" value={data.days} onChange={InputEvent}>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>
                                </select>
                                </div>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" name="image"  onChange={handlefile} />
                                <label className="custom-file-label" htmlFor="customFile">Upload your passport size photo<span className="asterisk">*</span></label>
                                <small id="emailHelp" className="form-text text-muted">Photo size should less than 2MB</small>
                            </div>
                            <div className="form-group mt-4">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" required id="gridRead" />
                                <label className="form-check-label" htmlFor="gridRead">
                                    I have read the <strong>code of conduct carefully</strong>.
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" required id="gridAgree" />
                                <label className="form-check-label" htmlFor="gridAgree">
                                    I agree with the <strong>code of conducts</strong>.
                                </label>
                                </div>
                            </div>
                            <button type="submit" onClick={addtolist} className="btn-register">Register now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegistrationForm;