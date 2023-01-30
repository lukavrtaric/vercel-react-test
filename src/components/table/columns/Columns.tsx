import { FC } from 'react';
import { pokemonGenders, pokemonTypes } from '../../../pages/table-page/constants';


export const PokemonTypes: FC<{ selectedType: number }> = ({ selectedType }) => {
    const color = pokemonTypes.find((type) => type.value === selectedType)?.color;
    return <div className={`${color} rounded-xl text-white w-[100px] text-center`}>
        {pokemonTypes.find((type) => type.value === selectedType)?.label}
    </div>;
};

export const PokemonGender: FC<{ selectedGender: number }> = ({ selectedGender }) => {
    return <div>
        {pokemonGenders.find((type) => type.value === selectedGender)?.label}
    </div>;
};
