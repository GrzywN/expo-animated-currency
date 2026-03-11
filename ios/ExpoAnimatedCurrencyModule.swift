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
        }
    }
}
