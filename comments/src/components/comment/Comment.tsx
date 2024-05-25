import { useState } from "react"
import "./comment.css"
import { CommentProps } from "../../utils/types";

const Comment: React.FC<CommentProps> = ({ comments, handleDeleteComment }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // console.log(isOpen);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.stopPropagation();
    handleDeleteComment(comments.id);
  }

  return (
    <div className="comment">
      <div className="commentContainer">
        <span className="commentContainerSpan">Comments</span>
        {
          <div className="commentContainerDiv">
            <span className="commentContainerContent">
              {
                comments.comment
              }
            </span>
            {
              comments.replies && comments.replies.length > 0 ?
                <span
                  className="commentContainerShow"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {
                    !isOpen ? <u>show more replies</u> : <u>Close more replies</u>
                  }</span>
                : <span></span>
            }
            <div className="commentContainerButtons">
              <button className="commentReply">reply</button>
              <button className="commentDelete" onClick={handleDelete}>delete</button>
              <button className="commentEdit">edit</button>
            </div>

            {
              isOpen && comments.replies && comments.replies.length > 0 ?
                comments.replies.map((ele, idx) => (
                  <Comment key={idx} comments={ele} handleDeleteComment={handleDeleteComment} />
                ))
                : <span></span>
            }
          </div>
        }

      </div>
    </div>
  )
}

export default Comment