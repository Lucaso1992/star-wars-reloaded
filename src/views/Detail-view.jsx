import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import Card from '../components/Card/Card';
import useAppContext from '../store/AppContext';
import validateToken from '../services/ValidateToken'


const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { store } = useAppContext();
    const resource = (r) => {
        if (r.resource === "characters") { return store["people"] }
        return store[r.resource]
    }

    const resources = resource(params);
    const targetResources = resources.find(e => e.id === params.id);

    useEffect(() => {
        const Validation = async () => {
            if (!(await validateToken())) {
                alert('tenes que loguearte')
                navigate('/login')
            }
        }
        Validation();
    }, [])

    return (
        <div className='d-flex justify-content-center mt-4'>
            <Card name={targetResources.name} type={targetResources.type} id={targetResources.id}>
                {targetResources.type === 'characters' && (
                    <div>
                        <p><strong>birth year: </strong>{targetResources.birth_year}</p>
                        <p><strong>eye color: </strong>{targetResources.eye_color}</p>
                        <p><strong>gender: </strong>{targetResources.gender}</p>
                        <p><strong>height: </strong>{targetResources.height} cm</p>
                        <p><strong>mass: </strong>{targetResources.mass} kg</p>
                        <p><strong>skin color: </strong>{targetResources.skin_color}</p>
                    </div>)}

                {targetResources.type === 'vehicles' && (
                    <div>
                        <p><strong>eye color: </strong>{targetResources.eye_color}</p>
                        <p><strong>cargo capacity: </strong>{targetResources.cargo_capacity}</p>
                        <p><strong>consumables: </strong>{targetResources.consumables}</p>
                        <p><strong>crew: </strong>{targetResources.crew}</p>
                        <p><strong>length: </strong>{targetResources.length}</p>
                        <p><strong>manufacturer: </strong>{targetResources.manufacturer}</p>
                        <p><strong>max atmosphering speed: </strong>{targetResources.max_atmosphering_speed}</p>
                        <p><strong>model: </strong>{targetResources.model}</p>
                        <p><strong>passengers: </strong>{targetResources.passengers}</p>
                    </div>)}

                {targetResources.type === 'planets' && (
                    <div>
                        <p><strong>climate: </strong>{targetResources.climate}</p>
                        <p><strong>gravity: </strong>{targetResources.gravity}</p>
                        <p><strong>name: </strong>{targetResources.name}</p>
                        <p><strong>orbital period: </strong>{targetResources.orbital_period}</p>
                        <p><strong>population: </strong>{targetResources.population}</p>
                        <p><strong>rotation period: </strong>{targetResources.rotation_period}</p>
                        <p><strong>surface water: </strong>{targetResources.surface_water}</p>
                        <p><strong>terrain: </strong>{targetResources.terrain}</p>
                    </div>
                )}

            </Card>
        </div>
    )
}

export default Detail