import React from "react";
import { Button, Textarea, TextInput } from "flowbite-react";
import "../App.css";

const Contact = () => {
  return (
    <>
      {/* Contact Us Form */}
      <section className="px-10 w-screen min-h-screen py-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="w-1/2 text-black font-semibold text-lg mb-10">
          <span className="text-5xl font-semibold">Contact Us</span>
          <div className="flex items-center mt-3">
            <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
            <span className="bg-[#8490FF] h-1 w-52"></span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <form action="#" className="w-1/2">
            <div className="mb-3 flex items-center gap-6">
              <div className="w-1/2">
                <TextInput
                  id="username"
                  type="text"
                  placeholder="Username"
                  helperText={
                    <span className="font-medium">Error Message here</span>
                  }
                />
              </div>
              <div className="w-1/2">
                <TextInput
                  id="email"
                  type="text"
                  placeholder="Email"
                  helperText={
                    <span className="font-medium">Error Message here</span>
                  }
                />
              </div>
            </div>
            <div className="mb-3">
              <TextInput
                id="subject"
                type="text"
                placeholder="Subject"
                helperText={
                  <span className="font-medium">Error Message here</span>
                }
              />
            </div>
            <div className="mb-7">
              <Textarea
                id="message"
                placeholder="Leave a message here..."
                rows={9}
                helperText={
                  <span className="font-medium">Error Message here</span>
                }
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
