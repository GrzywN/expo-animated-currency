# expo-animated-currency

Animated currency display as an Expo native module for React Native. On iOS it uses SwiftUI's `contentTransition(.numericText)` API; on Android it uses Jetpack Compose with per-digit slide/fade animations.

## Installation

```sh
npm install expo-animated-currency
```

Then run CocoaPods (iOS):

```sh
npx pod-install
```

## Usage

```tsx
import { AnimatedCurrency } from 'expo-animated-currency';

<AnimatedCurrency value={1299.99} currency="USD" locale="en-US" />
```

The displayed number animates whenever `value` changes.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | The numeric value to display. Changes animate. |
| `currency` | `CurrencyCode` | `"USD"` | ISO 4217 currency code. |
| `locale` | `LocaleIdentifier` | `"en-US"` | BCP 47 locale identifier. Controls formatting and symbol position. |
| `fontSize` | `number` | `34` | Font size in points/sp. |
| `fontWeight` | `TextStyle['fontWeight']` | `"bold"` | Font weight (`"100"`–`"900"`, `"bold"`, `"light"`, etc.). |
| `color` | `ColorValue` | system primary | Text color. |
| `style` | `StyleProp<ViewStyle>` | — | Style applied to the container view. |

## Animation

### iOS

| Version | Behavior |
|---|---|
| 17+ | `numericText(value:)` — digits animate with direction awareness (up/down) |
| 16 | `numericText()` — digits animate without direction hint |
| < 16 | No animation — text updates instantly |

### Android

All versions supported by Expo SDK. Each digit slides and fades independently using Jetpack Compose `AnimatedContent`. On Android 12+ (API 31) a blur effect is added to the incoming digit; on older versions a fade-in is used instead.

## Unknown currency codes

If an unrecognized ISO 4217 code is passed, both platforms fall back to decimal formatting with the code prepended — e.g. `XYZ 1,299.99` — instead of throwing.

## Types

```ts
import type { CurrencyCode, LocaleIdentifier, AnimatedCurrencyProps } from 'expo-animated-currency';
```

`CurrencyCode` — full ISO 4217 union with open-ended `string & {}` fallback for autocomplete.

`LocaleIdentifier` — BCP 47 union covering common language and language-region tags.
