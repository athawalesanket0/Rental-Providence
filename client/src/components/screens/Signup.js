import React,{useState} from "react"
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css"
import "../../App.css"

const SignUp = () => {
    const history = useHistory()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const postData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           return M.toast({html: "Invalid Email",classes: "#d32f2f red darken-2"})
        }
        fetch("/signup",{       //used proxy to interact with http://localhost:5000
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                password
            })
        })
            .then(res => res.json())
                .then(data => {
                    if(data.error){
                        M.toast({html: data.error , classes:"#d32f2f red darken-2"})
                    }
                    else{
                        M.toast({html: data.message , classes:"#43a047 green darken-1"})
                        history.push("/login")
                    }
                })
                .catch(err => {
                    console.log(err);
                })
    }
    return (
        <div className="myCard">
            <div className="card auth-card input-field">
                <h2 className="brand-logo">ROOMWALA</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #7b1fa2 purple darken-2" onClick={()=>postData()}>
                    SignUp
                </button>
                <h6>
                    <Link className="link" to="/login">Already have an account</Link>
                </h6>
            </div>
        </div>
    )
}

export default SignUp