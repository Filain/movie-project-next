export interface IInfo {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: Igenres[]
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Iproduction_companies[]
    production_countries: Iproduction_countries[]
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: spoken_languages[]
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Igenres {
    id: number;
    name: string;
}

export interface Iproduction_companies {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface Iproduction_countries {
    iso_3166_1: string;
    name: string;
}
export interface spoken_languages {
    english_name: string;
    iso_639_1: string;
    name: string;
}



