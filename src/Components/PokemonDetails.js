import React from 'react';
import { useParams } from 'react-router-dom';

export const PokemonDetails = () => {
    const { id } = useParams(); // Hämta Pokémon-ID från URL:en

    const mockHP = 50;

    return (
    <div>
        <h2>Detaljer för Pokémon #{id}</h2>
        <img src={`${process.env.PUBLIC_URL}/images/showdown/${id}.gif`} alt={`Pokemon ${id}`} />
        <p> mock data</p>
        <p> Health: {mockHP} </p>
        <p> TODO: add more pokemon data from API </p>
    </div>
    );
};