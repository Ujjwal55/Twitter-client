/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n#graphql\n        mutation CreateTweet($payload: CreateTweetData!) {\n            createTweet(payload: $payload){\n                id\n            }\n        }\n    \n": types.CreateTweetDocument,
    "#graphql\nmutation followUser($to: ID!) {\n    followUser(to: $to)\n}\n\n": types.FollowUserDocument,
    "#graphql\nmutation UnfollowUser($to: ID!) {\n    unfollowUser(to: $to)\n}\n\n": types.UnfollowUserDocument,
    "\n#graphql\n    query GetAllTweets {\n        getAllTweets{\n            id\n            content\n            imageURL\n            author{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n        }\n    }\n": types.GetAllTweetsDocument,
    "\nquery GetSignedURL($imageType: String!) {\n  getSignedURLForTweet(imageType: $imageType)\n}\n\n": types.GetSignedUrlDocument,
    "\n    #graphql\n    query VerifyGoogleToken($token: String!) {\n        verifyGoogleToken(token: $token)\n    }\n": types.VerifyGoogleTokenDocument,
    "\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            email\n            firstName\n            lastName\n            profileImageURL\n            recommendedUsers {\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            tweets{\n                id\n                content\n                author {\n                    lastName\n                    firstName\n                    profileImageURL\n                }\n            }\n        }\n    }\n": types.GetCurrentUserDocument,
    "\n#graphql\n    query GetUserById($id: ID!) {\n        getUserById(id: $id) {\n            id\n            email\n            firstName\n            lastName\n            profileImageURL\n            followers{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            following{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            tweets{\n                id\n                content\n                author {\n                    lastName\n                    firstName\n                    profileImageURL\n                }\n            }\n        }\n    }\n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\n        mutation CreateTweet($payload: CreateTweetData!) {\n            createTweet(payload: $payload){\n                id\n            }\n        }\n    \n"): (typeof documents)["\n#graphql\n        mutation CreateTweet($payload: CreateTweetData!) {\n            createTweet(payload: $payload){\n                id\n            }\n        }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation followUser($to: ID!) {\n    followUser(to: $to)\n}\n\n"): (typeof documents)["#graphql\nmutation followUser($to: ID!) {\n    followUser(to: $to)\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation UnfollowUser($to: ID!) {\n    unfollowUser(to: $to)\n}\n\n"): (typeof documents)["#graphql\nmutation UnfollowUser($to: ID!) {\n    unfollowUser(to: $to)\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\n    query GetAllTweets {\n        getAllTweets{\n            id\n            content\n            imageURL\n            author{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n        }\n    }\n"): (typeof documents)["\n#graphql\n    query GetAllTweets {\n        getAllTweets{\n            id\n            content\n            imageURL\n            author{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetSignedURL($imageType: String!) {\n  getSignedURLForTweet(imageType: $imageType)\n}\n\n"): (typeof documents)["\nquery GetSignedURL($imageType: String!) {\n  getSignedURLForTweet(imageType: $imageType)\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    #graphql\n    query VerifyGoogleToken($token: String!) {\n        verifyGoogleToken(token: $token)\n    }\n"): (typeof documents)["\n    #graphql\n    query VerifyGoogleToken($token: String!) {\n        verifyGoogleToken(token: $token)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            email\n            firstName\n            lastName\n            profileImageURL\n            recommendedUsers {\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            tweets{\n                id\n                content\n                author {\n                    lastName\n                    firstName\n                    profileImageURL\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            email\n            firstName\n            lastName\n            profileImageURL\n            recommendedUsers {\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            tweets{\n                id\n                content\n                author {\n                    lastName\n                    firstName\n                    profileImageURL\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n#graphql\n    query GetUserById($id: ID!) {\n        getUserById(id: $id) {\n            id\n            email\n            firstName\n            lastName\n            profileImageURL\n            followers{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            following{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            tweets{\n                id\n                content\n                author {\n                    lastName\n                    firstName\n                    profileImageURL\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n#graphql\n    query GetUserById($id: ID!) {\n        getUserById(id: $id) {\n            id\n            email\n            firstName\n            lastName\n            profileImageURL\n            followers{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            following{\n                id\n                firstName\n                lastName\n                profileImageURL\n            }\n            tweets{\n                id\n                content\n                author {\n                    lastName\n                    firstName\n                    profileImageURL\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;