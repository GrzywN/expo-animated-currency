import { type ComponentType } from 'react';
import { requireNativeView } from 'expo';

import { AnimatedCurrencyProps } from './animated-currency.types';

const NativeView: ComponentType<AnimatedCurrencyProps> =
  requireNativeView('AnimatedCurrency');

export default function AnimatedCurrency(props: AnimatedCurrencyProps) {
  return <NativeView {...props} />;
}
