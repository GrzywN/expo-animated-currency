import { NativeModule, requireNativeModule } from 'expo';

import { AnimatedCurrencyModuleEvents } from './animated-currency.types';

declare class AnimatedCurrencyModule extends NativeModule<AnimatedCurrencyModuleEvents> {}

export default requireNativeModule<AnimatedCurrencyModule>('AnimatedCurrency');
