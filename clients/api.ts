import {GraphQLClient} from "graphql-request"

export const graphQLClient  = new GraphQLClient("https://d1i0wh32jc5jkh.cloudfront.net/graphql", {
    headers: () => ({
        Authorization: `Bearer ${window.localStorage.getItem("twitter_clone")}`
    })
});
