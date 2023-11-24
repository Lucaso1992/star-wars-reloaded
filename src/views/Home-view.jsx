import Section from "../components/Card/Section.jsx";
import useAppContext from "../store/AppContext.js";
import Card from "../components/Card/Card.jsx";

import RingLoader from "react-spinners/RingLoader";

const Home = () => {
    const { store } = useAppContext();
    const { people, vehicles, planets } = store;
    return ( people.length === 0 || vehicles.length === 0 || planets.length === 0 ? (
              <div className='loading-Div'>
            <RingLoader color={"whitesmoke"} size={200} />
        </div> )
            :(
        <>
            <Section resource={people} title='Characters' id="start">
                {people.map(person => <Card name={person.name} type={person.type} id={person.id} key={person.key}>
                    <p><strong>mass: </strong>{person.mass} kg</p>
                    <p><strong>height: </strong>{person.height} cm</p>
                    <p><strong>eye color: </strong>{person.eye_color}</p>

                </Card>)}
            </Section>  

            <Section resource={vehicles} title='Vehicles'>
                {vehicles.map(vehicle => <Card name={vehicle.name} type={vehicle.type} id={vehicle.id} key={vehicle.key}>
                    <p><strong>crew: </strong>{vehicle.crew}</p>
                    <p><strong>length: </strong>{vehicle.length} m</p>
                    <p><strong>cargo capacity: </strong>{vehicle.cargo_capacity}</p>
                </Card>)}
            </Section>

            <Section resource={planets} title='Planets'>
                {planets.map(planet => <Card name={planet.name} type={planet.type} id={planet.id} key={planet.key}>
                    <p><strong>climate: </strong>{planet.climate}</p>
                    <p><strong>diameter: </strong>{planet.diameter} Mm</p>
                    <p><strong>terrain: </strong>{planet.terrain}</p>
                </Card>)}
            </Section>
        </>)
    )
}

export default Home