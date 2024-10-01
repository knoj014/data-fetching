import './PostDetail.css';

import { useEffect, useState } from 'react';

interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetail = ({ postId }: { postId: number }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    void fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data: Post) => {
        setPost(data);
      });

    void fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data: Comment[]) => {
        setComments(data);
      });
  }, [postId]);

  if (post === null) return <div>Loading...</div>;

  return (
    <div className="post-detail-container">
      <h2>내용</h2>
      <p>{post.body}</p>
      <h2>댓글</h2>
      <ul>
        {comments.map((comment) => (
          <li className="comment" key={comment.id}>
            <b>{`작성자: ${comment.email}`}</b> <br />
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
