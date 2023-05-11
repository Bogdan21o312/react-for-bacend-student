import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
