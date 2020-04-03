import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import { FiLogIn } from 'react-icons/fi';

import './styles.css';

function Logon() {

    const [ id, setId ] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        console.log(e);
        
        try {
        
            const response = await api.post('sessions',{ id });

            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', response.data.name);

            history.push('/profile');

        } catch(err) {
            alert('Logon failed. Please try again.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                
                <form onSubmit={handleLogin}>
                    <h1>Login:</h1>
                    
                    <input placeholder="ID"
                        value={id}
                        onChange={e => setId(e.target.value)} />
                    
                    <button className="button" type="submit">Enter</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Register
                    </Link>

                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon; 