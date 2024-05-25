import Comment from "./components/comment/Comment"
import "./App.css"
import { useEffect, useState } from "react";
import { CommentData } from "./utils/types";

function App() {

  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    try {
      const func = async () => {
        const res = await fetch("data.json");

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: CommentData[] = await res.json();
        setComments(data);
      }

      func();
    } catch (error) {
      console.error('Error fetching the comments:', error);
    }
  }, [])

  return (
    <div>
      {
        comments.map((ele, idx) => (
          <Comment key={idx} comments={ele} />
        ))
      }

    </div>
  )
}

export default App
