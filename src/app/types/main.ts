export interface IMovieDetails {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    title: string;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IDefaultAPIResponse {
    page: number;
    results: IMovieDetails[];
    total_pages: number;
    total_results: number;
}

export interface IMovieDetailsResponse {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: TGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: TProductionCompanies[];
    production_countries: TProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: TSpokenLangs[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type TGenre = {
    id: number;
    name: string;
}

export type TProductionCompanies = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export type TProductionCountries = {
    iso_3166_1: string;
    name: string;
}

export type TSpokenLangs = {
    english_name: string;
    iso_639_1: string;
    name: string;
}