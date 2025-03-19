const keyTranslations = {
  birth_year: 'ano_nacimiento',
  eye_color: 'color_ojos',
  films: 'peliculas',
  gender: 'genero',
  hair_color: 'color_cabello',
  height: 'altura',
  homeworld: 'mundo_natal',
  mass: 'masa',
  name: 'nombre',
  skin_color: 'color_piel',
  species: 'especies',
  starships: 'naves_estelares',
  vehicles: 'vehiculos',
  characters: 'personajes',
  director: 'director',
  episode_id: 'id_episodio',
  opening_crawl: 'introduccion',
  planets: 'planetas',
  producer: 'productor',
  release_date: 'fecha_lanzamiento',
  title: 'titulo',
  climate: 'clima',
  diameter: 'diametro',
  gravity: 'gravedad',
  orbital_period: 'periodo_orbital',
  population: 'poblacion',
  residents: 'residentes',
  rotation_period: 'periodo_rotacion',
  surface_water: 'agua_superficial',
  terrain: 'terreno',
};

export const translateKeys = apiResponse => {
  return {
    ...apiResponse,
    results: apiResponse.results.map(obj =>
      Object.keys(obj).reduce((acc, key) => {
        const newKey = keyTranslations[key] || key;
        acc[newKey] = obj[key];
        return acc;
      }, {}),
    ),
  };
};
