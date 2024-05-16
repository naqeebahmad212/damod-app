"use client";

import { useRouter } from "next/navigation";
import logowhite from "@/images/white-logo.png";
import Image from "next/image";
import hello from "@/images/admin-bg.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authApi } from "../../../api";

export default function Loginadmin() {
  const router = useRouter();

  const handleSubmitForm = async (values: any) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await authApi.login(payload);
      if (res?.result?.refreshToken) {
        typeof window !== 'undefined'?window.localStorage.setItem("adminToken", res?.result?.refreshToken):null;
        router.push("./dashboard");
      } else {
        console.log("invalid Crdentials");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div
      style={{
        backgroundImage: `url(${hello.src})`,
      }}
      className="min-h-screen font-Fahkwang grid place-content-center bg-cover bg-no-repeat bg-center"
    >
      <div className="flex justify-center">
        <Image src={logowhite} alt="Logo" className="w-60 h-auto"/>
      </div>
      <div className="bg-[#003053] p-10 mt-5 rounded-lg space-y-5 border border-white border-opacity-25">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white text-lg mb-2">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full h-10 rounded-md bg-white bg-opacity-50 px-5"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="password" className="text-white text-lg mb-2">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full h-10 rounded-md bg-white bg-opacity-50 px-5"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  name="sbtn"
                  className="bg-white text-black w-20 h-10 rounded-lg font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
