import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Textarea, TextInput } from "flowbite-react";
import "../App.css";
import { useForm } from "react-hook-form";
import { AppContext } from "../Context/AppContext";
import { toast } from "react-toastify";

const Contact = () => {
  const contactForm = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let { isLoading, setLoading } = useContext(AppContext);

  //Submitting form data to backend
  let onSubmit = async (data) => {
    try {
      //API here...
      let res = await fetch("https://pts2backend.vercel.app/sentmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let response = await res.text();
      console.log(data, response);
      toast.success("Message sent successfully.");
      reset();
    } catch (error) {
      console.log(error.message);
      console.log(`
        Status: ${res.status},
        Status Text: ${res.statusText}`);
    }
  };

  return (
    <>
      {/* Contact Us Form */}
      <section className="px-6 sm:px-10 py-24 min-h-screen w-screen md:max-w-[900px] lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="w-full md:w-1/2 text-black font-semibold text-lg mb-10">
          <span className="text-4xl sm:text-5xl font-semibold">Contact Us</span>
          <div className="flex items-center mt-3">
            <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
            <span className="bg-[#8490FF] h-1 w-52"></span>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <form
            className="w-full sm:w-2/3 lg:w-1/2"
            onSubmit={handleSubmit(onSubmit)}
            ref={contactForm}
          >
            <div className="mb-3 flex items-start gap-6">
              <div className="w-1/2">
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  helperText={
                    errors.username && (
                      <span className="text-red-500 font-medium">
                        {errors.username.message}
                      </span>
                    )
                  }
                  {...register("username", {
                    required: {
                      value: true,
                      message: "usersname is required!",
                    },
                    minLength: {
                      value: 3,
                      message: "username must be 3 or more character long.",
                    },
                    pattern: {
                      value: /[a-zA-Z]{3,}/gi,
                      message: "username must have at least 3 letters",
                    },
                  })}
                />
              </div>
              <div className="w-1/2">
                <TextInput
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  helperText={
                    errors.email && (
                      <span className="text-red-500 font-medium">
                        {errors.email.message}
                      </span>
                    )
                  }
                  {...register("email", {
                    required: { value: true, message: "email is required!" },
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email formate",
                    },
                  })}
                />
              </div>
            </div>
            <div className="mb-3">
              <TextInput
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                helperText={
                  errors.subject && (
                    <span className="text-red-500 font-medium">
                      {errors.subject.message}
                    </span>
                  )
                }
                {...register("subject", {
                  required: { value: true, message: "subject is require" },
                  minLength: {
                    value: 3,
                    message: "subject must be at least 3 character long.",
                  },
                })}
              />
            </div>
            <div className="mb-7">
              <Textarea
                id="msg"
                name="msg"
                placeholder="Leave a message here..."
                rows={9}
                helperText={
                  errors.msg && (
                    <span className="text-red-500 font-medium">
                      {errors.msg.message}
                    </span>
                  )
                }
                {...register("msg", {
                  required: { value: true, message: "message is required." },
                  maxLength: {
                    value: 1000,
                    message: "message must not be longer than 1000 charaters.",
                  },
                })}
              />
            </div>

            <div className="mb-7">
              <Button type="submit" className="bgGradient">
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
