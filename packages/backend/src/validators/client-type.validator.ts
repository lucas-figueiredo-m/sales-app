import { ClientType } from '@sales-app/types';
import {
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsValidClientType', async: false })
class ClientTypeValidator implements ValidatorConstraintInterface {
  validate(type: ClientType): boolean {
    return type === ClientType.Large || type === ClientType.Small;
  }
  defaultMessage(): string {
    return 'Insert a valid client type';
  }
}

export const IsValidClientType = () => Validate(ClientTypeValidator);
