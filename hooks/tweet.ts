import { graphQLClient } from "@/clients/api"
import { CreateTweetData } from "@/gql/graphql"
import {createTweetMutation}  from "@/graphql/mutation/tweet"
import { getAllTweetsQuery } from "@/graphql/query/tweet"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useGetAllTweets = () => {
    const query = useQuery({
        queryKey: ["all-tweets"],
        queryFn: () => graphQLClient.request(getAllTweetsQuery)
    })
    return {...query, tweets: query.data?.getAllTweets}
}


export const useCreateTweet = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async (payload: CreateTweetData) => {
            try {
              const result = await graphQLClient.request(createTweetMutation, { payload });
              return result;
            } catch (error) {
              throw error;
            }
          },
        onMutate: (payload) => toast.loading("Posting tweet...", {id: "1"}),
        onSuccess: async (payload) => {
           await queryClient.invalidateQueries(["all-tweets"]), 
           toast.success("Created", {id: "1"})
        },
        onError: (error) => {
            throw new Error(error?.message);
        }
    })
    return mutation;
}
