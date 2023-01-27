import { createThemedStyles, useThemedStyles } from '@mobile/hooks';
import { Label } from '@sales-app/ui-mobile';
import React from 'react';
import { Switch, View } from 'react-native';

type SwitchItemProps = {
  onValueChange: (value: boolean) => void;
  value: boolean;
};

export const SwitchItem: React.FC<SwitchItemProps> = ({
  onValueChange,
  value,
}) => {
  const styles = useThemedStyles(themedStyles);
  return (
    <View style={styles.root}>
      <Label.H3 t="Login com biometria" />
      <Switch onValueChange={onValueChange} value={value} />
    </View>
  );
};

const themedStyles = createThemedStyles(({ colors, spacing }) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
  },
}));
