import { signOut } from "@firebase/auth";
import { auth } from './config/firebase'; 
import "./App.css";
import Login from "./components/Login";
// import FetchDB from "./components/FetchDB";

function App() {

  const logout = async () => {
    try {
      await signOut(auth);
      window.alert("You have been successfully logged out")
      // Handle successful login (e.g., redirect to dashboard)
    } catch (err) {
      console.error('Error during login:', err);
      // Handle login error (e.g., display an error message)
    }
  };
  return (
    <>
      <div className="heading">
        <div className="heading-flex"><h1>Welcome to React Firebase App</h1></div>
        <div className="heading-flex btn">
        <button onClick={logout}>Logout</button>
        </div>
      </div>
      <Login/>
      {/* <FetchDB/> */}
    </>
  );
}

export default App;
