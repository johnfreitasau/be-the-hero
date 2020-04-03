import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function NewIncident() 
{
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    const ngoId = localStorage.getItem('ngoId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try{
            await api.post('incidents', data, {
                headers : {
                    Authorization : ngoId, 
                }
            }).then(response => alert(`Incident has been created successfully.`));

            history.push('/profile');

        } catch(err) {
            alert(`Error creating the Incident. Please try again: ${err}`)

        }    
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register New Case</h1>
                    <p>Please register your case:</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="16px" color="#e02041" /> Back to the Home page
                    </Link>
                </section>
                
                <form onSubmit={handleNewIncident} >
                    <input placeholder="Title of the case" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                    />
                    
                    <textarea placeholder="Description"
                            value={description}
                            onChange={e => setDescription(e.target.value)} 
                    />
                    
                    <input placeholder="Value in AUD$"
                            value={value}
                            onChange={e => setValue(e.target.value)} 
                    />

                    <button className="button" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;