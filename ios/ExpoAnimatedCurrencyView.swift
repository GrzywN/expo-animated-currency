import ExpoModulesCore
import SwiftUI

private class CurrencyState: ObservableObject {
    @Published var value: Double = 0
    @Published var currencyCode: String = "USD"
    @Published var locale: String = "en-US"
}

private struct CurrencyDisplayView: View {
    @ObservedObject var state: CurrencyState

    private var formattedValue: String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.locale = Locale(identifier: state.locale)
        formatter.currencyCode = state.currencyCode
        return formatter.string(from: state.value as NSNumber) ?? ""
    }

    var body: some View {
        Group {
            if #available(iOS 17.0, *) {
                Text(formattedValue)
                    .contentTransition(.numericText(value: state.value))
                    .animation(.default, value: state.value)
                    .font(.largeTitle)
                    .fontWeight(.bold)
            } else {
                Text(formattedValue)
                    .font(.largeTitle)
                    .fontWeight(.bold)
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
}
