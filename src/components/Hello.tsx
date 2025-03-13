import SocialIcons from "./SocialIcons";

function Hello() {
  return (
    <>
      <div className="container right-welcome-container">
        <h4 className="display-4 text-center">Cris Trinidad</h4>
        <p className="lead text-center">
        I am a graduate of the University of Maryland, Baltimore County, with a major in Computer Science and a minor in Dance. 
        I have a passion for creating websites and developing games in my free time. 
        When I'm not immersed in tech projects, I enjoy knitting, crocheting, pottery, dancing, and cooking.
        </p>
        <SocialIcons />
      </div>
    </>
  );
}

export default Hello;
