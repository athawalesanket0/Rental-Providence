import React,{useContext,useEffect, useState} from "react"
import { Link,useHistory } from "react-router-dom"
import {UserContext} from "../../App"
import { useForm } from 'react-hook-form'
import M from "materialize-css"
import "../../App.css"

const Profile = () => {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const {handleSubmit} = useForm()

    const [age,setAge] = useState("")
    const [city,setCity] = useState("")
    const [profession,setProfession] = useState("")
    const [gender,setGender] = useState("")
    const [maritalStatus,setStatus] = useState("")
    const [about,setAbout] = useState("")
    const [profilePic,setProfilePic] = useState("")
    var postData = {}

    useEffect(() => {
      fetch("/myprofile",{
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
      })
      .then(res => res.json())
      .then(result => {
            //console.log(result)
            setData(result)
            history.push("/profile")
      })
      .catch(err => {
          console.log(err)
      })
      return  () => {}
  },[])

  const submit = (e) => {
    if(age !== "") postData = {...postData, "age": age}
    if(city !== "") postData = {...postData, "city": city}
    if(profession !== "") postData = {...postData, "profession": profession}
    if(gender !== "") postData = {...postData, "gender": gender}
    if(maritalStatus !== "") postData = {...postData, "maritalStatus": maritalStatus}
    if(about !== "") postData = {...postData, "about": about}
    //if(about !== "") postData = {...postData, "about": about}

    // Object.entries(postData).forEach(([key,value]) => {
    //   console.log(key , value);
    // })

    fetch("/updateMe",{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify(postData)
    })
      .then(result => {
        //console.log(typeof(result.status));
        if(result.status===500){
          M.toast({html: "Something went wrong", classes:"#d32f2f red darken-2"})
        }
        else{
          M.toast({html: "Updated successfully" , classes:"#43a047 green darken-1"})
          history.push("/profile")
        }
        
      })
      .catch(err => {
        console.log("Error1:",err)
      })

  }

  return (
    <div style={{maxWidth:"1200px" , margin:"0px auto"}}>
    {/* picture on left */}
      <div>
        <img
          style={{width:"160px",height:"160px",borderRadius:"80px"}}
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651__480.png"
        />
      </div>

      <form onSubmit={handleSubmit(submit)}>
      <div>
        <input
          id="profileId"
          type="file"
          name="profilepic"
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </div>

      {/* details on right */}
      <div>
        <div>
          <label className="" for="nameId">Name</label>
          <input
            id="nameId"
            placeholder={data.name}
            name="name"
            readOnly
          />
        </div>

        <div>
          <label className="" for="emailId">Email</label>
          <input
            id="emailId"
            placeholder={data.email}
            name="email"
            readOnly
          />
        </div>

        <div>
          <label className="" for="ageId">Age</label>
          <input
            id="ageId"
            type="number"
            placeholder={data.age}
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label className="" for="cityId">City</label>
          <input
            id="cityId"
            type="text"
            placeholder={data.city}
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label className="" for="professionId">Profession</label>
          <input
            id="professionId"
            type="text"
            placeholder={data.profession}
            name="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>

        <div>
          <label className="" for="genderId">Gender</label>
          <select className="browser-default" id="genderId" name="gender" onChange={(e) => setGender(e.target.value)}>
              <option selected="selected">{(data.gender==="") ? "Select your gender":data.gender}</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label for="statusId">Marital Status</label>
          <select className="browser-default" id="statusId" name="status" onChange={(e) => setStatus(e.target.value)}>
              <option selected="">{(data.maritalStatus==="") ? "Select your Marital Status":data.maritalStatus}</option>
              <option value="bachelor">Bachelor</option>
              <option value="married">Married</option>
          </select>
        </div>

        <div>
          <label className="" for="phoneId">Phone Number</label>
          <input
              id="phoneId"
              type="number"
              placeholder={data.phone}
              name="phone"
              readOnly
          />
        </div>

        <div>
          <label className="" for="aboutId">About</label>
          <input
            id="aboutId"
            type="text"
            name="about"
            placeholder={data.about}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <div>
        <input
          type="submit"
        />
        </div>

      </div>
      </form>
    </div>
  )
}

export default Profile
