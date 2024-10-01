import './App.css';

import React, { useEffect, useState } from 'react';

import PostDetail from './PostDetail';
import PostList from './PostList';

interface Post {
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    void fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: Post[]) => {
        setPosts(data);
        if (data.length > 0) {
          const firstPostId: number | undefined = data[0]?.id;
          if (firstPostId !== undefined) {
            setSelectedPostId(firstPostId);
          }
        }
      });
  }, []);

  return (
    <div className="app">
      <div className="post-list">
        <PostList
          posts={posts}
          selectedPostId={selectedPostId}
          onSelectPost={setSelectedPostId}
        />
      </div>
      <div className="post-detail">
        {selectedPostId !== null && <PostDetail postId={selectedPostId} />}
      </div>
    </div>
  );
};

export default App;
