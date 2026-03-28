import { useState } from "react"
import axios from "axios";

const Login = () => {

    const [emailId, setEmailId] = useState("naira@gmail.com");
    const [password, setPassword] = useState("Naira@123");

    const handleLogin = async () =>{
        try{
        const res = await axios.post("http://localhost:3000/login", {
            email: emailId,
            password,
        },{withCredentials:true})
        }catch(err){
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

                <button className="btn btn-neutral mt-4" onClick={handleLogin} >Login</button>
            </fieldset>
        </div>

    )
}

export default Login