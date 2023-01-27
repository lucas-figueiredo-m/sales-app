import {
  createThemedStyles,
  useColorScheme,
  useThemedStyles,
} from '@mobile/hooks';
import { Translation } from '@sales-app/types';
import { Label, SVG } from '@sales-app/ui-mobile';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type MenuItemProps = {
  label: Translation;
  icon: string;
  onPress: () => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({ label, icon, onPress }) => {
  const styles = useThemedStyles(themedStyles);
  const colors = useColorScheme();
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <SVG
        xml={icon}
        width={24}
        height={24}
        color={colors.CommonColors.Black}
        style={styles.icon}
      />
      <Label.H3 t={label} />
    </TouchableOpacity>
  );
};

const themedStyles = createThemedStyles(({ colors, width, spacing }) => ({
  root: {
    width,
    paddingHorizontal: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  icon: {
    marginRight: spacing.sm,
  },
}));
