export const resolvers = {
  Query: {
    featuredListings: (_: any, __: any, { dataSources }: any) => {
      return dataSources.listingAPI.getFeaturedListings();
    },
  },
};
