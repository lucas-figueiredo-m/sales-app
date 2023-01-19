import { StyleSheet } from 'react-native'

export enum FontFamily {
  Montserrat = 'Montserrat'
}

export enum FontSize {
  xxs = 8,
  xs = 10,
  sm = 12,
  md = 14,
  default = 16,
  lg = 18,
  xl = 20,
  xxl = 24,
  xxxl = 26,
  xxxxl = 30,
  title = 32
}

export default {
  family: StyleSheet.create({
    Montserrat: {
      fontFamily: FontFamily.Montserrat
    }
  }),
  size: StyleSheet.create({
    xxs: { fontSize: FontSize.xxs },
    xs: { fontSize: FontSize.xs },
    sm: { fontSize: FontSize.sm },
    md: { fontSize: FontSize.md },
    default: { fontSize: FontSize.default },
    lg: { fontSize: FontSize.lg },
    xl: { fontSize: FontSize.xl },
    xxl: { fontSize: FontSize.xxl },
    xxxl: { fontSize: FontSize.xxxl },
    xxxxl: { fontSize: FontSize.xxxxl },
    title: { fontSize: FontSize.title }
  }),
  weight: StyleSheet.create({
    black: { fontWeight: '900' },
    extraBold: { fontWeight: '800' },
    bold: { fontWeight: '700' },
    semibold: { fontWeight: '600' },
    medium: { fontWeight: '500' },
    regular: { fontWeight: '400' },
    thin: { fontWeight: '300' },
    light: { fontWeight: '200' },
    extraLight: { fontWeight: '100' }
  }),
  alignment: StyleSheet.create({
    left: { textAlign: 'left' },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    justify: { textAlign: 'justify' }
  }),
  transform: StyleSheet.create({
    uppercase: { textTransform: 'uppercase' },
    lowercase: { textTransform: 'lowercase' },
    capitalize: { textTransform: 'capitalize' },
    none: { textTransform: 'none' }
  })
}
