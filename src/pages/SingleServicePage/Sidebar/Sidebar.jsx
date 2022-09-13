import { CARDS_SINGLE_SERVICE } from '../../../constants/serviceCards';
import Card from '../../../components/atoms/Card';
import SERVICES from '../../../constants/services';
import ServiceCard from '../../../components/atoms/ServiceCard';
import TEXTS from '../../../constants/texts';

import {
  StyledSidebar,
  StyledOtherServices,
  StyledOtherServicesTitle,
  StyledCardsCont,
  StyledTxtCardCont,
} from './Sidebar.style';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledOtherServices>
        <StyledOtherServicesTitle>
          {TEXTS.singleServicePage.cards.title}
        </StyledOtherServicesTitle>
        <StyledCardsCont>
          {CARDS_SINGLE_SERVICE.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              text={card.text}
              customWidth={'264px'}
              customHeight={'158px'}
            />
          ))}
        </StyledCardsCont>
      </StyledOtherServices>
      <StyledTxtCardCont>
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            text={service.description}
          />
        ))}
      </StyledTxtCardCont>
    </StyledSidebar>
  );
};

export default Sidebar;
