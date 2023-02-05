import { Label, SVG } from '@sales-app/ui-mobile';
import { defaultHitSlop } from 'packages/mobile/src/constants';
import React from 'react';
import { View, Pressable } from 'react-native';
import { Translation } from '@sales-app/types';
// import x from '@sales-app/icons/x.svg';
import { Colors } from '@mobile/theme';
import { useTheme } from '@mobile/hooks';
// import { X } from '@sales-app/icons/index';

interface Props {
  onLeftPress: () => void;
  label: Translation;
  icon?: string;
}

export const Header: React.FC<Props> = ({ onLeftPress, label, icon }) => {
  const { Font, Layout } = useTheme();

  return (
    <View style={Layout.rows.verticalCenter}>
      {icon && (
        <Pressable onPress={onLeftPress} hitSlop={defaultHitSlop}>
          <SVG xml={icon} width={30} height={30} color={Colors.Black} />
        </Pressable>
      )}
      <Label.H3 t={label} style={Font.transform.uppercase} />
    </View>
  );
};
