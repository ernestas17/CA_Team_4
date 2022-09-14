import { StyledProvidedServiceCard } from './ProvidedServiceCard.style';

const ProvidedServiceCard = ({ icon, title, content }) => {
  return (
    <StyledProvidedServiceCard>
      <div>
        <img src={icon} alt='icon' />
      </div>
      <p>{title}</p>
      <p>{content}</p>
    </StyledProvidedServiceCard>
  );
};

export default ProvidedServiceCard;
