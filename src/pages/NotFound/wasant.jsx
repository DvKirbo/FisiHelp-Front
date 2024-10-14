// src/pages/WorkingPage.js
import React from 'react';
import Gato from './gato.gif';

const Wasant = () => {
    return (
        <React.Fragment>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Estamos trabajando en esta sección</h1>
                {/* Asegúrate de usar <img> para mostrar el GIF */}
                <img src={Gato} alt="Gato trabajando" />
            </div>
        </React.Fragment>
    );
};

export default Wasant;
