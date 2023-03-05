import React from "react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// /posts/authorId=1 -> ["posts", {authorId}]
// /posts/2/comments -> ["posts", post.id, '"comments"]
// /posts/page=1 -> ["posts", {page}]

const App = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...posts]),
    // staleTime: 1000 -> will make this stale after 1 sec and by this we can make fetching delaying
    // refetchInterval: 1000
  });

  // fetch user only after post have been fetched, use enabled
  // const userQuery = useQuery({
  //   queryKey: ["users", postsQuery?.data?.userId],
  //   enabled: postsQuery?.data?.userId != null,
  //   queryFn: () => getUser(postsQuery.data.userId),
  // });

  // const createPostMutation = useMutation({
  //   mutationFn: (variables) => createPost(variables) // api call function
  // onSuccess: can be used for redirect on toast, or invalidateQueries(['posts']) here for updation
  // })
  // createPostMutation. data , .error, .status

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   createPostMutation.mutate({
  //     title,
  //     body,
  //   });
  // }

  // invalidateQueries(["posts"],{exact:true}) -> only queryKey "posts"
  // inside onSuccess : queryClient.setQueryData(["posts",data.id],data) this will update the cache for querykey "posts",data.id, manual cache update

  // keepPreviousData: true, for pagination in useQuery

  // useInfiniteQuery for infinite scroll

  if (postsQuery.isLoading) return <h1>Loading ...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export default App;
