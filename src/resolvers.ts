import { IResolvers } from "@graphql-tools/utils";

// Interfaz para el tipo Office
interface Office {
  id: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
}

// Simulamos una "base de datos" en memoria
let offices: Office[] = [];

// Resolvers
const resolvers: IResolvers = {
  Query: {
    offices: (): Office[] => offices, // Devuelve todas las oficinas
  },
  Mutation: {
    addOffice: (
      _: unknown,
      {
        name,
        address,
        latitude,
        longitude,
      }: { name: string; address: string; latitude: string; longitude: string }
    ): Office => {
      const newOffice: Office = {
        id: String(offices.length + 1), // Genera un ID simple (puedes usar UUID si prefieres)
        name,
        address,
        latitude,
        longitude,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      offices.push(newOffice); // Agrega la nueva oficina al array
      return newOffice; // Devuelve la oficina creada
    },
  },
};

export default resolvers;
