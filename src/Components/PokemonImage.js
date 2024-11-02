import React from "react";

export const PokemonImage = ({id}) => {
    return (
    <img
        src={`${process.env.PUBLIC_URL}/images/showdown/${id}.gif`} 
        alt={`Pokemon ${id}`}
        />
    );
};