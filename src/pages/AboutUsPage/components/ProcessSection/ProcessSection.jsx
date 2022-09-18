import TEXTS from '../../../../constants/texts';
import { PROCESS } from '../../../../constants/process';
import ProcessCard from '../../../../components/atoms/ProcessCard';
import {
  StyledProcessSection,
  StyledContentCont,
  StyledProcessCont,
  StyledImgCont,
} from './ProcessSection.style';

const ProcessSection = () => {
  return (
    <StyledProcessSection>
      <StyledContentCont>
        <h3>{TEXTS.aboutUsPage.processSection.title}</h3>
        <p>{TEXTS.aboutUsPage.processSection.text}</p>
        <StyledProcessCont>
          {PROCESS.map((process, index) => (
            <ProcessCard
              key={index}
              index={index + 1}
              title={process.title}
              text={process.text}
              line={index !== PROCESS.length - 1}
              lineLength={'51px'}
              pWidth={'356px'}
            />
          ))}
        </StyledProcessCont>
      </StyledContentCont>
      <StyledImgCont />
    </StyledProcessSection>
  );
};

export default ProcessSection;
