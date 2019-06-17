import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
        <div className="Header">
            <h1 className="pt-2"><FontAwesomeIcon icon="futbol"/> Organizador de Equipes <FontAwesomeIcon icon="futbol"/></h1>
            <h4 className="pb-2">Organize a sua equipe de pelada com seus amigos!</h4>
        </div>
    );
}

export default Header;
