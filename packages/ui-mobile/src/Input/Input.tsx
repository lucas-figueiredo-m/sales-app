import { useTheme, useTranslation } from '@mobile/hooks';

import React, { useRef } from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  View,
  Pressable,
  ViewStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  interpolate,
} from 'react-native-reanimated';
import { Colors } from '@mobile/theme';
import { FontSize } from '@mobile/theme/fonts';
import { Metrics } from '@mobile/theme/spacing';
import { Translation } from '@sales-app/types';

interface InputState {
  value: string;
  error?: string;
}

type Props = TextInputProps & {
  state: InputState;
  placeholder: Translation;
  required?: boolean;
  customContainerStyle?: StyleProp<ViewStyle>;
  customInputStyle?: StyleProp<TextStyle>;
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 5,
    borderWidth: 1,
  },
  placeholder: {
    position: 'absolute',
    backgroundColor: Colors.White,
  },
});

enum InputStatus {
  Blur,
  Focus,
  Error,
}

export const Input: React.FC<Props> = ({
  state,
  placeholder,
  customInputStyle,
  customContainerStyle,
  required,
  ...props
}) => {
  const { Spacing, Font } = useTheme();
  const placeholderStatus = useSharedValue<InputStatus>(InputStatus.Blur);
  const t = useTranslation();

  const InputRef = useRef<TextInput>(null);

  const containerStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Colors.MediumGrey, Colors.Flame, Colors.DarkRed]
    );

    return { borderColor };
  });

  const placeholderStyle = useAnimatedStyle(() => {
    const fontColor = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Colors.MediumGrey, Colors.Flame, Colors.DarkRed]
    );

    const bottom = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [
        Metrics.xs,
        2 * Metrics.xs + FontSize.lg - FontSize.md / 2,
        2 * Metrics.xs + FontSize.lg - FontSize.md / 2,
      ]
    );

    const left = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Metrics.sm, 2 * Metrics.xxs, 2 * Metrics.xxs]
    );

    const fontSize = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [FontSize.md, FontSize.sm, FontSize.sm]
    );

    return {
      color: String(fontColor),
      bottom,
      left,
      fontSize,
    };
  });

  return (
    <View style={[Spacing.paddings.vertical.xs, customContainerStyle]}>
      <Animated.View style={[styles.root, containerStyle]}>
        <TextInput
          style={[
            Spacing.paddings.vertical.xs,
            Spacing.paddings.horizontal.sm,
            Font.family.Montserrat,
            Font.size.md,
            customInputStyle,
          ]}
          ref={InputRef}
          onFocus={() =>
            (placeholderStatus.value = withTiming(InputStatus.Focus, {
              duration: 200,
            }))
          }
          onBlur={() =>
            (placeholderStatus.value = withTiming(InputStatus.Blur, {
              duration: 200,
            }))
          }
          value={state.value}
          {...props}
        />
        <Pressable onPress={() => InputRef.current?.focus()}>
          <Animated.Text
            style={[
              styles.placeholder,
              placeholderStyle,
              Font.family.Montserrat,
              Font.weight.semibold,
              Spacing.paddings.horizontal.xs,
            ]}
          >
            {required ? t(placeholder) + '*' : t(placeholder)}
          </Animated.Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};
