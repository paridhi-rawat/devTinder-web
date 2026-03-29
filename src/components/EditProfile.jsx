import { useState } from "react"
import { useDispatch } from "react-redux";
import {addUser} from '../utils/userSlice';
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const EditProfile = ({user}) => {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photo, setPhoto] = useState(user.photo)

    const handleEdit = async() =>{
         const res = await axios.patch(BASE_URL + "/profile/edit",{firstName,lastName,photo}, {withCredentials : true});
        console.log(res?.data)
        dispatch(addUser(res?.data))
    }
  return  (
    <div className="flex justify-center my-10">
         <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
    <legend className="fieldset-legend">Profile</legend>

    <label className="label">FirstName</label>
    <input  className="input" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}/>

    <label className="label">LastName</label>
    <input  className="input"  value={lastName} onChange={(e) => { setLastName(e.target.value) }}/>

     <label className="label">Photo</label>
    <input  className="input" value={photo} onChange={(e) => { setPhoto(e.target.value) }}/>

    <button className="btn btn-neutral mt-4" onClick={handleEdit}>Edit Profile</button>
    </fieldset>
    </div>
   
  )
}

export default EditProfile