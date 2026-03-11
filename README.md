# expo-animated-currency

SwiftUI numeric text animation wrapped as an Expo native module for React Native — a practical bridge between SwiftUI's `contentTransition` API and the JS world.

> **iOS only.** Android and web are not supported. See [Platform handling](#platform-handling) for how to provide a fallback.

## Installation

```sh
npm install expo-animated-currency
```

Then run CocoaPods:

```sh
npx pod-install
```

## Usage

```tsx
import { AnimatedCurrency } from 'expo-animated-currency';

<AnimatedCurrency value={1299.99} currency="USD" locale="en-US" />
```

The displayed number animates whenever `value` changes using SwiftUI's `contentTransition(.numericText)`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | The numeric value to display. Changes animate. |
| `currency` | `CurrencyCode` | `"USD"` | ISO 4217 currency code. |
| `locale` | `LocaleIdentifier` | `"en-US"` | BCP 47 locale identifier. Controls formatting and symbol position. |
| `fontSize` | `number` | `34` | Font size in points. |
| `fontWeight` | `TextStyle['fontWeight']` | `"bold"` | Font weight (`"100"`–`"900"`, `"bold"`, `"light"`, etc.). |
| `color` | `ColorValue` | system primary | Text color. |
| `style` | `StyleProp<ViewStyle>` | — | Style applied to the container view. |

## Platform handling

`AnimatedCurrency` is iOS-only. On other platforms use `Platform.OS` to render a fallback:

```tsx
import { AnimatedCurrency } from 'expo-animated-currency';
import { Platform, Text } from 'react-native';

const CurrencyDisplay =
  Platform.OS === 'ios' ? AnimatedCurrency : MyFallbackComponent;
```

On Android and web, importing the package is safe — Metro resolves platform-specific stubs that only throw when rendered, not on import.

## Animation tiers

| iOS version | Behavior |
|---|---|
| 17+ | `numericText(value:)` — digits animate with direction awareness (up/down) |
| 16 | `numericText()` — digits animate without direction hint |
| 15.x | No animation — text updates instantly |

## Types

```ts
import type { CurrencyCode, LocaleIdentifier, AnimatedCurrencyProps } from 'expo-animated-currency';
```

`CurrencyCode` — full ISO 4217 union with open-ended `string & {}` fallback for autocomplete.

`LocaleIdentifier` — BCP 47 union covering common language and language-region tags.
