import i18next from "i18next"
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

i18next.use(initReactI18next).init({
  lng: "vi",
  resources,
})
