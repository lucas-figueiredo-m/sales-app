import { Label, SVG } from '@sales-app/ui-mobile';
import { defaultHitSlop } from '@mobile/constants';
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
  icon?: React.ReactNode;
}

export const Header: React.FC<Props> = ({ onLeftPress, label }) => {
  const { Font, Layout } = useTheme();

  return (
    <View style={Layout.rows.verticalCenter}>
      <Pressable onPress={onLeftPress} hitSlop={defaultHitSlop}>
        {/* <SVG xml={icon as string} width={30} height={30} color={Colors.Black} /> */}
      </Pressable>
      <Label.H3 t={label} style={Font.transform.uppercase} />
    </View>
  );
};
