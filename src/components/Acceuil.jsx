import { Outlet } from "react-router-dom";

function Acceuil(){
    return ( 
        <div className="home">
            <header>
                <h1>Gestion des Taches</h1>
            </header>
            <Outlet/>
        </div>
    );
}

export default Acceuil;