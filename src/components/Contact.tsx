import SocialIcons from "./SocialIcons";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <>
      <br />
      <h1 className="text-center">Contact Me!</h1>
      <ContactInfo />
      <SocialIcons />
      <footer className="text-center mt-3">
        &copy; Cristobal Trinidad 2025
      </footer>
      <br />
    </>
  );
}

export default Contact;
