# The challenge

Create a WordPress backend that will function as a headless CMS. And build a home page using Next.js with TypeScript while accurately following the provided design file.

### Solution

- Preview Site URL: https://interview-project-delta.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Next.js 13
- Material UI
- Apollo
- React Spring

## Learnings

- How to create a Wordpress instance, install plugins, add new posts, create post types/custom fields using the advance custom fields plugin, and show the posts inside of the wpgraohql plugin.
- How to setup the Apollo client using Nextjs 13 and the app router.
- How to import a local font.
- svh CSS unit
- box-shadow CSS unit to get a blurred image border

```css
box-shadow: 0 2em 2em 0 rgb(4 29 47) inset;
```

- How to adjust the size of an svg & change the color using props
- Found a better method of getting a blurred image border effect using the before and after pseudo selectors

```css
.exploreBackground::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 15em;
  background: linear-gradient(to bottom, rgb(4 29 47), transparent);
}

.exploreBackground::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 15em;
  background: linear-gradient(to top, rgb(4 29 47), transparent);
}
```

- How to setup apollo client for use inside of server components.
- How to use React Spring for some basic animations.
- How to customise Material UI components.
- Changed the fetch options to disable caching in order to see my changes made in wordpress.

```ts
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_WORDPRESS_GQL_URL,
      fetchOptions: { cache: "no-store" },
    }),
  });
});
```

- Found beta version of wpqraphql-acf that allows the option to show post types inside of graphql.
- How to use React Spring with an on click event.

```ts
const handleClick = (id: number) => {
  setSelected(id);
  api.start({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 400 },
  });
};
```

## Resources

- GraphQL connections - https://www.wpgraphql.com/docs/connections
- WPGraphQL for Advanced Custom Fields - https://github.com/wp-graphql/wp-graphql-acf
- Using Apollo client with Nextjs 13 - https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/
- Adjusting the size of an svg & changing the color using props - https://www.reddit.com/r/reactjs/comments/1562kgx/how_to_adjust_sizecolor_of_svg_image_in_nextjs/
- Latest beta version of wpgraphql-acf plugin download - https://github.com/wp-graphql/wpgraphql-acf/releases/tag/v2.0.0-beta.4.0.0
