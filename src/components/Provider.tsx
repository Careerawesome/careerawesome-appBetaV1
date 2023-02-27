import { Provider } from 'react-redux';
import initStore from '../Redux/store';
import { createWrapper } from "next-redux-wrapper";

function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={initStore}>{children}</Provider>;
}

const makeStore = () => initStore
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(Providers)