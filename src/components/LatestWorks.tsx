import ArtDatabaseMuseum from "./ArtDatabaseMuseum";
import OnlineBulkBookShop from "./OnlineBulkBookShop";

function LatestWorks() {
    return (
      <>
          <div className="container mt-5">
                <h1 className="mb-5">Latest Works</h1>
                <OnlineBulkBookShop />
                <br />
                <ArtDatabaseMuseum />     
          </div>

      </>
    );
}

export default LatestWorks;
