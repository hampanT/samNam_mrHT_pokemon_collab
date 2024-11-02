import { Link } from 'react-router-dom';
import { PokemonImage } from './PokemonImage';

export const PokeCard = ({ id, name }) => {
    return (
    <div className="card">
        <Link to={`/pokemon/${id}`}>
        <PokemonImage id={id} />
        <div className="card-wrapper">
            <h3>{name}</h3>
        </div>
        </Link>
    </div>
);
};