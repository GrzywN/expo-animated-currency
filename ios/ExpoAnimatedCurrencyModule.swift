import ExpoModulesCore

public class ExpoAnimatedCurrencyModule: Module {
    public func definition() -> ModuleDefinition {
        Name("AnimatedCurrency")

        View(ExpoAnimatedCurrencyView.self) {
            Prop("value") { (view: ExpoAnimatedCurrencyView, value: Double) in
                view.setValue(value)
            }
            Prop("currency") { (view: ExpoAnimatedCurrencyView, currency: String) in
                view.setCurrency(currency)
            }
            Prop("locale") { (view: ExpoAnimatedCurrencyView, locale: String) in
                view.setLocale(locale)
            }
            Prop("fontSize") { (view: ExpoAnimatedCurrencyView, fontSize: Double) in
                view.setFontSize(fontSize)
            }
            Prop("fontWeight") { (view: ExpoAnimatedCurrencyView, fontWeight: String) in
                view.setFontWeight(fontWeight)
            }
            Prop("color") { (view: ExpoAnimatedCurrencyView, color: UIColor) in
                view.setColor(color)
            }
        }
    }
}
