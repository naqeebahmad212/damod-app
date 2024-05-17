"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup"; // Import Yup for schema validation
import Image from "next/image";
import login from "@/images/register.png";
import Link from "next/link";
import { authApi } from "@/api";
import bgregister from "@/images/diamond-bg-register.jpg";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const payload = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phone,
      password: values.password,
      role: "user",
    };
    try {
      const res = await authApi.register(payload);
      console.log(res);

      if (res?.status == 202) {
        router.push("/login");
      } else {
        console.log("Something Went Wriong");
      }
    } catch (err: any) {
      console.log("Error While Registering a User", err);
    }
    // Handle form submission here
    // Redirect user after successful registration
  };

  // Define Yup schema for form validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number") // Phone number should be 10 digits
      .required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div
      className="min-h-screen font-Fahkwang grid place-content-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-50"
      style={{
        backgroundImage: `url(${bgregister.src})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[400px] mx-auto  rounded-3xl flex items-center justify-between relative">
        <div className="w-full  py-8">
          <Formik
            initialValues={{ name: "", email: "", phone: "", password: "" }}
            validationSchema={validationSchema} // Pass Yup schema to validationSchema prop
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="max-w-md mx-auto flex justify-center bg-white rounded-3xl flex-col justify-center pb-10 backdrop-blur-md bg-opacity-20">
                  <span className="w-48 rounded-full text-center grid place-content-center text-2xl  mx-auto mb-5 pt-7 font-bold  text-white">
                    Register
                  </span>
                  <div className="flex flex-col justify-center">
                    <div className="mb-5 max-w-80 mx-auto w-full">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="border-b border-white/30 text-white bg-transparent pb-2 w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="mb-5 max-w-80 mx-auto w-full">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-b border-white/30 text-white bg-transparent pb-2 w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="mb-5 max-w-80 mx-auto w-full">
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone No"
                        className="border-b border-white/30 text-white bg-transparent pb-2 w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="mb-5 max-w-80 mx-auto w-full">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="border-b border-white/30 text-white bg-transparent pb-2 w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="mb-5 max-w-80 mx-auto w-full flex justify-between item-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#F1F1F1] w-[138px] h-10 rounded-full flex justify-center overflow-visible  items-center backdrop-blur-md bg-opacity-20"
                      >
                        <span className="pr-2">Register</span>
                        <span className="inline-block h-10 w-10 rounded-full grid place-content-center border-2 border-white/30 -mr-5">
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
                    <div className="text-center text-base text-white">
                      <p>
                        Already registered?{" "}
                        <Link href="/login">
                          <b>Login</b>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
