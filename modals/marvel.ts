export enum ECategory {
  SHOW = 'show',
  MOVIE = 'movie',
  TV_SHOW = 'tvShow',
}

export interface IMarvel {
  type: string;
  id: number;
  title: string;
  release_date: string;
  box_office: string;
  duration: number;
  overview: string;
  cover_url: string;
  trailer_url: string;
  directed_by: string;
  phase: number;
  saga: string;
  chronology: number;
  post_credit_scenes: number;
  imdb_id: string;
}
