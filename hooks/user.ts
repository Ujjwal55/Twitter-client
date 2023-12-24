import { graphQLClient } from "@/clients/api"
import { getCurrentUserQuery, getUserById } from "@/graphql/query/user"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUser = () => {
    const query = useQuery({
        queryKey: ["currentUser"],
        queryFn: () => graphQLClient.request(getCurrentUserQuery)
    })
    return {...query, user: query.data?.getCurrentUser}
}

export const useGetUserByID = (id: string) => {
    const query = useQuery({
        queryKey: ["userId"],
        queryFn: () => graphQLClient.request(getUserById, {id})
    })
    return {...query, user: query.data?.getUserById}
}