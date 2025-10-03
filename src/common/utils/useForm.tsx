import { useState } from "react";
import { notification } from "antd";
import i18next from 'i18next';

interface IValues {
  name: string;
  email: string;
  message: string;
  questionType: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
  questionType: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const formDataEmail = {
      service_id: 'service_366b8gr',
      template_id: 'template_lo18r9h',
      user_id: '413cSB26I7mY7PXDp',
      template_params: {
          'from_name': values.name,
          'reply_to': values.email,
          'contact_to': values.questionType,
          'message': values.message,
      }
    }
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));
    console.log(formState.values)

    const url = "https://api.emailjs.com/api/v1.0/email/send";

    try {
      if (Object.values(errors).every((error) => error === "")) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataEmail),
        });

        if (!response.ok) {
          notification["error"]({
            message: "Error",
            description: i18next.t("Send Email Error"),
          });
        } else {
          event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));

          notification["success"]({
            message: "Success",
            description: i18next.t("Send Email Success"),
          });
        }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: i18next.t("Send Email Error"),
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  const handleChangeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleChangeSelect,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
