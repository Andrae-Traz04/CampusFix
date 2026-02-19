function ReportCard({
  report,
  handleUpvote,
  commentInputs,
  handleCommentChange,
  handleAddComment
}) {
  return (
    <div className="feed-card">
      <h5>{report.student}</h5>
      <p>{report.issue}</p>

      <div className="feed-actions">
        <button onClick={() => handleUpvote(report.id)}>
          ⬆ {report.upvotes}
        </button>

        <span>💬 {report.comments.length}</span>
      </div>

      {/* Comment Input */}
      <div className="comment-box">
        <input
          type="text"
          placeholder="Write comment..."
          value={commentInputs[report.id] || ""}
          onChange={(e) =>
            handleCommentChange(report.id, e.target.value)
          }
        />

        <button onClick={() => handleAddComment(report.id)}>
          Comment
        </button>
      </div>

      {/* Comment List */}
      {report.comments.map((c, index) => (
        <p key={index} className="comment-text">
          {c}
        </p>
      ))}
    </div>
  );
}

export default ReportCard;