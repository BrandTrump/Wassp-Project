### Resources
- GraphQL connections - https://www.wpgraphql.com/docs/connections
- WPGraphQL for Advanced Custom Fields - https://github.com/wp-graphql/wp-graphql-acf
- Using Apollo client with Nextjs 13 - https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/
- Adjusting the size of an svg & changing the color using props - https://www.reddit.com/r/reactjs/comments/1562kgx/how_to_adjust_sizecolor_of_svg_image_in_nextjs/

### Learnings
- ACF Repeater PRO feature could possibly be used for news articles.
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
- How to use react spring for some basic animations.
- How to customise Material UI components.

### Challenges 
- Adding advanced custom fields post types to wpgraphql.
