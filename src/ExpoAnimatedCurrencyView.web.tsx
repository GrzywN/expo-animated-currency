import * as React from 'react';

import { ExpoAnimatedCurrencyViewProps } from './ExpoAnimatedCurrency.types';

export default function ExpoAnimatedCurrencyView(props: ExpoAnimatedCurrencyViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
