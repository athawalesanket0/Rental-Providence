import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useForm } from 'react-hook-form'
import "../../App.css"

const AddRoom = () => {

    const err = {
        zipMsg: "Give correct zip",
        typeMsg: "Specify Room Type",
        mainPicMsg: "Please Provide a specific picture",
        addressMsg: "Please Provide address",
        cityMsg: "Please Provide city",
        stateMsg: "Please Enter state name",
        descriptionMsg: "Provide description about your room atleast in 100 characters",
        utilityMsg: "Please specify inclusion of utility",
        rentMsg: "Please mention Monthly rate for the room"
    }
    const checkstyle = {
        position: "relative",
        opacity: "1",
        pointerEvents: "all",
    }

    const { handleSubmit } = useForm()
    const history = useHistory()
    const [type, setType] = useState("")
    const [mainPic, setmainPic] = useState("")
    const [contactPhone, setContactPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [utilitiesInc, setUtility] = useState("")
    const [rent, setRent] = useState("")
    const [description, setDescription] = useState("")
    const [maritalStatus, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")

    const submit = (e) => {
        // e.preventDefault()
        console.log(type)
        console.log(mainPic)
        console.log(contactPhone)
        console.log(address)
        console.log(city)
        console.log(state)
        console.log(zip)
        console.log(utilitiesInc)
        console.log(rent)
        console.log(description)
        console.log(maritalStatus)
        console.log(gender)
        console.log(email)
    }


    return (
        <div className="" style={{ maxWidth: "600px", margin: "0px auto", border: "2px solid black" }}>
            {/* //header */}
            <div className="">
                <h1 className="center bold">Room Details</h1>
            </div>

            {/* //form */}
            <div className="">

                <hr></hr>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label className="" for="typeId">Room Type</label>
                        <select id="typeId" className="browser-default" name="type" onChange={(e) => setType(e.target.value)}>
                            <option selected="selected">Select Room Type</option>
                            <option value="Private">Private</option>
                            <option value="Shared">Shared</option>
                        </select>
                        <p style={(type === "") ? { color: "red", display: "block" } : { display: "none" }}>{err.typeMsg}</p>
                    </div>

                    <div>
                        <label className="">Utilities Included</label>
                        <div>
                            <input
                                id="input1"
                                name="utilitiesInc"
                                type="radio"
                                value="true"
                                style={checkstyle}
                                onChange={(e) => setUtility(e.target.value)}
                            />
                            <label style={{ fontSize: "10px", fontWeight: "normal" }} className="" for="input1">Yes</label>
                        </div>
                        <div>
                            <input
                                id="input2"
                                name="utilitiesInc"
                                type="radio"
                                value="false"
                                style={checkstyle}
                                onChange={(e) => setUtility(e.target.value)}
                            />
                            <label style={{ fontSize: "10px", fontWeight: "normal" }} className="" for="input2">No</label>
                            <p style={(utilitiesInc === "") ? { color: "red", display: "block" } : { display: "none" }}>{err.utilityMsg}</p>
                        </div>
                    </div>

                    <div>
                        <label className="" for="genderId">Expected tenant's gender:</label>
                        <select id="genderId" className="browser-default" name="gender" onChange={(e) => setGender(e.target.value)}>
                            <option selected="selected">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Any">Any</option>
                        </select>
                    </div>

                    <div>
                        <label className="" for="statusId">Marital Status:</label>
                        <select id="statusId" className="browser-default" name="maritalStatus" onChange={(e) => setStatus(e.target.value)}>
                            <option selected="selected">Select Marital Status</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Married">Married</option>
                            <option value="Any">Any</option>
                        </select>
                    </div>

                    <div>
                        <label className="" for="addressId">Address</label>
                        <input
                            id="addressId"
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <p style={(address === "") ? { color: "red", display: "block" } : { display: "none" }}>{err.addressMsg}</p>
                    </div>

                    <div>
                        <label className="" for="cityId">City</label>
                        <input
                            id="cityId"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <p style={(city === "") ? { color: "red", display: "block" } : { display: "none" }}>{err.cityMsg}</p>
                    </div>

                    <div>
                        <label className="" for="stateId">State</label>
                        <input
                            id="stateId"
                            type="text"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <p style={(state === "") ? { color: "red", display: "block" } : { display: "none" }}>{err.stateMsg}</p>
                    </div>

                    <div>
                        <label className="" for="zipId">Zip</label>
                        <input
                            id="zipId"
                            type="number"
                            placeholder="XXXXXX"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                        <p style={!(zip.valueOf() >= 100000 && zip.valueOf() <= 999999) ? { color: "red", display: "block" } : { display: "none" }}>{err.zipMsg}</p>
                    </div>

                    <div>
                        <label className="" for="rentId">Rent</label>
                        <input
                            id="rentId"
                            type="number"
                            placeholder="Rs."
                            value={rent}
                            onChange={(e) => setRent(e.target.value)}
                        />
                        <p style={(rent === "") ? { color: "red", display: "block" } : { display: "none" }}>{err.rentMsg}</p>
                    </div>

                    <div>
                        <label className="" for="describeId">Description</label>
                        <textarea
                            id="describeId"
                            type="text"
                            placeholder="Describe about the room and facilities"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <p style={(type === "" || type.trim().length() < 100) ? { color: "red", display: "block" } : { display: "none" }}>{err.descriptionMsg}</p>
                    </div>

                    <div>
                        <hr></hr>
                        <label>For Tenants to contact:</label>
                        <hr></hr>
                        <div>
                            <label className="" for="mailId">E-Mail</label>
                            <input
                                id="mailId"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="" for="phoneId">Phone</label>
                            <input
                                id="phoneId"
                                type="phone"
                                placeholder="Phone/Mobile Number"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <hr></hr>
                        <label className="">Add Image</label>
                        <hr></hr>
                    </div>

                    <div>
                        <label className="" for="imageId">Image:</label>
                        <input
                            id="imageId"
                            type="file"
                            name="MainPic"
                            value={mainPic}
                            onChange={(e) => setmainPic(e.target.value)}
                        />
                        <p style={(mainPic === "") ? { color: "red", display: "block" } : { display: "none" }}>{err.mainPicMsg}</p>
                    </div>

                    <div>
                        <input
                            type="submit"
                        />
                    </div>

                </form>
            </div>

        </div>
    )
}

export default AddRoom