import { ProductCategories } from '@sales-app/types';
import {
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsValidCategory', async: false })
class ValidProductCategoryValidator implements ValidatorConstraintInterface {
  validate(category: ProductCategories): boolean {
    return (
      category === ProductCategories.Bovine ||
      category === ProductCategories.Swine ||
      category === ProductCategories.Chicken
    );
  }
  defaultMessage(): string {
    return 'Category not valid';
  }
}

export const IsValidProductCategory = () =>
  Validate(ValidProductCategoryValidator);
