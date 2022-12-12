import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodos } from "../redux/TodoSlice";
import {AiFillCheckCircle}from 'react-icons/ai';
import {MdPending} from 'react-icons/md'

function ListTodo() {
    const {id}=useParams();
    const [loadingPage,setLoadingPage]=useState(true);
    const data=useSelector(state=>state.todo.data.todos);
    const dispatch=useDispatch();
    const [listTache,setTaches]=useState([]);
    useEffect(()=>{
        dispatch(getTodos());
        if(data){
            let list=data.filter(item=>{
                return item.userId==Number(id);
                //console.log(item.userId)
            });
            setTaches(list);
            //console.log(listTache);
            setLoadingPage(false);
        }
    },[data])
    return ( 
        <div className="listTodo">
            {
                loadingPage? 
                <h1>Loading</h1>:
                <div className="div">
                    {
                        listTache.length>0?
                        <div>
                            <h1>User Taches</h1>
                        <table border='1px'>
                        <tbody>
                            <tr>
                            <th>Tache</th>
                            <th>state</th>
                        </tr>
                            {
                                listTache.map(item=>{
                                    return <tr key={item.id}>
                                
                                    <td>{item.todo}</td>
                                    <td>{item.completed?<AiFillCheckCircle/>:<MdPending/>}</td>
                                </tr>})
                            }
                        </tbody>
                    </table>
                        </div>
                        :
                    <h1>Aucune tache</h1>
                    }
                    
                </div>
            }
        </div>
    );
}

export default ListTodo;