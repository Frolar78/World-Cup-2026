// api/odds.js — Proxy Vercel pour The Odds API
// Déployé automatiquement sur https://ton-projet.vercel.app/api/odds

export default async function handler(req, res) {
  // CORS : autorise GitHub Pages et localhost
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const API_KEY = process.env.ODDS_API_KEY; // clé stockée dans Vercel (jamais exposée)
  const SPORT   = 'soccer_fifa_world_cup';
  const REGIONS = 'eu';
  const MARKETS = 'h2h';      // 1X2
  const ODDS_FORMAT = 'decimal';

  try {
    const url = `https://api.the-odds-api.com/v4/sports/${SPORT}/odds/?apiKey=${API_KEY}&regions=${REGIONS}&markets=${MARKETS}&oddsFormat=${ODDS_FORMAT}`;
    const response = await fetch(url);

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();

    // On renvoie uniquement ce dont on a besoin (équipe1, équipe2, cotes)
    const simplified = data.map(match => ({
      id:         match.id,
      home:       match.home_team,
      away:       match.away_team,
      commence:   match.commence_time,
      bookmakers: match.bookmakers.slice(0, 3).map(bk => ({
        name:    bk.title,
        markets: bk.markets.map(mkt => ({
          key:      mkt.key,
          outcomes: mkt.outcomes.map(o => ({ name: o.name, price: o.price }))
        }))
      }))
    }));

    // Cache 10 minutes côté Vercel
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    return res.status(200).json(simplified);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
