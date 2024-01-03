import express from "express";
import { calculateAverageScore, searchAnime } from "../../controller";

const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const results = await searchAnime(req, res);
    return results
  } catch (error) {
    res.status(500).json({ error: "Error en la búsqueda de anime" });
  }
});

router.get('/calculate-average-score', async (req, res) => {
    try {
      const averag = await calculateAverageScore(req, res);
      return averag
    } catch (error) {
      res.status(500).json({ error: "Error en la búsqueda de anime" });
    }
  });

export default router;
