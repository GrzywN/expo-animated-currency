import type { StyleProp, ViewStyle } from 'react-native';

export type AnimatedCurrencyModuleEvents = Record<string, never>;

// prettier-ignore
/** ISO 4217 currency code */
export type CurrencyCode =
  | 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN'
  | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BOV'
  | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD'
  | 'CAD' | 'CDF' | 'CHE' | 'CHF' | 'CHW' | 'CLF' | 'CLP' | 'CNY' | 'COP'
  | 'COU' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK'
  | 'DJF' | 'DKK' | 'DOP' | 'DZD'
  | 'EGP' | 'ERN' | 'ETB' | 'EUR'
  | 'FJD' | 'FKP'
  | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD'
  | 'HKD' | 'HNL' | 'HTG' | 'HUF'
  | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK'
  | 'JMD' | 'JOD' | 'JPY'
  | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT'
  | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD'
  | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR'
  | 'MVR' | 'MWK' | 'MXN' | 'MXV' | 'MYR' | 'MZN'
  | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD'
  | 'OMR'
  | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG'
  | 'QAR'
  | 'RON' | 'RSD' | 'RUB' | 'RWF'
  | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLE' | 'SOS'
  | 'SRD' | 'SSP' | 'STN' | 'SVC' | 'SYP' | 'SZL'
  | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS'
  | 'UAH' | 'UGX' | 'USD' | 'USN' | 'UYI' | 'UYU' | 'UYW' | 'UZS'
  | 'VED' | 'VES' | 'VND' | 'VUV'
  | 'WST'
  | 'XAF' | 'XAG' | 'XAU' | 'XBA' | 'XBB' | 'XBC' | 'XBD' | 'XCD'
  | 'XDR' | 'XOF' | 'XPD' | 'XPF' | 'XPT' | 'XSU' | 'XTS' | 'XUA' | 'XXX'
  | 'YER'
  | 'ZAR' | 'ZMW' | 'ZWG'
  | (string & {});

// prettier-ignore
/**
 * BCP 47 locale identifier accepted by Swift's Locale(identifier:).
 * Language-only subtags (e.g. 'pl', 'de') are valid and use system defaults
 * for the region. Use language-region tags (e.g. 'pt-BR' vs 'pt-PT') when
 * regional formatting differences matter.
 */
export type LocaleIdentifier =
  | 'af' | 'am' | 'ar' | 'arn' | 'ary' | 'as' | 'az'
  | 'ba' | 'be' | 'bg' | 'bn' | 'bo' | 'br' | 'bs'
  | 'ca' | 'ckb' | 'co' | 'cs' | 'cy'
  | 'da' | 'de' | 'dsb' | 'dv'
  | 'el' | 'en' | 'es' | 'et' | 'eu'
  | 'fa' | 'fi' | 'fil' | 'fo' | 'fr' | 'fy'
  | 'ga' | 'gd' | 'gil' | 'gl' | 'gsw' | 'gu'
  | 'ha' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy'
  | 'id' | 'ig' | 'ii' | 'is' | 'it' | 'iu'
  | 'ja'
  | 'ka' | 'kk' | 'kl' | 'km' | 'kn' | 'ko' | 'kok' | 'ku' | 'ky'
  | 'lb' | 'lo' | 'lt' | 'lv'
  | 'mi' | 'mk' | 'ml' | 'mn' | 'moh' | 'mr' | 'ms' | 'mt' | 'my'
  | 'nb' | 'ne' | 'nl' | 'nn' | 'no'
  | 'oc' | 'or'
  | 'pa' | 'pap' | 'pl' | 'prs' | 'ps' | 'pt'
  | 'qu' | 'quc'
  | 'rm' | 'ro' | 'ru' | 'rw'
  | 'sa' | 'sah' | 'sd' | 'se' | 'si' | 'sk' | 'sl' | 'sma' | 'smj' | 'smn' | 'sms' | 'sq' | 'sr' | 'st' | 'sv' | 'sw' | 'syc'
  | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tl' | 'tn' | 'tr' | 'tt' | 'tzm'
  | 'ug' | 'uk' | 'ur' | 'uz'
  | 'vi' | 'wo' | 'xh' | 'yi' | 'yo' | 'zh' | 'zu'
  | 'de-AT' | 'de-CH' | 'de-DE'
  | 'en-AU' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-NZ' | 'en-US'
  | 'es-AR' | 'es-ES' | 'es-MX'
  | 'fr-BE' | 'fr-CA' | 'fr-CH' | 'fr-FR'
  | 'nl-BE' | 'nl-NL'
  | 'pt-BR' | 'pt-PT'
  | 'sr-Cyrl' | 'sr-Latn'
  | 'zh-Hans' | 'zh-Hant' | 'zh-HK' | 'zh-TW'
  | (string & {});

export interface AnimatedCurrencyProps {
  value: number;
  currency?: CurrencyCode;
  locale?: LocaleIdentifier;
  style?: StyleProp<ViewStyle>;
}
