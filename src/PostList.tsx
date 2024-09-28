import './PostList.css';

import React from 'react';

interface Post {
  id: number;
  title: string;
}

interface PostListProps {
  posts: Post[];
  selectedPostId: number | null;
  onSelectPost: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({
  posts,
  selectedPostId,
  onSelectPost,
}) => {
  return (
    <div className="post-list-container">
      <h2>포스트 목록</h2>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className={post.id === selectedPostId ? 'selected' : ''}
            onClick={() => {
              onSelectPost(post.id);
            }}
          >
            <b>{post.id}.</b> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
