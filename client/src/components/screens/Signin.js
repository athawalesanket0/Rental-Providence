import React,{useState,useContext} from "react"
import {Link,useHistory} from "react-router-dom"
import {UserContext} from "../../App"
import M from "materialize-css"
import "../../App.css"

const SignIn = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [user_id,setUserId] = useState("")
    const [password,setPassword] = useState("")
    const postData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user_id) & !/^(\+91-|\+91|0)?\d{10}$/.test(user_id)){
           return M.toast({html: "Invalid UserId",classes: "#d32f2f red darken-2"})
        }
        fetch("/login",{       //used proxy to interact with http://localhost:5000
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user_id,
                password
            })
        })
            .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.error){
                        M.toast({html: data.error , classes:"#d32f2f red darken-2"})
                    }
                    else{
                        localStorage.setItem("jwt",data.token)
                        localStorage.setItem("user",JSON.stringify(data.user))
                        dispatch({type:"USER",payload:data.user})
                        M.toast({html: "signed in successfully" , classes:"#43a047 green darken-1"})
                        history.push("/profile")
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
                    placeholder="Email/Phone"
                    value={user_id}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #7b1fa2 purple darken-2" onClick={()=>postData()}>
                    Login
                </button>
                <h6>
                    <Link className="link" to="/signup">Don't have an account</Link>
                </h6>
            </div>
        </div>
    )
}

export default SignIn