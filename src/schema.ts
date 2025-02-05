const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Office {
    id: String
    name: String
    address: String
    latitude: String
    longitude: String
    updatedAt: String
    createdAt: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  type Query {
    offices: [Office]
  }

  type Mutation {
    addOffice(name: String, address: String, latitude: String, longitude: String): Office
  }

  
`;

export default typeDefs;
