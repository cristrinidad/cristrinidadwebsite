function OnlineBulkBookShop() {
  return (
    <>
      <div className="border border-dark border-5 rounded p-3">
        <h4 className="">Online Bulk Book Shop</h4>
        <h4 className="">May 2024</h4>
        <ul className="list-unstyled mt-3">
          <li className="list-item h5">
            &#8226; Created a e-commerce website with ASP.NET Core where
            customers can buy books.
          </li>
          <li className="list-item h5">
            &#8226; Used PostgreSQL as SQL database.
          </li>
          <li className="list-item h5">
            &#8226; Locked certain features to non-administrative users with
            role based access control.
          </li>
          <li className="list-item h5">
            &#8226; Integrated with Stripe for payment, TinyMCE for rich text
            editing and Toastr for notifications.
          </li>
          <li className="list-item h5">
            &#8226; Deployed with Docker and Heroku using GitHub Actions.
          </li>
        </ul>
        <h5>
          Link:{" "}
          <a href="https://mystoreheroku-4a0565207861.herokuapp.com/">
            Online Bulk Book Shop
          </a>
        </h5>
      </div>
    </>
  );
}

export default OnlineBulkBookShop;
