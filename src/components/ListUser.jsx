import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/UserSlice";
import User from "./User";

function ListUser() {
    const data=useSelector(state=>state.user.data.users);
    const loading=useSelector(state=>state.user.loading);
    const error=useSelector(state=>state.user.error);
    const [load,setLoad]=useState(true);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
        if (data){
            setLoad(false);
        }
    },[data]);
    return ( 
        <div className="listUsers">
            {
                load?
                <h1>Loading</h1>:
                data.map((item)=><User key={item.id} user= {item}/>)
            }
        </div>
    );
}

export default ListUser;