import { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

    const [emailId, setEmailId] = useState("naira@gmail.com");
    const [password, setPassword] = useState("Naira@123");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () =>{
        try{
        await axios.post(
            BASE_URL + "/login",
            { email: emailId, password },
            { withCredentials: true }
        )
        const { data } = await axios.get("http://localhost:3000/profile/view", {
            withCredentials: true,
        })
        dispatch(addUser(data))
        return navigate("/")
        }catch(err){
            setErrorMessage(err?.response?.data || "something went wrong")
            console.log("err",err)
        }
       
    }
    return (
        <div className="flex justify-center my-10">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" value={emailId} placeholder="Email" onChange={(e) => { setEmailId(e.target.value) }} />

                <label className="label">Password</label>
                <input type="password" className="input" value={password} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                <p className="text-red-500">{errorMessage}</p>
                <button className="btn btn-neutral mt-4" onClick={handleLogin} >Login</button>
            </fieldset>
        </div>

    )
}

export default Login