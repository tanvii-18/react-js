import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SyncLoader from "react-spinners/SyncLoader";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [page, setpage] = useState(1)

  const getDataFromServer = async () => {
    setloading(true);
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      setPosts(res.data);
      setloading(false);
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, [page]);

  return loading ? (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <SyncLoader color="#000000" size={15} />
  </div>
  ) : error ? (
    <h2>Data can't fetch !</h2>
  ) : (
    <div className="App">
      <hr /><hr />
      <h1>Posts</h1>
      <hr /><hr />
      <br />
      <div>
        {posts.map((el, i) => {
          return (
            <div key={el.id} id="container">
              <h3>{el.id}</h3>
              <h2>{el.title}</h2>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>

      <button disabled={page==1} onClick={()=>setpage(page-1)}>Prev</button>
      <span>{page}</span>
      <button disabled={page==posts.length} onClick={()=>setpage(page+1)}>Next</button>
    </div>
  );
}
