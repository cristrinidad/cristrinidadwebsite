import SocialIcons from "./SocialIcons";

function Hello() {
  return (
    <>
      <div className="container right-welcome-container">
        <h4 className="display-4">Hi! I'm Cris Trinidad.</h4>
        <p className="lead">
          Currently a QA Analyst at Unison Global. <br /> My hobbies include
          knitting, cooking, and hiking.
        </p>
        <SocialIcons />
      </div>
    </>
  );
}

export default Hello;
