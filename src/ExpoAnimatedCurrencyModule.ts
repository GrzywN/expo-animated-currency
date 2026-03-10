import { NativeModule, requireNativeModule } from 'expo';

import { ExpoAnimatedCurrencyModuleEvents } from './ExpoAnimatedCurrency.types';

declare class ExpoAnimatedCurrencyModule extends NativeModule<ExpoAnimatedCurrencyModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoAnimatedCurrencyModule>('ExpoAnimatedCurrency');
