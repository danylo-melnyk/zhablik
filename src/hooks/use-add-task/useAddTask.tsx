import { useContext } from 'react';

import { PopupContext } from '@/hooks/use-add-task/toast-context';

const useAddTask = () => {
  return useContext(PopupContext);
};

export default useAddTask;
