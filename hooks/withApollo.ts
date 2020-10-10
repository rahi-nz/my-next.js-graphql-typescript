import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri:
        "https://graphql.contentful.com/content/v1/spaces/kk2bw5ojx476/?access_token=7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c",
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
