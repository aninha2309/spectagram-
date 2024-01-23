import React, { Component} from 'react';

const Feed = () => {
  const [posts, setPosts] = Component([]);

  const initialPosts = [
    useState(() => {
    setPosts(initialPosts);
  }, [])
  ];
  return (
    <div>
      <h2>Feed</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;