import bannerImg from '../assets/books.jpg';
const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen font-fair mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="max-w-sm sm:max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold    ">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn 
            mt-4 bg-green-500">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
