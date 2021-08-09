import i18next from "i18next"
import detector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import en from "./en"
import vi from "./vi"

const resources = {
  vi: {
    translation: vi,
  },
  en: {
    translation: en,
  },
}

i18next.use(detector).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
})
