import React, { FC, PropsWithChildren, useState } from 'react';

import TaskPopup from '@/components/common/task-popup';

interface ToastContextType {
  hidePopup: () => void;
  showPopup: () => void;
}

export const PopupContext = React.createContext<ToastContextType>({
  hidePopup: () => {},
  showPopup: () => {},
});

const TaskPopupContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const hidePopup = () => setIsOpened(false);
  const showPopup = () => setIsOpened(true);

  return (
    <PopupContext.Provider value={{ hidePopup, showPopup }}>
      <TaskPopup open={isOpened} onClose={hidePopup} />
      {children}
    </PopupContext.Provider>
  );
};

export default TaskPopupContextProvider;
