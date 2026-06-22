import privacyPolicyText from "../documents/privacy-policy.txt?raw";
import personalDataPolicyText from "../documents/personal-data-policy.txt?raw";
import termsOfUseText from "../documents/terms-of-use.txt?raw";

export const documents = {
  "/privacy-policy": {
    title: "Политика конфиденциальности",
    updatedAt: "Обновлено: 22 июня 2026",
    content: privacyPolicyText,
  },
  "/terms-of-use": {
    title: "Пользовательское соглашение",
    updatedAt: "Обновлено: 22 июня 2026",
    content: termsOfUseText,
  },
  "/personal-data-policy": {
    title: "Политика обработки персональных данных",
    updatedAt: "Обновлено: 22 июня 2026",
    content: personalDataPolicyText,
  },
} as const;

export type DocumentPath = keyof typeof documents;
