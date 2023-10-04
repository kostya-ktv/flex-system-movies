import { SWRProvider } from './swr.provider';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SWRProvider>{children}</SWRProvider>;
};
export default AppProviders;
