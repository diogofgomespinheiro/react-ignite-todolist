import * as React from 'react';

type Props = React.SVGAttributes<SVGElement>;

const TrashIcon = (props: Props): React.ReactElement<Props> => (
  <svg width={13} height={14} xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.202 4.985h-1.33v5.522h1.33V4.985ZM5.462 4.985h-1.33v5.522h1.33V4.985Z'
      fill='currentColor'
    />
    <path
      d='M12.478 2.167a.644.644 0 0 0-.46-.605.62.62 0 0 0-.184-.045H8.287a2.144 2.144 0 0 0-4.1 0H.638a.641.641 0 0 0-.172.027H.452a.641.641 0 0 0 .09 1.246l.711 9.743A1.512 1.512 0 0 0 2.683 14h7.104a1.512 1.512 0 0 0 1.433-1.467l.708-9.734a.638.638 0 0 0 .55-.632Zm-6.241-.952a.937.937 0 0 1 .689.302H5.547a.932.932 0 0 1 .69-.302Zm3.55 11.575H2.683c-.081 0-.208-.133-.223-.344L1.758 2.81h8.957l-.701 9.635c-.016.211-.143.344-.227.344Z'
      fill='currentColor'
    />
  </svg>
);

export { TrashIcon };
