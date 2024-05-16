

"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup"; // Import Yup for schema validation
import Image from "next/image";
import Link from "next/link";
import login from "@/images/login.png";
import { authApi } from "@/api";
import bg from '@/images/diamond-bg.jpg';

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    // Handle form submission here
    const payload = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await authApi.login(payload);
      if (res?.result?.refreshToken &&  typeof window !== 'undefined') {
        console.log(res.result);

        window.localStorage.setItem("userAccessToken", res?.result?.refreshToken);
        window.localStorage.setItem(
          "userDetails",
          JSON.stringify(res.result.userDetails)
        );
        router.push("/selectdiamond");
      } else {
        console.log("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Define Yup schema for form validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="min-h-screen font-Fahkwang grid place-content-center relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-50" style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      backgroundPosition:'center'
    }}
>
      <div className="w-[400px] mx-auto rounded-3xl flex items-center justify-between">
        <div className="w-full py-8">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema} // Pass Yup schema to validationSchema prop
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="max-w-md mx-auto flex justify-center bg-white rounded-3xl flex-col justify-center pb-10 backdrop-blur-md bg-opacity-20">
                  <span className="w-48 rounded-full text-center grid place-content-center text-2xl  mx-auto mb-5 pt-7 font-bold  text-white">
                    Login
                  </span>
                  <div className="flex flex-col justify-center">
                    <div className="mb-10 max-w-80 mx-auto w-full">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-b border-white/30 bg-transparent pb-2 w-full focus:outline-none text-white"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="mb-10 max-w-80 mx-auto w-full">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="border-b border-white/30 bg-transparent pb-2 w-full focus:outline-none text-white"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="mb-10 max-w-80 mx-auto w-full flex justify-between item-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#F1F1F1] w-28 h-10 rounded-full flex justify-center overflow-visible  items-center backdrop-blur-md bg-opacity-20"
                      >
                        <span className="pr-2">Login</span>
                        <span className=" h-10 w-10 rounded-full grid place-content-center border-2 border-white/30 -mr-5">
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
                      <div className="flex item-center">
                        <Link href="/forgotpassword" className="leading-10 text-white">
                          Forgot Password
                        </Link>
                      </div>
                    </div>
                    <div className="text-center text-base text-white">
                      <p>
                        You Do Not have an Account?{"   "} 
                        <Link href="/register">
                          <b className="opacity-50">Register</b>
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
