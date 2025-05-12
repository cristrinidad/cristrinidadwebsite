import ArtDatabaseMuseum from "./ArtDatabaseMuseum";
import ArtDatabaseMuseum25 from "./ArtDatabaseMuseum25";
import OnlineBulkBookShop from "./OnlineBulkBookShop";

function LatestWorks() {
    return (
      <>
          <div className="container mt-5">
                <h1 className="mb-5">Latest Works</h1>
                <ArtDatabaseMuseum25 />
                <br />
                <OnlineBulkBookShop />
                <br />
                <ArtDatabaseMuseum />     
          </div>

      </>
    );
}

export default LatestWorks;
