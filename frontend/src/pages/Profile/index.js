import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api'


function Profile() {

    const ngoName = localStorage.getItem('ngoName');
    const ngoId = localStorage.getItem('ngoId');

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                 Authorization : ngoId 
            }
        }).then(response => setIncidents(response.data));
    }, [ngoId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization : ngoId,
                }
        })

        setIncidents(incidents.filter(incident => incident.id !== id));

        } catch(err) {
            alert('error trying to delete incident. Please try again:' + err);
        }
    } 

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome, {ngoName}</span>
                <Link className="button" to="/incidents/new">Register a New Case</Link>
                <button onClick={handleLogout} >
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Current cases</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASE 1</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIPTION:</strong>
                        <p>{incident.description}</p>

                        <strong>VALUE:</strong>
                        <p>{Intl.NumberFormat('eng-AU', { style: 'currency', currency: 'AUD'}).format(incident.value)}</p>

                        <button type="button">
                            <FiTrash2 size={ 20 } color="#a8a8b3" onClick={() => handleDeleteIncident(incident.id)}/>
                        </button>
                    </li>   
                ))}                             
            </ul>

            
        </div>
    );
}

export default Profile;