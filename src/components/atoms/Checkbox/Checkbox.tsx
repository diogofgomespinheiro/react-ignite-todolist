import * as React from 'react';

import { Checkmark } from '@/components/icons';

import * as styles from './styles.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  defaultChecked?: boolean;
  isChecked?: boolean;
  onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Checkbox = ({
  defaultChecked = false,
  isChecked: propsIsChecked,
  onChange,
}: Props): React.ReactElement<Props> => {
  const [stateIsChecked, setIsChecked] = React.useState(defaultChecked);
  const isControlled = propsIsChecked != null;
  const isChecked = isControlled ? propsIsChecked : stateIsChecked;

  function handleOnClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    if (!isControlled) {
      setIsChecked((prevState) => !prevState);
    }

    return onChange?.(event);
  }

  return (
    <div className={styles.wrapper({ isChecked })} onClick={handleOnClick}>
      <input
        className={styles.checkbox}
        type='checkbox'
        aria-checked={isChecked}
      />
      <Checkmark className={styles.checkmark({ isChecked })} />
    </div>
  );
};

export { Checkbox };
