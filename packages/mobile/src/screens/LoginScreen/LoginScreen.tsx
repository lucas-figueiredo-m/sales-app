import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { createThemedStyles, useThemedStyles } from '@mobile/hooks';
import { Button, Form } from '@sales-app/ui-mobile';
import { Colors } from '@mobile/theme';
import { validateEmail } from '@mobile/utils';
import { useLogin } from './hooks/useLogin';
import { useNavigation } from '@react-navigation/native';
import { MainRoutes, MainStackNavigation } from '@sales-app/types';

type LoginScreenNavigation = MainStackNavigation<MainRoutes.Login>;

export const LoginScreen: React.FC = () => {
  const styles = useThemedStyles(themedStyles);
  const { loading, error, request } = useLogin();
  const { navigate } = useNavigation<LoginScreenNavigation>();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const { email, password } = data;
      await request(email, password);
      navigate(MainRoutes.Tabs);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Form formData={{ email: 'test@test.com', password: '12345' }}>
        {({ control, errors, handleSubmit }) => (
          <View style={styles.form}>
            <Form.Field
              control={control}
              rules={{
                required: 'Informe seu e-mail',
                validate: validateEmail,
              }}
              error={errors?.email?.message}
              name="email"
              placeholder="E-mail"
            />
            <Form.Field
              control={control}
              rules={{
                required: 'Insira sua senha',
              }}
              error={errors?.password?.message}
              name="password"
              placeholder="Password"
            />
            <Button.Large
              t="Login"
              loading={loading}
              backgroundColor={Colors.Aqua}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        )}
      </Form>
    </SafeAreaView>
  );
};

const themedStyles = createThemedStyles(({ colors, spacing }) => ({
  root: {
    flex: 1,
    backgroundColor: colors.CommonColors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: spacing.md,
    width: '100%',
  },
}));
