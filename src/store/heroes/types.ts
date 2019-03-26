// This file holds our state type, as well as any other types related to this Redux store.

/**
 * Response object for GET /heroes
 * https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
 */
export interface Hero extends ApiResponse {
    id: number
    name: string
    localized_name: string
    primary_attr: string
    attack_type: string
    roles: string[]
    img: string
    icon: string
    legs: number
}
/**
 * This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
 * the expected return type of your API response.
 */
export type ApiResponse = Record<string, any>

export const HeroesActionTypes = {
    FETCH_REQUEST: 'FETCH_REQUEST',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR',
    SELECT_HERO: 'SELECT_HERO',
    SELECTED: 'SELECTED'
}

/**
 * Declare state types with `readonly` modifier to get compile time immutability.
 * https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
 */
export interface HeroesState {
    readonly loading: boolean
    readonly data: Hero[]
    readonly errors?: string
}