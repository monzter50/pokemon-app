/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import createPagination from './helpers';
import {
  Container, Navigation, NavigationItem, NavigationLink,
} from './styles';

const Pagination = ({ total, perPages, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pagination } = createPagination({
    numberOfArticles: total,
    articlesPerPage: perPages,
    numberOfButtons: 3,
    currentPage,
  });


  return (
    <Container>
      <Navigation>
        <NavigationItem className={`page-item ${pagination[0] === currentPage && 'active'}`}>
          <NavigationLink
            className="page-link"
            onClick={() => {
              paginate(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }}
          >
            Previous
          </NavigationLink>
        </NavigationItem>
        {
          pagination.map((num) => (
            <NavigationItem key={num} onClick={() => setCurrentPage(num)} className={`${currentPage === num ? 'active' : ''}`}>
              <NavigationLink onClick={() => paginate(num)} className="page-link ">
                {num}
              </NavigationLink>
            </NavigationItem>
          ))
        }
        <NavigationItem className={`page-item ${pagination.reverse()[0] === currentPage && 'active'}`}>
          <NavigationLink
            className="page-link"
            onClick={() => {
              paginate(currentPage + 1);
              setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </NavigationLink>
        </NavigationItem>
      </Navigation>
    </Container>
  );
};

export default Pagination;
