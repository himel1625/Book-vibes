import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import {
  addToStoredReadList,
  addToStoredWishList,
} from '../../Utility/DataBase';
const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleAddToWishlist = (id) => {
    addToStoredWishList(id);
  };
  return (
    <>
      <div className="border border-gray-300 rounded-xl p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={image}
            alt={bookName}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">{bookName}</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>By:</strong> {author}
          </p>
          <p className="text-md text-gray-600 mb-2">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Review:</strong> {review}
          </p>
          <p className="text-md text-gray-600 mb-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-200 text-green-500"
              >
                {tag}
              </button>
            ))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div>
              <p>
                <strong>Number of Pages:</strong> {totalPages}
              </p>
              <p>
                <strong>Publisher:</strong> {publisher}
              </p>
              <p>
                <strong>Year of Publishing:</strong> {yearOfPublishing}
              </p>
            </div>
            <div>
              <p>
                <strong>Rating:</strong> {rating}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Mark As Read
            </button>
            <button
              onClick={() => handleAddToWishlist(bookId)}
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
            >
              Add To Wishlist
            </button>
            <div onClick={handleClick} className="text-4xl font-bold">
              {' '}
              <BiLogOutCircle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
