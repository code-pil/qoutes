import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const {
    sendRequest,
    status,
    // error,
    data: loadedComments,
  } = useHttp(getAllComments);

  const params = useParams();
  const { quoteID } = params;

  useEffect(() => {
    setIsAddingComment(false);
  }, []);

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteID);
    setIsAddingComment(false);
  }, [sendRequest, quoteID]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No Comments were added yet!</p>;
  }
  return (
    <section className={classes.comments}>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      <h2>User Comments</h2>
      {isAddingComment && (
        <NewCommentForm quoteID={quoteID} onAddComment={addedCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
