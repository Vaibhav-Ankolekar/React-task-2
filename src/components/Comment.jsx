const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="comment">
            <div className="profile-pic">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            </div>
            <div>
                <div className="name">{comment.name}</div>
                <div className="email">
                    <div>{comment.email}</div>
                    <div>2 months ago</div>
                </div>
                <div className="text">{comment.body}</div>
            </div>
        </div>
    );
};

export default Comment;
