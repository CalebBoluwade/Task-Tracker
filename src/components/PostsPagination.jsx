import React from "react";

const PostsPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pages">
        {pageNumber.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)} className="pageNumber">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostsPagination;
