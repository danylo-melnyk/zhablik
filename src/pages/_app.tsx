import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import TaskPopupContextProvider from '@/hooks/use-add-task/toast-context';
import { store } from '@/redux';
import theme from '@/styles/theme';

import '@/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TaskPopupContextProvider>
          <Component {...pageProps} />
        </TaskPopupContextProvider>
      </ThemeProvider>
    </Provider>
  );
}
