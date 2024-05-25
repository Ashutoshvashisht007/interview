import { CommentData } from "../utils/types"

const customHooks = () => {
    const deletee = (comment: CommentData,idx:string) : {updatedComment: CommentData, found: boolean} => {
        let flag = false;
        if(comment.replies){
            comment.replies = comment.replies.filter((cmt) => {
                if(cmt.id === idx){
                    flag = true;
                }
                return cmt.id !== idx;
            });
            if(flag){
                return {updatedComment: { ...comment }, found: true};
            }
            let updatedReplies = comment.replies.map(reply => {
                const result = deletee(reply, idx);
                if (result.found) {
                    flag = true;
                }
                return result.updatedComment;
            });
            comment.replies = updatedReplies;
        }

        return { updatedComment: { ...comment }, found: flag };
    }

    const deleteComment = (comments:CommentData[], idx:string) => {
        let newComments = [...comments];
        let flag = false;
        const temp = comments.filter((comment) => {
            if(comment.id === idx){
                flag = true;
            }
            return comment.id !== idx;
        });

        if(flag){
            return temp;
        }
        for(let i=0;i<comments.length;i++){
            const result = deletee(comments[i],idx);
            newComments[i] = result.updatedComment;
            if (result.found) {
                break;
            }
        }

        return newComments;
    }

    const editComment = () => {

    }

    const addComment = () => {

    }

    return {deleteComment, editComment, addComment}
}

export default customHooks