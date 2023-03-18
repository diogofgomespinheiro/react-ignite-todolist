import * as React from 'react';

type Props = React.SVGAttributes<SVGElement>;

const Checkmark = (props: Props): React.ReactElement<Props> => (
  <svg
    width={13}
    height={9}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.99.618 5.034 6.575 1.621 3.16.47 4.311l4.563 4.562 7.106-7.106L10.99.618Z'
      fill='#F2F2F2'
    />
  </svg>
);

export { Checkmark };
