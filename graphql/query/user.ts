import { graphql } from "../../gql";

export const verifyUserGoogleToken = graphql(`
    #graphql
    query VerifyGoogleToken($token: String!) {
        verifyGoogleToken(token: $token)
    }
`);

export const getCurrentUserQuery = graphql(`
    query GetCurrentUser {
        getCurrentUser {
            id
            email
            firstName
            lastName
            profileImageURL
            recommendedUsers {
                id
                firstName
                lastName
                profileImageURL
            }
            tweets{
                id
                content
                author {
                    lastName
                    firstName
                    profileImageURL
                }
            }
        }
    }
`)

export const getUserById = graphql(`
#graphql
    query GetUserById($id: ID!) {
        getUserById(id: $id) {
            id
            email
            firstName
            lastName
            profileImageURL
            followers{
                id
                firstName
                lastName
                profileImageURL
            }
            following{
                id
                firstName
                lastName
                profileImageURL
            }
            tweets{
                id
                content
                author {
                    lastName
                    firstName
                    profileImageURL
                }
            }
        }
    }
`)