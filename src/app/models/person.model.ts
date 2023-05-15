export class PersonModel {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;

  constructor(source: any) {
    this.name = source.name;
    this.height = source.height;
    this.mass = source.mass;
    this.hair_color = source.hair_color;
    this.skin_color = source.skin_color;
    this.eye_color = source.eye_color;
    this.birth_year = source.birth_year;
    this.gender = source.gender;
    this.homeworld = source.homeworld;
    this.films = source.films;
    this.species = source.species;
    this.vehicles = source.vehicles;
    this.starships = source.starships;
    this.created = source.created;
    this.edited = source.edited;
    this.url = source.url;
  }
}
