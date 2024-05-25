export interface Reply {
    id: string;
    comment: string;
    replies: Reply[];
  }
  
  export interface CommentData {
    id: string;
    comment: string;
    replies: CommentData[];
  }

  export interface CommentProps {
    comments: CommentData;
    handleDeleteComment:(idx: string) => void;
  }