import { Button, LoadingIndicator, Title } from '../../index';
import { usePokemonData } from './usePokemonData';

export const QueryExample = () => {
    const { fetch, data, reset, isLoading, isError, error } = usePokemonData();
    return (
        <>
            <Title type='primary'>Query Example</Title>
            {isLoading && <LoadingIndicator />}
            <div className='flex gap-6 py-4 2xl:py-8 justify-between'>
                <div className='flex shrink w-full'>
                    <Button className='text-[#17355D] border-[#17355D] lg:w-[200px]'
                            onClick={() => fetch('bulbasaur')}>
                        Fetch bulbasaur
                    </Button>
                    <Button className='text-[#17355D] border-[#17355D] ml-8 lg:w-[200px]'
                            onClick={() => fetch('squirtle')}>
                        Fetch squirtle
                    </Button>
                    <Button className='text-[#17355D] border-[#17355D] ml-8 lg:w-[200px]'
                            onClick={() => fetch('charmander')}>
                        Fetch charmander
                    </Button>
                </div>
                <Button className='lg:w-[200px]' onClick={() => reset()} mode='danger'>
                    Clear
                </Button>
            </div>
            {isError && (
                <div className='py-4 2xl:py-8 '>
                    There was an error: {JSON.stringify(error)}
                </div>
            )}
            <div className='w-full flex gap-4 h-[25vh]'>
                {data &&
                    data.map((pokemon) => (
                        <div
                            key={pokemon.id}
                            className='max-w-xs w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
                        >
                            <img
                                className='max-w-full w-auto h-[14vh] rounded-t-lg m-auto'
                                src={
                                    pokemon.sprite ?? '/assets/placeholder.png'
                                }
                                alt={`${pokemon.name} sprite`}
                            />
                            <div className='text-center'>
                                <h5 className='mb-2 2xl:text-2xl font-bold tracking-tight text-[#17355D]'>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </h5>
                                <div className='flex pag-2 justify-center'>
                                    {pokemon.types.map((type, idx) => (
                                        <span
                                            key={idx}
                                            className='text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 uppercase last:mr-0 mr-1'
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};
