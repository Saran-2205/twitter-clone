import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useFollow = () => {
    const queryClient = useQueryClient();

    const { mutate: follow, isPending } = useMutation({
        mutationFn: async (userId) => {
            try {
                const res = await fetch(`/api/users/follow/${userId}`, {
                    method: "POST"
                })
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: (data) => {
            queryClient.setQueryData(["authUser"], (oldData) => ({
                ...oldData,
                following: data.isFollowing
                    ? [...oldData.following, data.userId]
                    : oldData.following.filter((id) => id !== data.userId)
            }));

            // Efficiently update 'userProfile' cache
            queryClient.setQueryData(["userProfile"], (oldData) => ({
                ...oldData,
                followers: data.isFollowing
                    ? [...oldData.followers, data.userId]
                    : oldData.followers.filter((id) => id !== data.userId)
            }));
          },
          
        onError: (error) => {
            toast.error(error.message)
        }
    });

    return { follow, isPending };
}

export default useFollow;