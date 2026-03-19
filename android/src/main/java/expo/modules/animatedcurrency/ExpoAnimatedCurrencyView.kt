package expo.modules.animatedcurrency

import android.content.Context
import android.os.Build
import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.text.BasicText
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.BlurredEdgeTreatment
import androidx.compose.ui.draw.blur
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView
import java.text.NumberFormat
import java.util.Currency
import java.util.Locale

private const val ANIM_DURATION_MS = 300
private const val BLUR_DURATION_MS = 200

class ExpoAnimatedCurrencyView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  private val isBlurSupported = Build.VERSION.SDK_INT >= Build.VERSION_CODES.S
  private val valueState = mutableStateOf(0.0)
  private val currencyState = mutableStateOf("USD")
  private val localeState = mutableStateOf("en-US")
  private val fontSizeState = mutableStateOf<Double?>(null)
  private val fontWeightState = mutableStateOf<String?>(null)
  private val colorArgbState = mutableStateOf<Int?>(null)

  init {
    ComposeView(context).also { cv ->
      cv.setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnDetachedFromWindowOrReleasedFromPool)
      cv.setContent {
        val value by valueState
        val currency by currencyState
        val locale by localeState
        val fontSize by fontSizeState
        val fontWeight by fontWeightState
        val colorArgb by colorArgbState

        val formatted = remember(value, currency, locale) {
          formatCurrency(value, currency, locale)
        }

        val textStyle = remember(fontSize, fontWeight, colorArgb) {
          TextStyle(
            fontSize = fontSize?.sp ?: 34.sp,
            fontWeight = resolveFontWeight(fontWeight),
            color = colorArgb?.let { Color(it) } ?: Color.Unspecified
          )
        }

        Row(
          verticalAlignment = Alignment.CenterVertically,
          modifier = Modifier.graphicsLayer { clip = false }
        ) {
          formatted.forEachIndexed { index, char ->
            key(index) {
              if (char.isDigit()) {
                AnimatedContent(
                  targetState = char,
                  transitionSpec = {
                    (slideInVertically(tween(ANIM_DURATION_MS)) { it / 3 } + fadeIn(tween(ANIM_DURATION_MS))) togetherWith
                      (slideOutVertically(tween(ANIM_DURATION_MS)) { -it / 3 } + fadeOut(tween(ANIM_DURATION_MS)))
                  },
                  label = "digit_$index"
                ) { digit ->
                  val blurRadius = remember { Animatable(8f) }
                  LaunchedEffect(Unit) {
                    blurRadius.animateTo(0f, tween(BLUR_DURATION_MS, easing = FastOutSlowInEasing))
                  }
                  val blurModifier = if (isBlurSupported) {
                    Modifier.blur(blurRadius.value.dp, BlurredEdgeTreatment.Unbounded)
                  } else {
                    Modifier.graphicsLayer { alpha = 1f - (blurRadius.value / 8f) }
                  }
                  BasicText(text = digit.toString(), style = textStyle, modifier = blurModifier)
                }
              } else {
                BasicText(text = char.toString(), style = textStyle)
              }
            }
          }
        }
      }

      addView(cv, LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT))
    }
  }

  fun setValue(v: Double) { if (valueState.value != v) valueState.value = v }
  fun setCurrency(c: String) { if (currencyState.value != c) currencyState.value = c }
  fun setLocale(l: String) { if (localeState.value != l) localeState.value = l }
  fun setFontSize(s: Double) { if (fontSizeState.value != s) fontSizeState.value = s }
  fun setFontWeight(w: String) { if (fontWeightState.value != w) fontWeightState.value = w }
  fun setColor(c: Int) { if (colorArgbState.value != c) colorArgbState.value = c }

  private fun formatCurrency(value: Double, currencyCode: String, localeTag: String): String {
    val locale = Locale.forLanguageTag(localeTag)

    return try {
      NumberFormat.getCurrencyInstance(locale).apply {
        currency = Currency.getInstance(currencyCode)
      }.format(value)
    } catch (e: IllegalArgumentException) {
      val fallback = NumberFormat.getNumberInstance(locale).apply {
        minimumFractionDigits = 2
        maximumFractionDigits = 2
      }
      "$currencyCode ${fallback.format(value)}"
    }
  }

  private fun resolveFontWeight(weight: String?): FontWeight {
    return when (weight) {
      "100", "ultralight" -> FontWeight(100)
      "200", "thin" -> FontWeight(200)
      "300", "light" -> FontWeight(300)
      "400", "normal", "regular" -> FontWeight(400)
      "500", "medium" -> FontWeight(500)
      "600", "semibold" -> FontWeight(600)
      "700", "bold" -> FontWeight(700)
      "800", "heavy", "extrabold" -> FontWeight(800)
      "900", "black" -> FontWeight(900)
      else -> FontWeight(700)
    }
  }
}
