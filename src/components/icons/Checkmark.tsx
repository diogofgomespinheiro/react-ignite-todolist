import * as React from 'react';

type Props = React.SVGAttributes<SVGElement>;

const Checkmark = (props: Props): React.ReactElement<Props> => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='10'
    height='7'
    fill='none'
    viewBox='0 0 10 7'
    {...props}
  >
    <path
      fill='#F2F2F2'
      d='M8.43.342L4.1 4.674 1.616 2.192l-.836.835L4.1 6.346l5.167-5.168-.835-.836z'
    ></path>
  </svg>
);

export { Checkmark };
