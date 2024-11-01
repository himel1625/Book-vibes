import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookDetail from './Components/BookDetails/BookDetail';
import ErrorPage from './Components/ErrorPages/ErrorPage';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBooks/ListedBook';
import PageToRead from './Components/PageToRead/PageToRead';
import Root from './Components/Root/Root';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/PageToRead',
        element: <PageToRead />,
      },
      {
        path: '/listedBooks',
        loader: () => fetch('./booksData.json'),
        element: <ListedBook />,
      },
      {
        path: '/books/:bookId',
        loader: () => fetch('./booksData.json'),
        element: <BookDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
