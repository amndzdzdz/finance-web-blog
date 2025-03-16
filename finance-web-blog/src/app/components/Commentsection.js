import Comment from "./Comment";

export default function Commentsection({ comments }) {
  return (
    <div className="mt-5">
      <div className="row d-flex text-center mb-5">
        <div className="col-md-8">
          <h1>Leave a comment!</h1>
        </div>
      </div>

      {comments.length === 0 ? (
        <div className="row d-flex text-center mb-5">
          <div className="col-md-8">
            <p>No comments yet, be the first one to comment!</p>
          </div>
        </div>
      ) : (
        comments.map((commentEntry, index) => {
          return <Comment key={index} commentEntry={commentEntry}></Comment>;
        })
      )}
    </div>
  );
}
