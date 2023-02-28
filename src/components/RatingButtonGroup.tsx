import styled from 'styled-components';
import { ThemeProps } from './types';

interface RatingButtonGroupProps extends ThemeProps {
  className?: string;
  index: number;
  handleClick: (idx: number) => void;
}

const RatingButtonGroup: React.FC<RatingButtonGroupProps> = ({
  className,
  index,
  handleClick,
}) => {
  return (
    <div className={className}>
      {[...Array(5)].map((_, idx) => (
        <button
          className={`rating-button ${index === idx + 1 ? 'clicked' : ''}`}
          key={idx}
          onClick={() => handleClick(idx)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default styled(RatingButtonGroup)(
  ({ theme }: ThemeProps) => `

  display: flex;
  justify-content: space-between;
  margin: 18px 0px;

  .rating-button {
    cursor: pointer;
    background-color: ${theme.darkBlue};
    color: ${theme.mediumGrey};
    border-radius: 50%;
    border-style: none;
    font-size: ${theme.fontSize};
    width: 50px;
    height: 50px;
    transition: 0.2s;

    &.clicked {
      background-color: ${theme.orange};
      color: ${theme.white};
    }

    :hover:not(.clicked) {
      background-color: ${theme.mediumGrey};
      color: ${theme.white};
    }
  }
  `
);
