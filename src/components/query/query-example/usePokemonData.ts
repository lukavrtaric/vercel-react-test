import React from 'react';
import { PokemonAppDataValidatorType, resetApiState, useLazyGetPokemonByNameQuery } from '../../../api/pokemon';
import { useAppDispatch } from '../../../redux/store';


export const usePokemonData = () => {
    const [data, setData] = React.useState<PokemonAppDataValidatorType[]>([]);
    const [fetch, meta] = useLazyGetPokemonByNameQuery();
    const { currentData } = meta;
    const dispatch = useAppDispatch();

    const reset = React.useCallback(() => {
        dispatch(resetApiState());
        setData([]);
    }, [dispatch]);

    React.useEffect(() => {
        if (currentData !== undefined) {
            setData((prev) => {
                if (prev.some((pokemon) => pokemon.id === currentData?.id)) {
                    return prev;
                }
                return [...prev, currentData];
            });
        }
    }, [currentData, meta, meta.currentData]);

    return {
        fetch,
        isLoading: meta.isLoading || meta.isFetching,
        isError: meta.isError,
        error: meta.error,
        data,
        reset,
    };
};
