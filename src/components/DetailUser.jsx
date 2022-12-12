import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../redux/UserSlice";
function DetailUser() {
    const {id}=useParams();
    const [loadingPage,setLoadingPage]=useState(true);
    const data=useSelector(state=>state.user.data.users);
    const dispatch=useDispatch();
    const [user,setUser]=useState();
    useEffect(()=>{
        dispatch(getUsers);
        console.log(data)
        if(data){
            let list=data.filter(item=>item.id==id);
            console.log(data)
            setUser(list[0]);
            setLoadingPage(false);
        }
    },[data])
    return ( 
        <div className="detailUser">
            {
                loadingPage? 
                <h1>Loading</h1>:
                <div className="div">
                    <h1>User Details</h1>
                    <div>
                        <img src={user.image} alt="" />
                        <h2>{user.firstName} {user.lastName}</h2>
                        <h3>age {user.age}</h3>
                        <h3>tel {user.phone}</h3>
                        <h3>email {user.email}</h3>
                        <h3>gender : {user.gender}</h3>
                        <h3>weight :{user.weight}</h3>
                        <h3>height : {user.height} cm</h3>
                        <h3>birthday : {user.birthDate} </h3>
                        <h3>age {user.age}</h3>
                        <h3>color des yeux : {user.eyeColor}</h3>
                        <h3>group sanguin :{user.bloodGroup}</h3>

                    </div>
                        
                    
                </div>
            }
        </div>
    );
}
//gridtemp  repaet 41fr
export default DetailUser;