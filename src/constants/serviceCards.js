import TEXTS from './texts';
import { uid } from 'uid';
import {
  DiagnosticIcon,
  EngineIcon,
  WheelIcon,
  OilIcon,
  BodyIcon,
  BatteryIcon,
  InsuranceIcon,
  CustomServiceIcon,
} from '../assets/icons';

const SERVICE_CARDS = [
  {
    id: uid(),
    icon: <DiagnosticIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card1}`,
  },
  {
    id: uid(),
    icon: <EngineIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card2}`,
  },
  {
    id: uid(),
    icon: <WheelIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card3}`,
  },
  {
    id: uid(),
    icon: <OilIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card4}`,
  },
  {
    id: uid(),
    icon: <BodyIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card5}`,
  },
  {
    id: uid(),
    icon: <BatteryIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card6}`,
  },
  {
    id: uid(),
    icon: <InsuranceIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card7}`,
  },
  {
    id: uid(),
    icon: <CustomServiceIcon />,
    text: `${TEXTS.homePage.cardsSection.cards.card8}`,
  },
];

export default SERVICE_CARDS;
