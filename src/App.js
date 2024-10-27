import './App.css';
import PokéDex from './images/pokedex.png'

const PokemonImage = ({id}) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/showdown/${id}.gif`} 
      alt={`Pokemon ${id}`}
      />
  );
};

const PokeCard = ({ id, name }) => {
    return (
      <div className="card">
        <PokemonImage id={id}/>
        <div className="card-wrapper">
          <h3> {name} </h3>
        </div>
      </div>
    )
}

function App() {
  return (
    <div className="App">
      <img src={PokéDex} alt="pokedex"></img>
      <div className="container">
      <PokeCard id={2} name={"Test"}/>
      <PokeCard id={10} name={"Test10"}/>
      <PokeCard id={6} name={"Test"}/>
      <PokeCard id={9} name={"Test"}/>
      <PokeCard id={1} name={"Test"}/>
      <PokeCard id={2} name={"Test10"}/>
      <PokeCard id={3} name={"Test123"}/>
      <PokeCard id={100} name={"Test123123123"}/>
      </div>
    </div>
  );
}

export default App;
