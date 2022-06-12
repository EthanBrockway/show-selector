import Card from "./Card";
const Home = ({ searchedShows }) => {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            {searchedShows?.map((show) => (
              <div key={show.id}>
                <Card tvShow={show} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
