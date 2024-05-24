export interface Reply {
    id: string;
    comment: string;
    replies: string[];
  }
  
  export interface CommentData {
    id: string;
    comment: string;
    replies: CommentData[];
  }

  export interface CommentProps {
    comments: CommentData[];
  }