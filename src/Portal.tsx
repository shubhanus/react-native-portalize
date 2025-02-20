import * as React from 'react';

import { Consumer } from './Consumer';
import { Context } from './Host';

export interface IPortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: IPortalProps): JSX.Element => (
  <Context.Consumer>
    {(manager): JSX.Element => <Consumer manager={manager}>{children}</Consumer>}
  </Context.Consumer>
);

export default Portal;
