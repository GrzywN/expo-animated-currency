import ExpoModulesCore
import SwiftUI

private class CurrencyState: ObservableObject {
    @Published var value: Double = 0
    @Published var currencyCode: String = "USD"
    @Published var locale: String = "en-US"
    @Published var fontSize: Double? = nil
    @Published var fontWeight: String? = nil
    @Published var color: UIColor? = nil
}

private struct CurrencyDisplayView: View {
    @ObservedObject var state: CurrencyState

    private var formattedValue: String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.locale = Locale(identifier: state.locale)
        formatter.currencyCode = state.currencyCode

        if let result = formatter.string(from: state.value as NSNumber), !result.isEmpty {
            return result
        }

        #if DEBUG
        print("[expo-animated-currency] Unknown currency code '\(state.currencyCode)' or locale '\(state.locale)' — falling back to decimal formatting.")
        #endif

        let fallback = NumberFormatter()
        fallback.numberStyle = .decimal
        fallback.locale = Locale(identifier: state.locale)
        fallback.minimumFractionDigits = 2
        fallback.maximumFractionDigits = 2

        let number = fallback.string(from: state.value as NSNumber) ?? "\(state.value)"

        return "\(state.currencyCode) \(number)"
    }

    private var resolvedFont: Font {
        if let size = state.fontSize {
            return .system(size: size)
        }

        return .largeTitle
    }

    private var resolvedFontWeight: Font.Weight {
        switch state.fontWeight {
            case "100", "ultralight": return .ultraLight
            case "200", "thin": return .thin
            case "300", "light": return .light
            case "400", "normal", "regular": return .regular
            case "500", "medium": return .medium
            case "600", "semibold": return .semibold
            case "700", "bold": return .bold
            case "800", "heavy", "extrabold": return .heavy
            case "900", "black": return .black
            default: return .bold
        }
    }

    private var resolvedColor: Color {
        if let uiColor = state.color {
            return Color(uiColor)
        }

        return Color.primary
    }

    var body: some View {
        Group {
            if #available(iOS 17.0, *) {
                Text(formattedValue)
                    .contentTransition(.numericText(value: state.value))
                    .animation(.default, value: state.value)
                    .font(resolvedFont)
                    .fontWeight(resolvedFontWeight)
                    .foregroundStyle(resolvedColor)
            } else if #available(iOS 16.0, *) {
                Text(formattedValue)
                    .contentTransition(.numericText())
                    .animation(.default, value: state.value)
                    .font(resolvedFont)
                    .fontWeight(resolvedFontWeight)
                    .foregroundStyle(resolvedColor)
            } else {
                Text(formattedValue)
                    .font(resolvedFont)
                    .fontWeight(resolvedFontWeight)
                    .foregroundStyle(resolvedColor)
            }
        }
    }
}

class ExpoAnimatedCurrencyView: ExpoView {
    private let state = CurrencyState()
    private var hostingController: UIHostingController<CurrencyDisplayView>!

    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        hostingController = UIHostingController(rootView: CurrencyDisplayView(state: state))
        hostingController.view.backgroundColor = .clear
        addSubview(hostingController.view)
        hostingController.view.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            hostingController.view.topAnchor.constraint(equalTo: topAnchor),
            hostingController.view.bottomAnchor.constraint(equalTo: bottomAnchor),
            hostingController.view.leadingAnchor.constraint(equalTo: leadingAnchor),
            hostingController.view.trailingAnchor.constraint(equalTo: trailingAnchor),
        ])
    }

    func setValue(_ newValue: Double) {
        withAnimation {
            state.value = newValue
        }
    }

    func setCurrency(_ newCurrency: String) {
        state.currencyCode = newCurrency
    }

    func setLocale(_ newLocale: String) {
        state.locale = newLocale
    }

    func setFontSize(_ size: Double) {
        state.fontSize = size
    }

    func setFontWeight(_ weight: String) {
        state.fontWeight = weight
    }

    func setColor(_ uiColor: UIColor) {
        state.color = uiColor
    }
}
