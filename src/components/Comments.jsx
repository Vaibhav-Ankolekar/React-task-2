import Comment from "./Comment";

const Comments = (props) => {
    const { comments } = props;

    return (
        <div className="comments">
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default Comments;
