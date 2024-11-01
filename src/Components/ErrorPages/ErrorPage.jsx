import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg mt-2 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <button
            onClick={handleGoBack}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Go to Homepage
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ErrorPage;
