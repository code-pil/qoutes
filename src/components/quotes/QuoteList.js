import { Fragment } from "react";
// import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

// const sortQuotes = (quotes, ascending) => {
//   return quotes.sort((quoteA, quoteB) => {
//     if (ascending) {
//       return quoteA.id > quoteB.id ? 1 : -1;
//     } else {
//       return quoteA.id < quoteB.id ? 1 : -1;
//     }
//   });
// };

const QuoteList = (props) => {
  // const match = useRouteMatch();

  // const history = useHistory();
  // const location = useLocation();

  // const query = new URLSearchParams(location.search);
  // const isSortingAcending = query.get("sort") === "asc";

  // const sortedQuotes = sortQuotes(props.quotes, isSortingAcending);

  // const changeSortingHandler = () => {
    // history.push({
    //   pathname: match.url,
    //   search: `?sort=${isSortingAcending ? "desc" : "asc"}`,
    // });
    // history.push("/quotes?sort=" + (isSortingAcending ? "desc" : "asc"));
  // };

  return (
    <Fragment>
      {/* <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAcending ? "Descending" : "Acending"}
        </button>
      </div> */}
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
