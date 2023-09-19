import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_GQL_URL,
    cache: new InMemoryCache(),
  });

  return client;
};
