import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

function Register() {

    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ whatsapp, setWhatsapp ] = useState();
    const [ city, setCity ] = useState();
    const [ uf, setUf ] = useState();

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        };

        console.log(data);


        try{
            const response = await api.post('ngos', data);

            alert(`Your access ID is ${response.data.id}`);

            history.push('/');
        } catch {
            alert('Register error, please try again.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>
                    <p>Please register and start input the current issues your NGO has.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16px" color="#e02041" /> I haven't registered yet
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="NGO name" 
                            value={name} 
                            onChange={e => 
                            setName(e.target.value)} />
                    
                    <input type="email" 
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />

                    <input placeholder="WhatsApp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)} />

                    <div className="input-group">
                        <input placeholder="City"
                                value={city}
                                onChange={e => setCity(e.target.value)} />

                        <input placeholder="UF" 
                                style={{ width: 80 }}
                                value={uf}
                                onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;