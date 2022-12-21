import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Translation } from '@sales-app/types';
import { useTheme } from '@mobile/hooks';
// import { RadioOn, RadioOff } from '@sales-app/icons/index';
import { Label } from '@sales-app/ui-mobile';
import { Colors } from '@mobile/theme';

type RadioButtonItemProps = {
  label: Translation;
  selected: boolean;
  color: Colors;
};

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({
  label,
  selected,
  color,
}) => {
  const { Layout } = useTheme();
  return (
    <View style={[Layout.rows.verticalCenter]}>
      {selected ? (
        <View />
      ) : (
        // <RadioOn
        //   width={20}
        //   height={20}
        //   color={color}
        //   fill={selected ? color : Colors.Transparent}
        // />
        <View />
        // <RadioOff
        //   width={20}
        //   height={20}
        //   color={color}
        //   fill={selected ? color : Colors.Transparent}
        // />
      )}
      <Label.H3 t={label} />
    </View>
  );
};

type RadioButtonProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const RadioButtonComponent: React.FC<RadioButtonProps> & {
  Item: React.ComponentType<RadioButtonItemProps>;
} = ({ style, children }) => {
  return <View style={style}>{children}</View>;
};

RadioButtonComponent.Item = RadioButtonItem;

export const RadioButton = RadioButtonComponent;
