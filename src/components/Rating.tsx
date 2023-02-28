import React, { useState } from 'react';
import styled from 'styled-components';
import { RatingButtonGroup, ThankYou } from '.';
import starIcon from '../assets/images/icon-star.svg';
import type { ThemeProps } from './types';

interface Props extends ThemeProps {
  className?: string;
}

const Rating: React.FC<Props> = ({ className }) => {
  const [index, setIndex] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const handleSubmit = () => {
    setStep((step) => step + 1);
  };

  const handleClick = (idx: number) => {
    if (idx + 1 === index) {
      setIndex(0);
    } else {
      setIndex(idx + 1);
    }
  };

  return (
    <div className={className}>
      {step === 0 && (
        <>
          <img className='rating-star-icon' alt='star icon' src={starIcon} />
          <h1 className='rating-header'>How did we do?</h1>
          <p className='rating-paragraph'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering
          </p>
          <RatingButtonGroup index={index} handleClick={handleClick} />
          <button
            className='rating-submit'
            onClick={handleSubmit}
            disabled={index === 0}
          >
            SUBMIT
          </button>
        </>
      )}
      {step === 1 && <ThankYou index={index} />}
    </div>
  );
};
export default styled(Rating)(
  ({ theme }: ThemeProps) => `
  width: 405px;
  height: 405px;
  aspect-ratio: 1;
  border-radius: 25px;
  background: linear-gradient(${theme.lessDarkBlue}, ${theme.darkerBlue});
  padding: 32px;

  .rating-star-icon {
    background-color: ${theme.darkBlue};
    padding: 18px;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  .rating-header {
    font-weight: 700;
    color: ${theme.white};
    margin-bottom: 16px;
  }

  .rating-paragraph {
    color: ${theme.lightGrey}
  }

  .rating-submit {
    cursor: pointer;
    background-color: ${theme.orange};
    color: ${theme.white};
    border-style: none;
    border-radius: 25px;
    font-weight: 500;
    font-size: ${theme.fontSize};
    width: 100%;
    padding: 12px 0px;
    font-weight: 700;

    :disabled {
      opacity: 0.75;
      cursor: not-allowed;
    }
  }
`
);
