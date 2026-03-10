import { registerWebModule, NativeModule } from 'expo';

import { ExpoAnimatedCurrencyModuleEvents } from './ExpoAnimatedCurrency.types';

class ExpoAnimatedCurrencyModule extends NativeModule<ExpoAnimatedCurrencyModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(
  ExpoAnimatedCurrencyModule,
  'ExpoAnimatedCurrencyModule'
);
