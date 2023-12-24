import {GraphQLClient} from "graphql-request"

export const graphQLClient  = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL as string, {
    headers: () => ({
        Authorization: `Bearer ${window.localStorage.getItem("twitter_clone")}`
    })
});
