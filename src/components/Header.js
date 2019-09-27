import React from 'react';
import { Link } from "react-router-dom";
import mango from '../mango.svg'
import Controls from '../components/Shared/Controls'

function Header() {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100x',
    padding: '10px',
    boxShadow: '0 4px 2px -2px gray',
    marginBottom: '10px'
  }
  const logoStyle = {
    height: '100%',
    marginRight: '20px'
  }
  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  }
  
  return (
    <nav style={navStyle}>
      <a href="/">
        <img style={logoStyle} src={mango} alt="Logo" />
        
      </a>
      <div style={titleStyle}>Mango</div>
      <Link to="/Sort">Sort Algo</Link>
      <Link to="/Graph">Graph Algo</Link>         
      <Controls />
    </nav>
  );
}
export default Header;