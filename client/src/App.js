import React,{useEffect,createContext, useReducer, useContext} from "react"
import NavBar from "./components/Navbar"
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from "react-router-dom"
import Home from "./components/screens/Home"
import Profile from "./components/screens/Profile"
import SignIn from "./components/screens/Signin"
import SignUp from "./components/screens/Signup"
import AddRoom from "./components/screens/AddRoom"
//import CreatePost from "./components/screens/createPost"
import {reducer,initialState} from "./reducer/userReducers"
//import EditProfile from "./components/screens/editProfile"
//import EditDetails from "./components/screens/details"


export const UserContext = createContext()

const Routing = () => {
   const history = useHistory()
   
   const {state,dispatch} = useContext(UserContext)
  //  localStorage.clear()
  // dispatch({type:"CLEAR"})
  // history.push("/")
   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
         dispatch({type:"USER",payload:user})
         history.push("/")
      }
      else{
         history.push("/")
      }
   },[])
   return (
         <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="/login">
            <SignIn />
         </Route>
         <Route path="/signup">
            <SignUp />
         </Route>
         <Route path="/profile">
            <Profile />
         </Route>
         <Route path="/add">
            <AddRoom />
         </Route>
         {/* <Route path="/create">
            <CreatePost />
         </Route>
         <Route path="/edit">
            <EditProfile />
         </Route>
         <Route path="/details">
            <EditDetails />
         </Route> */}
         </Switch>
   )
}

function App() {
   const [state,dispatch] = useReducer(reducer,initialState)
  return (
     <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
            <NavBar />
            <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
