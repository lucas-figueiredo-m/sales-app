import { createNavigationContainerRef } from '@react-navigation/native';
import { MainRoutes, MainStackParams } from '@sales-app/types';

export const rootNavigationRef =
  createNavigationContainerRef<MainStackParams>();

export const useRootNavigator = () => {
  const navigate = (screen: MainRoutes) => {
    if (rootNavigationRef.isReady()) {
      rootNavigationRef.navigate(screen);
    }
  };

  return { navigate };
};
