import CallToAction from '../../components/CallToAction';
import FooterContacts from '../../components/FooterContacts';
import TEXTS from '../../constants/texts';
import Card from '../../components/Card/Card';

import repairIcon from '../../assets/icons/homePage/CardsSection/engine.svg';
import washIcon from '../../assets/icons/homePage/CardsSection/CarDiagnostic.svg';
import batteryIcon from '../../assets/icons/homePage/CardsSection/batery.svg';
import wrenchIcon from '../../assets/icons/homePage/servicesSection/wrench.svg';
import mechanicIcon from '../../assets/icons/homePage/servicesSection/mechanic.svg';
import dollarIcon from '../../assets/icons/homePage/servicesSection/dollar.svg';
import wheelImg from '../../assets/images/singleServicePage/Rims.jpg';

import {
  StyledSingleServicePage,
  StyledSection,
  StyledCardsBlock,
  StyledOtherServices,
  StyledOtherServicesH5,
  StyledCardsCont,
  StyledTxtCardCont,
  StyledServiceWrapper,
  StyledIconCircle,
  StyledServiceTxtWrapper,
  StyledServiceP,
  StyledContentBlock,
  StyledImg,
  StyledP1,
  StyledP2,
  StyledContentH5,
  StyledP3,
  StyledLeftBorder,
  StyledP4,
} from './SingleServicePage.style';
const SingleServicePage = () => {
  return (
    <StyledSingleServicePage>
      <h1>{TEXTS.singleServicePage.heading}</h1>
      <StyledSection>
        <StyledCardsBlock>
          <StyledOtherServices>
            <StyledOtherServicesH5>
              {TEXTS.singleServicePage.cards.title}
            </StyledOtherServicesH5>
            <StyledCardsCont>
              <Card
                icon={repairIcon}
                text={TEXTS.singleServicePage.cards.card1}
                customWidth={'264px'}
                customHeight={'158px'}
              />
              <Card
                icon={washIcon}
                text={TEXTS.singleServicePage.cards.card2}
                customWidth={'264px'}
                customHeight={'158px'}
              />
              <Card
                icon={batteryIcon}
                text={TEXTS.singleServicePage.cards.card3}
                customWidth={'264px'}
                customHeight={'158px'}
              />
            </StyledCardsCont>
          </StyledOtherServices>
          <StyledTxtCardCont>
            <StyledServiceWrapper>
              <StyledIconCircle>
                <img src={wrenchIcon} alt='wrench' />
              </StyledIconCircle>
              <StyledServiceTxtWrapper>
                <h6>
                  {TEXTS.homePage.servicesSection.services.service1.title}
                </h6>
                <StyledServiceP>
                  {TEXTS.homePage.servicesSection.services.service1.text}
                </StyledServiceP>
              </StyledServiceTxtWrapper>
            </StyledServiceWrapper>
            <StyledServiceWrapper>
              <StyledIconCircle>
                <img src={mechanicIcon} alt='mechanic' />
              </StyledIconCircle>
              <StyledServiceTxtWrapper>
                <h6>
                  {TEXTS.homePage.servicesSection.services.service2.title}
                </h6>
                <StyledServiceP>
                  {TEXTS.homePage.servicesSection.services.service1.text}
                </StyledServiceP>
              </StyledServiceTxtWrapper>
            </StyledServiceWrapper>
            <StyledServiceWrapper>
              <StyledIconCircle>
                <img src={dollarIcon} alt='dollar' />
              </StyledIconCircle>
              <StyledServiceTxtWrapper>
                <h6>
                  {TEXTS.homePage.servicesSection.services.service3.title}
                </h6>
                <StyledServiceP>
                  {TEXTS.homePage.servicesSection.services.service2.text}
                </StyledServiceP>
              </StyledServiceTxtWrapper>
            </StyledServiceWrapper>
          </StyledTxtCardCont>
        </StyledCardsBlock>
        <StyledContentBlock>
          <StyledImg src={wheelImg} alt='wheeel' />
          <h4>{TEXTS.singleServicePage.article.title1}</h4>
          <StyledP1>{TEXTS.singleServicePage.article.paragraph1}</StyledP1>
          <StyledP2>{TEXTS.singleServicePage.article.paragraph2}</StyledP2>
          <StyledContentH5>
            {TEXTS.singleServicePage.article.title2}
          </StyledContentH5>
          <StyledP3>{TEXTS.singleServicePage.article.paragraph3}</StyledP3>
          <StyledLeftBorder>
            <StyledP4>{TEXTS.singleServicePage.article.paragraph4}</StyledP4>
          </StyledLeftBorder>
        </StyledContentBlock>
      </StyledSection>
      <CallToAction />
      <FooterContacts />
    </StyledSingleServicePage>
  );
};

export default SingleServicePage;
