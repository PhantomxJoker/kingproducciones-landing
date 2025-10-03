import { validateProps } from "../../common/types";
import i18next from 'i18next';

export default function validate(values: validateProps) {
  let errors = {} as validateProps;
  if (!values.name) {
    errors.name = i18next.t("Name Required");
  }
  if (!values.email) {
    errors.email = i18next.t("Email Address Required");
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = i18next.t("Email Address Invalid");
  }
  if (!values.questionType) {
    errors.questionType = i18next.t("Question Type Required");
  }
  if (!values.message) {
    errors.message = i18next.t("Message Required");
  }
  return errors;
}
