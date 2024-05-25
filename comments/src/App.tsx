import Comment from "./components/comment/Comment"
import "./App.css"
import { useEffect, useState } from "react";
import { CommentData } from "./utils/types";
import customHooks from "./hooks/customHooks";

function App() {

  const {deleteComment} = customHooks();

  const [comments, setComments] = useState<CommentData[]>([]);

  const handleDeleteComment = (idx:string) => {
    const finalData = deleteComment(comments,idx);
    console.log(finalData);
    setComments(finalData);
  }

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
          <Comment key={idx} comments={ele} handleDeleteComment={handleDeleteComment} />
        ))
      }

    </div>
  )
}

export default App
