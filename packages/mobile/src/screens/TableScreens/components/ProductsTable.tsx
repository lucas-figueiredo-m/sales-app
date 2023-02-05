import { Product } from '@mobile/types';
import withObservables, { ObservableifyProps } from '@nozbe/with-observables';
import { Text } from 'react-native';

interface Props {
  products: Product[];
}

type InputProps = ObservableifyProps<Props, 'products'>;

const ProductTableToObserve: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <Text>{product.name}</Text>
      ))}
    </>
  );
};

const enhance = withObservables(['products'], ({ products }: InputProps) => ({
  products,
}));

export const ProductTable = enhance(ProductTableToObserve);
