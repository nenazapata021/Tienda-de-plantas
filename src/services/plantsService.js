import plants from "../data/plants.json";

// Por ahora lee del JSON local. Cuando conectes Supabase/una API real,
// solo reemplaza el cuerpo de esta función sin tocar los componentes
// que la consumen.
export async function getPlants() {
  return Promise.resolve(plants);
}

export async function getPlantById(id) {
  const plant = plants.find((p) => p.id === id);
  return Promise.resolve(plant ?? null);
}
