import { graphql } from "@/gql";

export const getAllTweetsQuery = graphql(`
#graphql
    query GetAllTweets {
        getAllTweets{
            id
            content
            imageURL
            author{
                id
                firstName
                lastName
                profileImageURL
            }
        }
    }
`);

export const getSignedURLForTweetQuery = graphql(`
query GetSignedURL($imageType: String!) {
  getSignedURLForTweet(imageType: $imageType)
}

`)