import { useState } from "react"
import "./comment.css"
import { CommentProps } from "../../utils/types";

const Comment: React.FC<CommentProps> = ({comments}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);
  
  

  return (
    <div className="comment">
      <div className="commentContainer">
        <span className="commentContainerSpan">Comments</span>
        {/* {
          comments.map((ele, idx) => ( */}
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
                    onClick={()=> setIsOpen(!isOpen)}
                  >
                  {
                    !isOpen ? <u>show more replies</u> : <u>Close more replies</u>
                  }</span>
                  : <span></span>
              }
              <div className="commentContainerButtons">
                <button className="commentReply">reply</button>
                <button className="commentDelete">delete</button>
                <button className="commentEdit">edit</button>
              </div>

              {
                isOpen && comments.replies && comments.replies.length > 0 ?
                  comments.replies.map((ele,idx) => (
                    <Comment key={idx} comments={ele} /> 
                  ))
                 : <span></span>
              }
            </div>
          {/* ))
        } */}

      </div>
    </div>
  )
}

export default Comment