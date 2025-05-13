'use client'
import React, { useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const DownLeftSide = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { firstname, lastname, email, message } = userData;

  const [res, setRes] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    setTimeout(() => {
      setRes("")
    }, 5000);
  }, [res])

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = { email, message, name: firstname + " " + lastname };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    setUserData(initialState)


    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.match(re)) {
      setRes("Email Incorrect")
      return
    }

    await fetch("/api/contact", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setRes(result.msg)
        },
        (error) => {
          console.log(error)
          setRes(error.msg ? error.msg : "something went wrong while sending")
        },
      )
  }
  return (
    <div className="lg:w-2/3">
      <div className="flex-[50%] p-2 mt-4 md:mt-0">
        <h3 data-aos='fade-up'   className="text-xl md:text-2xl tracking-wider text-title !leading-tight">
          leave us a{" "}
          <span className="uppercase gradient-text font-bold">message</span>
        </h3>
        <div data-aos='fade-up'   className="h-[6px] gradient-bg w-[100px] mt-4 mb-8" />
        <form className="flex flex-wrap" noValidate onSubmit={handleSubmit}>
          <div data-aos='fade-up'   data-aos-delay={150}  className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label
              htmlFor="firstname"
              className="block mb-3 px-1 md:text-sm  text-base font-medium"
            >
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
              placeholder="First Name *"
              className="py-2.5 px-4 text-text-title focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary outline-none w-full md:text-sm  text-base leading-normal border border-outline bg-background-paper rounded-lg"
            />
          </div>

          <div data-aos='fade-up'   data-aos-delay={300}  className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label
              htmlFor="lastname"
              className="block mb-3 px-1 md:text-sm  text-base font-medium"
            >
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              placeholder="Last Name *"
              className="py-2.5 px-4 text-text-title focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary outline-none w-full md:text-sm  text-base leading-normal border border-outline bg-background-paper rounded-lg"
            />
          </div>

          <div data-aos='fade-up'   data-aos-delay={450}  className="w-full py-2 pr-4 mb-2">
            <label htmlFor="email" className="block mb-3 px-1 md:text-sm  text-base font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="E-mail *"
              className="py-2.5 px-4 text-text-title focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary outline-none w-full md:text-sm  text-base leading-normal border border-outline bg-background-paper rounded-lg"
              main
            />
          </div>

          <div data-aos='fade-up'   data-aos-delay={600}  className="w-full py-2 pr-4 mb-2">
            <label
              htmlFor="message"
              className="block mb-4 px-1 md:text-sm  text-base font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              rows={7}
              cols={20}
              onChange={handleInputChange}
              placeholder="Message*"
              className="py-2.5 px-4 text-text-title focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary resize-none outline-none w-full md:text-sm text-base leading-normal border border-outline bg-background-paper rounded-lg"
            />
          </div>

          <div  data-aos='fade-up'   data-aos-delay={750} className="w-full">
            <button
              type="submit"
              style={{ opacity: 75 }}
              disabled={Boolean(
                !firstname ||
                !email ||
                !email.match(
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) ||
                !message
              )}
             className="inline-flex items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full disabled:bg-paper disabled:text-paragraph disabled:border-outline bg-title hover:bg-transparent border-2 border-title dark:border-title/10  hover:text-title text-default outline-none font-bold"
            >
              Submit
              <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 group-disabled:ml-2 transition-all duration-100" />
            </button>
            {res && <div className='px-3 py-2 mt-4 font-semibold text-center text-base rounded-md text-secondary bg-secondary/10 m-1'>
              {res}
            </div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownLeftSide;
