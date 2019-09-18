import React from 'react';
import mango from '../mango.svg'

function Header() {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '60px',
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
      <img style={logoStyle} src={mango} alt="Logo" />
      <div style={titleStyle}>Mango Algorithm Visualizer</div>
    </nav>
  );
}

export default Header;