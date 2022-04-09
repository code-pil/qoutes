import React, { Fragment, useEffect } from "react";
import {
  Link,
  Redirect,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const match = useRouteMatch();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const { quoteID } = useParams();

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <div className="centered">{error}</div>;
  }

  if (!loadedQuote.text) {
    return (
      <Route path="*" exact>
        <Redirect to="/notfound" />
      </Route>
    );
  }

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route exact path={`${match.path}`}>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            See Comments
          </Link>
        </div>
      </Route>
      <Route exact path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
