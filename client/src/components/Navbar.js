import React,{useContext} from "react"
import {Link,useHistory} from "react-router-dom"
import {UserContext} from "../App"

const NavBar = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
      if(state){
        return (
          [
            <li key={3}><Link to="/">Home</Link></li>,
            <li key={4}><Link to="/profile">Profile</Link></li>,
            <li key={5}><Link to="/add">Add Room</Link></li>,
            <li key={6}>
            <button className="btn #7e57c2 deep-purple lighten-1" onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push("/")
            }}>
                    LogOut
                </button>
            </li>
          ]
        )
      }
      else{
        return (
          [
            <li key={1}><Link to="/login">SignIn</Link></li>,
            <li key={2}><Link to="/signup">SignUp</Link></li>
          ]
        )
      }
    }
    return (
        <nav>
        <div className="nav-wrapper #ffa000 amber darken-2">
          <Link to="/" className="brand-logo left">ROOMWALA</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    )
}

export default NavBar