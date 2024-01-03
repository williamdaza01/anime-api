export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg:{
        large_image_url: "string"
    }
  };
  title: string;
  episodes: number;
  score: number;
  recomendation: string;
}
