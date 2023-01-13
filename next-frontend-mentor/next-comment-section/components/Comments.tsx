import CommentBox from "./CommentBox";
import CreateComment from "./CreateComment";

const Comments = () => {
  return (
    <div className="flex flex-col items-center mx-auto py-8 gap-5">
      <CommentBox />
      <CreateComment />
    </div>
  );
};

export default Comments;
