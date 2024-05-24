import { useState } from "react"
import "./comment.css"
import { CommentProps } from "../../utils/types";

const Comment: React.FC<CommentProps> = ({comments}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  

  return (
    <div className="comment">
      <div className="commentContainer">
        <span className="commentContainerSpan">Comments</span>
        {
          comments.map((ele, idx) => (
            <div key={idx} className="commentContainerDiv">
              <span className="commentContainerContent">
                {
                  ele.comment
                }
              </span>
              {
                ele.replies.length > 0 ?
                  <span
                    className="commentContainerShow"
                    onClick={()=> setIsOpen(!isOpen)}
                  ><u>show more replies</u></span>
                  : <span></span>
              }
              <div className="commentContainerButtons">
                <button className="commentReply">reply</button>
                <button className="commentDelete">delete</button>
                <button className="commentEdit">edit</button>
              </div>

              {
                isOpen && ele.replies.length > 0 ?
                  <Comment comments={ele.replies} /> 
                 : <span></span>
              }
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Comment