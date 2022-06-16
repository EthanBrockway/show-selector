import Card from "./Card";
import Auth from "../utils/auth";
import { SAVE_SHOW } from "../utils/mutations";
import { useMutation } from "@apollo/client";
const Home = ({ searchedShows }) => {
  const [saveShow, { error }] = useMutation(SAVE_SHOW);
  const handleSaveShow = async (showId) => {
    const showToSave = searchedShows.find((show) => show.showId === showId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      await saveShow({
        context: {
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        },
        variables: {
          show: showToSave,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="home">
      <div className="home-container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            {searchedShows?.map((show) => (
              <div key={show.id}>
                <Card
                  tvShow={show}
                  onBtnClick={(tvShowId) => handleSaveShow(tvShowId)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
