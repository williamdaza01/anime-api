import axios from 'axios';
import { Request, Response } from 'express';
import { Anime } from '../../models';

interface Season {
  score: number;
}

const makeRecomendation = (score:number) => {
    if(score >= 1 && score <= 4 ) return "I do not recommend it."
    else if(score >= 5 && score <= 7 ) return "You may have fun."
    else if (score > 7) return "Great, this is one of the best anime."
    else return "No scored yet."
}

export const searchAnime = async (req: Request, res: Response): Promise<void> => {
  const query = req.query.q as string;

  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime', {
      params: {
        q: query,
        page: 1,
      },
    });

    const data = response.data.data;

    if (data || data.length > 0) {
      const searchResults: Anime[] = data.map((result: Anime) => ({
        mal_id: result.mal_id,
        title: result.title,
        url: result.url,
        images: {
            jpg:{
                large_image_url: result.images.jpg.large_image_url
            }
          },
        episodes: result.episodes,
        score: result.score,
        recomendation: makeRecomendation(result.score)
      }));

      res.json(searchResults);
    } else {
      res.status(404).json({ error: 'No se encontraron resultados de búsqueda' });
    }
  } catch (error: any) {
    console.error(`Error en la búsqueda de anime: ${error.message}`);
    res.status(500).json({ error: 'Error en la búsqueda de anime' });
  }
};

export const calculateAverageScore = async (req: Request, res: Response): Promise<void> => {
    const year = req.query.year
    const season = req.query.season
    const plt = req.query.plt
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/seasons/${year}/${season}`, { params: {
        filter: plt,
        page: 1
    } });

    const seasons: Season[] = response.data.data || [];

    if (seasons.length === 0) {
      res.status(404).json({ error: 'No se encontraron temporadas de anime' });
      return;
    }

    const validSeasons = seasons.filter(season => season.score !== null);

    if (validSeasons.length === 0) {
        res.status(404).json({ error: 'No se encontraron temporadas de anime que esten calificados aun' });
        return;
      }

    const totalScore = validSeasons.reduce((acc, season) => acc + season.score!, 0);
    const averageScore = (totalScore / validSeasons.length).toFixed(2);

    res.json({ averageScore });
  } catch (error: any) {
    console.error(`Error al calcular el promedio de puntuación: ${error.message}`);
    res.status(500).json({ error: 'Error al calcular el promedio de puntuación' });
  }
};
