import React from 'react';
import styled from 'styled-components';
import thankYou from '../assets/images/illustration-thank-you.svg';
import { ThemeProps } from './types';

interface Props extends ThemeProps {
  className?: string;
  index: number;
}

const ThankYou: React.FC<Props> = ({ className, index }) => {
  return (
    <div className={className}>
      <img src={thankYou} alt='thank you' />
      <span className='thank-you-rating'>{`You selected ${index} out of 5`}</span>
      <h1 className='rating-header'>Thank You!</h1>
      <span className='thank-you-description'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </span>
    </div>
  );
};

export default styled(ThankYou)(
  ({ theme }: ThemeProps) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    width: 162px;
    heigth: 108px;
    margin-bottom: 16px;
  }

  .thank-you-rating {
    background-color: ${theme.veryDarkBlue};
    color: ${theme.orange};
    text-align: center;
    padding 8px 16px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .thank-you-description {
    text-align: center;
  }
`
);
