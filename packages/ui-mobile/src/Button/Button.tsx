import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Label } from '@sales-app/ui-mobile';
import { Colors } from '@mobile/theme';
import { useTheme } from '@mobile/hooks';
import { Translation } from '@sales-app/types';

interface ButtonProps extends PressableProps {
  backgroundColor: Colors;
  t: Translation;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelColor?: Colors;
}

const ButtonBase: React.FC<ButtonProps> = ({
  backgroundColor,
  t,
  labelStyle,
  labelColor,
  style,
  ...props
}) => {
  return (
    <Pressable {...props} style={[style, { backgroundColor }]}>
      <Label.H3 t={t} color={labelColor} style={labelStyle} />
    </Pressable>
  );
};

const Large: React.FC<ButtonProps> = (props) => {
  const { Layout, Spacing } = useTheme();
  return (
    <ButtonBase
      {...props}
      style={[
        Layout.sizes.fullWidth,
        Spacing.paddings.vertical.sm,
        Layout.alignment.center,
        Spacing.border.md,
      ]}
    />
  );
};

export const Button = {
  Large,
};
