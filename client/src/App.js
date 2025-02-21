import React, { useEffect, createContext, useReducer, useContext } from "react"
import NavBar from "./components/Navbar"
import "./App.css"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import Home from "./components/screens/Home"
import Profile from "./components/screens/Profile"
import SignIn from "./components/screens/Signin"
import SignUp from "./components/screens/Signup"
import AddRoom from "./components/screens/AddRoom"
import { reducer, initialState } from "./reducer/userReducers"

export const UserContext = createContext()

const Routing = () => {
   const history = useHistory()

   const { state, dispatch } = useContext(UserContext)
   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if (user) {
         dispatch({ type: "USER", payload: user })
         history.push("/")
      }
      else {
         history.push("/")
      }
   }, [])
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
      </Switch>
   )
}

function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   return (
      <UserContext.Provider value={{ state, dispatch }}>
         <BrowserRouter>
            <NavBar />
            <Routing />
         </BrowserRouter>
      </UserContext.Provider>
   )
}

export default App;
