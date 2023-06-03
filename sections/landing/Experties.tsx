import { Container } from "../../components/Container";
import { ExpertiesCard } from "../../components/cards/ExpertiesCard";
import { Heading } from "../../components/Heading";

export const Experties = () => {
  return (
    <Container className="my-12">
      <div className="grid place-items-center">
        <Heading>My Experties</Heading>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-12 mt-8 gap-4">
        <div className="col-span-4">
          <ExpertiesCard
            image="/v3/icons/web-development.svg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, "
            title="Web App Development"
          />
        </div>
        <div className="col-span-4">
          <ExpertiesCard
            image="/v3/icons/ux-design.svg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, "
            title="UI/UX design"
          />
        </div>
        <div className="col-span-4">
          <ExpertiesCard
            image="/v3/icons/mobile-development.svg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, "
            title="Mobile App Development"
          />
        </div>
      </div>
    </Container>
  );
};
