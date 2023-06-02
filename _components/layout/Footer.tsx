import Socials from "../portfolio/Socials";
import Container from "./container";

const Footer = () => {
  return (
    <Container padding={1} sm className="bg-black py-4">
      <div className="flex justify-between w-full items-center">
        <Socials />
        <p className="text-sm font-light">Copyright &copy; 2023</p>
      </div>
    </Container>
  );
};

export default Footer;
