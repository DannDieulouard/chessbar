import { Link } from "react-router-dom";
import './css/adminMiniHeader.css';

const AdminMiniHeader = ({ searchQuery, setSearchQuery }) => {
    return (
      <>
          <div className="searchBar">
            <input type="text" placeholder="Rechercher..." value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}/>
            <div className="search"></div>
          </div>
            <ul className="menuAdmin">
          <li><Link to="/chessbar/admin/bars/create">Créer un bar</Link></li>
          <li><Link to="/chessbar/admin/tournaments/create">Créer un tournoi</Link></li>
          <li><Link to="/chessbar/admin/rankings/create">Créer un classement</Link></li>
          <li><Link to="/chessbar/admin/users/create">Créer un utilisateur</Link></li>
        </ul>
        </>
    );
  };
  
  export default AdminMiniHeader;