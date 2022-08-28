import TEXTS from '../../../../constants/texts';
import Button from '../../../../components/atoms/Button/Button';
import NAV_LINKS from '../../../../constants/navLinks';
import { PROCESS } from '../../../../constants/process';
import ProcessCard from '../../../../components/atoms/ProcessCard/ProcessCard';
import {
  StyledProcessSection,
  StyledContainerL,
  StyledContainerR,
} from './ProcessSection.style';

const ProcessSection = () => {
  return (
    <StyledProcessSection>
      <StyledContainerL>
        <h2>{TEXTS.homePage.processSection.heading}</h2>
        <p>{TEXTS.homePage.processSection.paragraph}</p>
        <Button
          primary
          text={TEXTS.homePage.processSection.buttonTxt}
          path={NAV_LINKS[1].link}
        />
      </StyledContainerL>
      <StyledContainerR>
        {PROCESS.map((process, index) => (
          <ProcessCard
            key={index}
            index={index + 1}
            title={process.title}
            text={process.text}
            line={index !== PROCESS.length - 1}
          />
        ))}
      </StyledContainerR>
    </StyledProcessSection>
  );
};

export default ProcessSection;
