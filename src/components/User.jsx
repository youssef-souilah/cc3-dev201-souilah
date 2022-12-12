import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserid } from "../redux/UserSlice";

function User(props) {
    const dispatch=useDispatch();
    return ( 
        <div className="user">
            <img src={props.user.image} alt="" />
            <h2 className="name">{props.user.firstName} {props.user.lastName}</h2>
            <button className="details"><Link to={`userDetails/${props.user.id}`}>User Details</Link></button>
            <button className="listTaches"><Link to={`userTaches/${props.user.id}`}>User Taches</Link></button>
        </div>
    );
}
export default User;