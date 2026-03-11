export default function AnimatedCurrency(): never {
  throw new Error(
    '[expo-animated-currency] AnimatedCurrency is not supported on Android.\n' +
      'Use Platform.select() to conditionally render it only on iOS:\n\n' +
      '  const CurrencyDisplay = Platform.select({\n' +
      "    ios: () => require('expo-animated-currency').AnimatedCurrencyView,\n" +
      "    default: () => require('./YourFallback').default,\n" +
      '  })();\n'
  );
}
