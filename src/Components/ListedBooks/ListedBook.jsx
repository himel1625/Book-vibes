import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/DataBase';
import Book from '../Book/Book';
const ListedBook = () => {
  const AllBooks = useLoaderData();
  const [RedList, setRedList] = useState([]);
  useEffect(() => {
    const storedList = getStoredReadList();
    const storedListInt = storedList.map((id) => parseInt(id));
    const readBookList = AllBooks.filter((book) =>
      storedListInt.includes(book.bookId),
    );
    setRedList(readBookList);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab> Mark As Read List</Tab>
          <Tab> Add To Wishlist List</Tab>
        </TabList>

        <TabPanel>
          <div>
            {RedList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist List </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
