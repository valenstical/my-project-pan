import { ApolloClient, InMemoryCache } from "@apollo/client";


export const GrophQlClient = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache()
});