import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoAnimatedCurrencyViewProps } from './ExpoAnimatedCurrency.types';

const NativeView: React.ComponentType<ExpoAnimatedCurrencyViewProps> =
  requireNativeView('ExpoAnimatedCurrency');

export default function ExpoAnimatedCurrencyView(
  props: ExpoAnimatedCurrencyViewProps
) {
  return <NativeView {...props} />;
}
