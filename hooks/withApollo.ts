import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
