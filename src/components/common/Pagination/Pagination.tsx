import React from "react";

interface PaginationProps {
  current: number;
  buttonQuantity: number;
  totalButtonQuantity: number;
  onClick: (number: number) => void;
  paginationClassName?: string;
  nonactiveButtonClassName?: string;
  activeButtonClassName?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  current,
  buttonQuantity,
  totalButtonQuantity,
  onClick,
  paginationClassName,
  activeButtonClassName,
  nonactiveButtonClassName,
}) => {
  let firstButtonValue = current - Math.floor(buttonQuantity / 2);
  let lastButtonValue = current + Math.floor(buttonQuantity / 2);

  if (lastButtonValue < buttonQuantity) {
    firstButtonValue = 1;
    lastButtonValue = buttonQuantity;
  }

  if (lastButtonValue > totalButtonQuantity) {
    if (totalButtonQuantity > buttonQuantity) {
      firstButtonValue =
        firstButtonValue - (lastButtonValue - totalButtonQuantity);
    }

    lastButtonValue = lastButtonValue - (lastButtonValue - totalButtonQuantity);
  }

  return (
    <div className={paginationClassName}>
      {current > 1 && (
        <button
          className={nonactiveButtonClassName}
          onClick={() => onClick(current - 1)}
        >
          prev
        </button>
      )}
      {Array(buttonQuantity)
        .fill(null)
        .map((_, index) => {
          const buttonValue = index + firstButtonValue;

          if (buttonValue > lastButtonValue) {
            return null;
          } else {
            return (
              <button
                key={buttonValue}
                className={
                  buttonValue === current
                    ? activeButtonClassName
                    : nonactiveButtonClassName
                }
                onClick={() => onClick(buttonValue)}
              >
                {buttonValue}
              </button>
            );
          }
        })}
      {current < totalButtonQuantity && (
        <button
          className={nonactiveButtonClassName}
          onClick={() => onClick(current + 1)}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Pagination;
