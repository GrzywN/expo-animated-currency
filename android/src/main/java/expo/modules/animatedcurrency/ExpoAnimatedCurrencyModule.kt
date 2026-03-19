package expo.modules.animatedcurrency

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAnimatedCurrencyModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("AnimatedCurrency")

    View(ExpoAnimatedCurrencyView::class) {
      Prop("value") { view: ExpoAnimatedCurrencyView, value: Double ->
        view.setValue(value)
      }
      Prop("currency") { view: ExpoAnimatedCurrencyView, currency: String ->
        view.setCurrency(currency)
      }
      Prop("locale") { view: ExpoAnimatedCurrencyView, locale: String ->
        view.setLocale(locale)
      }
      Prop("fontSize") { view: ExpoAnimatedCurrencyView, fontSize: Double ->
        view.setFontSize(fontSize)
      }
      Prop("fontWeight") { view: ExpoAnimatedCurrencyView, fontWeight: String ->
        view.setFontWeight(fontWeight)
      }
      Prop("color") { view: ExpoAnimatedCurrencyView, color: Int ->
        view.setColor(color)
      }
    }
  }
}
