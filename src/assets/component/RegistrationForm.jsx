import React, { useState } from "react";

const RegistrationForm = () =>{
    const [data, setData] = useState(
        {
            name : "",
            number1 : "",
            number2 : "",
            email : "",
            address : "",
            city : "",
            state : "",
            zipcode : "",
            qualification : "",
            profession : "",
            facebooklink : "",
            twitterlink : "",
            instagramlink : "",
            reasontocontribute : "",
            hours : "",
            days : "",
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
        alert(`Name: ${data.name}. Number1: ${data.number1}. Number2: ${data.number2}.
        Email: ${data.email}. Address: ${data.address}. city: ${data.city}. state: ${data.state}.
        Zipcode: ${data.zipcode}. Qualification: ${data.qualification}. Profession: ${data.profession}. 
        FacebookLink: ${data.facebooklink}. TwitterLink: ${data.twitterlink}. InstagramLink: ${data.instagramlink}.
        ReasonToContribute: ${data.reasontocontribute}. Hours: ${data.hours}. Days: ${data.days}.
        Uploadfile: ${data.uploadfile}.`)

    }
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
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label htmlFor="InputName">Name</label>
                                <input type="text" className="form-control" required name="name" value={data.name} placeholder="Enter your name" onChange={InputEvent} id="InputName" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="inputNumber1">Mobile No. 1</label>
                                <input type="text" className="form-control" required name="number1" value={data.number1} placeholder="Enter your mobile no." onChange={InputEvent} id="inputNumber1" />
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="inputNumber2">Mobile No. 2</label>
                                <input type="text" className="form-control" name="number2" value={data.number2} placeholder="Enter another number if you have" onChange={InputEvent} id="inputNumber2" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email</label>
                                <input type="email" className="form-control" required name="email" value={data.email} placeholder="Enter email address" onChange={InputEvent} id="InputEmail" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" required name="address" value={data.address} placeholder="Enter your address" onChange={InputEvent} id="inputAddress" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" required name="city" value={data.city} placeholder="Enter your city" onChange={InputEvent} id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                <label htmlFor="inputState">State</label>
                                <select id="inputState" className="form-control" required name="state" value={data.state} placeholder="Enter your state" onChange={InputEvent}>
                                    <option>Delhi</option>
                                    <option>Mumbai</option>
                                    <option>Kolkata</option>
                                    <option>Chennai</option>
                                </select>
                                </div>
                                <div className="form-group col-md-3">
                                <label htmlFor="inputZip">Zip Code</label>
                                <input type="text" className="form-control" required name="zipcode" value={data.zipcode} placeholder="Enter your zipcode" onChange={InputEvent} id="inputZip" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputQualification">Qualification</label>
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
                                <label htmlFor="FormControlReason">How would you like to contribute to Society in Care?</label>
                                <textarea className="form-control" id="FormControlReason" rows="3" name="reasontocontribute" value={data.reasontocontribute} onChange={InputEvent} placeholder=""></textarea>
                            </div>
                            <div className="form-row">
                                <label htmlFor="inputHours" className="form-group">How much time you can devote to Society in Care?</label>
                                <div className="form-group col-6">
                                <label htmlFor="inputHours" className="sr-only">Hours</label>
                                <input type="number" className="form-control mr-1" id="inputHours" name="hours" value={data.hours} placeholder="Enter Hours" onChange={InputEvent} />
                                </div>
                                <div className="form-group col-6">
                                <label htmlFor="inputState" className="sr-only">Days</label>
                                <select size="3" id="inputState" className="form-control" required name="days" value={data.days} onChange={InputEvent}>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                    <option>Sunday</option>
                                </select>
                                </div>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" name="uploadfile" value={data.uploadfile} onChange={InputEvent} />
                                <label className="custom-file-label" htmlFor="customFile">Upload your passport size photo</label>
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
                            <button type="submit" className="btn-register">Register now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegistrationForm;