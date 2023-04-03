import * as React from 'react';

import { PlusIcon } from '@/components/icons';
import { Button } from '@/components/atoms';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CreateButton = (props: Props): React.ReactElement => {
  return (
    <Button {...props}>
      Criar <PlusIcon />
    </Button>
  );
};

export { CreateButton };
