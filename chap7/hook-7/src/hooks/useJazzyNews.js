import { useState, useEffect } from "react";

export const useJazzNews = () => {
    const [_posts, setPosts] = useState([]);
    const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

    const posts = useMemo(() => _posts, [_posts]);

    useEffect(() => {
        newPostChime.play();
    }, [posts]);

    useEffect(() => {
        newsFeed.subscribe(addPost);
        return () => newsFeed.unsubscribe(addPost);
    }, []);

    useEffect(() => {
        welcomeChime.play();
        return () => goodbyeChime.play();
    }, []);

    return posts;
};
