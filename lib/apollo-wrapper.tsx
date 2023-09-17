"use client";

import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient(): NextSSRApolloClient<any> {
  const WPGQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_GQL_URL;
  const httpLink = new HttpLink({
    uri: WPGQL_URL,
  });

  return new NextSSRApolloClient<any>({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper;
