import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar