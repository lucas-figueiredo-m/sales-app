import React from 'react';
import { View } from 'react-native';
import { Input, RadioButton } from '@sales-app/ui-mobile';
import { Colors } from '@mobile/theme';

export const EmployeeCard: React.FC = () => {
  return (
    <View>
      <Input state={{ value: '' }} placeholder="components.employeeCard.name" />
      <Input
        state={{ value: '' }}
        placeholder="components.employeeCard.phone"
      />
      <RadioButton>
        <RadioButton.Item
          label="components.employeeCard.name"
          selected={true}
          color={Colors.Flame}
        />
        <RadioButton.Item
          label="components.employeeCard.name"
          selected={false}
          color={Colors.Flame}
        />
      </RadioButton>
    </View>
  );
};
