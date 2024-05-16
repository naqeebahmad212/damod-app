"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup"; // Import Yup for schema validation
import Image from "next/image";
import login from "@/images/login.png";
import { emailApi } from "@/api";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handleSubmit = async (values: any) => {
    // Handle form submission here
    const payload = {
      email: values.email,
    };
    try {
      const res = await emailApi.sendPasswordEmail(payload);
      if (res.status == 404) {
        setErrorMessage(true);
        setTimeout(() => {
          router.push("/register");
        }, 3000);
      } else if (res.status == 200) {
        setSuccessMessage(true);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Define Yup schema for form validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <div className="min-h-screen font-Fahkwang grid place-content-center">
      <div className="max-w-6xl mx-auto bg-[#f0f0f0] rounded-3xl flex items-center justify-between">
        <div className="w-1/2 mx-10 py-8">
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema} // Pass Yup schema to validationSchema prop
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              await handleSubmit(values);
              resetForm();
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="max-w-md mx-auto flex justify-center bg-white rounded-3xl flex-col  pb-10">
                  <span className="w-72 h-14 rounded-full bg-white text-center grid place-content-center text-xl -mt-5 border-4 border-[#F8F8F8] mx-auto mb-10 font-bold">
                    Forgot Password
                  </span>
                  <div className="flex flex-col justify-center">
                    <div className="mb-10 max-w-96 mx-auto w-full">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="border-b border-black bg-transparent pb-2 w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className=" max-w-96 mx-auto w-full flex justify-between item-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#F1F1F1] w-40 h-10 rounded-full flex justify-center overflow-visible  items-center"
                      >
                        <span className="pr-2">Send Email</span>
                        <span className=" h-10 w-10 rounded-full grid place-content-center border-2 border-white -mr-5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    {successMessage && (
                      <p className="text-green-600">
                        {" "}
                        Email Sent SuccessFully!
                      </p>
                    )}
                    {errorMessage && (
                      <p className="text-red-600">
                        {" "}
                        User Not Registered Please Register !!
                      </p>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="w-1/2">
          <Image
            src={login}
            alt="Image of Login Page"
            width={575}
            height={575}
          />
        </div>
      </div>
    </div>
  );
}
