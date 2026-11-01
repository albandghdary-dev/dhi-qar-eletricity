export const BILL_INQUIRY_EVENT = 'dhiqar:bill-inquiry'

export function requestBillInquiry(subscriberId: string) {
  window.dispatchEvent(new CustomEvent<string>(BILL_INQUIRY_EVENT, { detail: subscriberId }))
  document.getElementById('bill-inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export function toWesternDigits(value: string) {
  return value.replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
}

export function toArabicDigits(value: string | number) {
  return String(value).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)])
}
