import { createBoard } from '@wixc3/react-board';
import { MyPolarisComponent } from '../../../src/components/my-polaris-component/my-polaris-component';

export default createBoard({
    name: 'MyPolarisComponent',
    Board: () => <MyPolarisComponent />,
});
