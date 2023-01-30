import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import z from 'zod';

const pokemonDataValidator = z.object({
    id: z.number(),
    name: z.string(),
    weight: z.number(),
    height: z.number(),
    order: z.number(),
    past_types: z.array(z.any()),
    types: z.array(
        z.object({
            slot: z.number(),
            type: z.object({
                name: z.string(),
                url: z.string(),
            }),
        }),
    ),
    base_experience: z.number(),
    abilities: z.array(
        z.object({
            slot: z.number(),
            is_hidden: z.boolean(),
            ability: z.object({
                name: z.string(),
                url: z.string(),
            }),
        }),
    ),
    forms: z.array(
        z.object({
            name: z.string(),
            url: z.string(),
        }),
    ),
    held_items: z.array(z.any()),
    is_default: z.boolean(),
    game_indices: z.array(
        z.object({
            game_index: z.number(),
            version: z.object({
                name: z.string(),
                url: z.string(),
            }),
        }),
    ),
    location_area_encounters: z.string(),
    moves: z.array(
        z.object({
            move: z.object({
                name: z.string(),
                url: z.string(),
            }),
            version_group_details: z.array(
                z.object({
                    level_learned_at: z.number(),
                    move_learn_method: z.object({
                        name: z.string(),
                        url: z.string(),
                    }),
                    version_group: z.object({
                        name: z.string(),
                        url: z.string(),
                    }),
                }),
            ),
        }),
    ),
    species: z.object({
        name: z.string(),
        url: z.string(),
    }),
    sprites: z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
        other: z.any(),
        versions: z.any(),
    }),
    stats: z.array(
        z.object({
            base_stat: z.number(),
            effort: z.number(),
            stat: z.object({
                name: z.string(),
                url: z.string(),
            }),
        }),
    ),
});

type PokemonDataValidatorType = z.infer<typeof pokemonDataValidator>;

const pokemonAppDataValidator = z.object({
    id: z.number(),
    name: z.string(),
    sprite: z.string().nullable(),
    types: z.array(z.string()),
});

export type PokemonAppDataValidatorType = z.infer<
    typeof pokemonAppDataValidator
>;

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/pokemon/',
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<PokemonAppDataValidatorType, string>({
            query: (name) => name,
            transformResponse: (response: PokemonDataValidatorType) => {
                const validData = pokemonDataValidator.parse(response);
                const parsedResponse: PokemonAppDataValidatorType = {
                    id: validData.id,
                    name: validData.name,
                    sprite: validData.sprites.front_default,
                    types: validData.types.map((t) => t.type.name),
                };
                return parsedResponse;
            },
        }),
    }),
});

export const {
    useLazyGetPokemonByNameQuery,
    util: { resetApiState },
} = pokemonApi;
