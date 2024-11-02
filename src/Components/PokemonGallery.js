import React, { useState, useEffect } from 'react';
import { PokeCard } from './PokeCard';

export const PokemonGallery = () => {
    //state variabel visiblePokemons där vi vill ladda 20 pokemonbiler initialt
    const [visiblePokemons, setVisiblePokemons] = useState(20);


    //metod för att ladda in fler pokémonbilder
    //vi använder oss av setVisiblePokemons metoden för att uppdatera visiblePokemons variablen
    const loadMorePokemons = () => {
        setVisiblePokemons(prev => prev + 20);
    };

    //useEffect som triggas vid scroll, vid scroll = kalla på loadMorePokemons :)
    useEffect(() => {
        window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMorePokemons();
        }
    });
        return () => window.removeEventListener('scroll', loadMorePokemons);
    }, []);

    return (
        <div className="pokemon-gallery">
        {[...Array(visiblePokemons).keys()].map(num => (
            <PokeCard key={num} id={num + 1} name={`Pokemon ${num + 1}`} />
        ))}
        </div>
    );
};