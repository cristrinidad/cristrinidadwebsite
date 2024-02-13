import Hello from "../components/Hello";
import WelcomeImage from "../components/WelcomeImage";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <WelcomeImage />
          </div>
          <div className="col-md-6">
            <Hello />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
