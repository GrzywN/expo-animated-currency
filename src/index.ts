// Reexport the native module. On web, it will be resolved to ExpoAnimatedCurrencyModule.web.ts
// and on native platforms to ExpoAnimatedCurrencyModule.ts
export { default } from './ExpoAnimatedCurrencyModule';
export { default as ExpoAnimatedCurrencyView } from './ExpoAnimatedCurrencyView';
export * from './ExpoAnimatedCurrency.types';
