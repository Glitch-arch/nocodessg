// "use client";

// import { useState } from "react";
import Image from "next/image";
// import useTemplateDataStore from "@/app/store/templateDataStore";

const Template1 = ({ data }) => {
  // const data = useTemplateDataStore((state) => state.templateData);
  console.log("templateData", data, typeof data);
  const {
    title,
    tagline,
    btn1,
    description,

    heroSectionImage,
    featureSectionImage1,
    featureSectionImage2,
    ftitle1,
    ftitle2,
    fdescription1,
    fdescription2,
    question1,
    question2,
    question3,
    answer1,
    answer2,
    answer3,
  } = data;
  // const [image, setImage] = useState(
  //   "https://images.alphacoders.com/128/1282480.jpg"
  // );
  // const [image2, setImage2] = useState(
  //   "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
  // );
  // const [image3, setImage3] = useState(
  //   "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
  // );
  console.log("Logging in Template page: ", question2, answer2, question1);

  // const handleDrop = (setFn, e) => {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files;
  //   if (files.length) {
  //     const file = files[0];
  //     const imageUrl = URL.createObjectURL(file);
  //     setFn(imageUrl);
  //   }
  // } else {
  //   console.error("Dropped file is not an Image");
  // }

  return (
    <div className="font-mono flex flex-col gap-9">
      {/* Section 1 */}
      <section className="flex flex-col p-1 gap-5 mt-3 justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="text-3xl font-extrabold ">{title}</span>
          <span className="text-sm ">{tagline}</span>
        </div>
        <div className="flex justify-center items-center">
          <Image
            // onDragOver={(e) => e.preventDefault()}
            // onDrop={(e) => handleDrop(setImage, e)}
            className="rounded-lg shadow-xl w-2/3 cursor-pointer"
            width={500}
            height={500}
            // placeholder="blur"
            src={heroSectionImage}
            alt="Hero Section Image"
          />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-sm w-1/2 self-center ">{description}</p>
          <button className="inline-block w-36 font-serif m-5 border  rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition-all duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
            {btn1}
          </button>
        </div>
        {/* Some Logo */}
      </section>

      {/* Section 2 */}

      <section className="flex flex-col p-1 gap-7  justify-center items-center">
        <div className="flex gap-14 justify-center items-center w-2/3 ">
          {featureSectionImage1 && (
            <Image
              // onDragOver={(e) => e.preventDefault()}
              // onDrop={(e) => handleDrop(setImage2, e)}
              src={featureSectionImage1}
              width={300}
              height={300}
              // placeholder="blur"
              className="rounded-lg cursor-pointer shadow-xl w-2/5"
              alt="Feature Section1 Image"
            />
          )}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">{ftitle1}</h2>
            <p className="text-gray-600">{fdescription1}</p>
          </div>
        </div>
        <div className="flex gap-14 justify-center items-center w-2/3 ">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">{ftitle2}</h2>
            <p className="text-gray-600">{fdescription2}</p>
          </div>
          <Image
            // onDragOver={(e) => e.preventDefault()}
            // onDrop={(e) => handleDrop(setImage3, e)}
            width={300}
            height={300}
            // placeholder="blur"
            className="rounded-lg cursor-pointer shadow-xl w-2/5"
            src={featureSectionImage2}
            alt="Feature Section1 Image"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-2/3 self-center">
        <div className="p-8">
          <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
              FAQ
            </h4>
            <p className="text-center text-gray-600 text-sm mt-2">
              Here are some of the frequently asked questions
            </p>
            <div className="space-y-12 px-2 xl:px-16 mt-12">
              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-blue-600">
                    <span className="text-4xl text-blue-600 px-4">Q.</span>
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400">
                    <span className="text-4xl text-gray-400 px-4">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-blue-600 font-bold">
                      {question1}
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">{answer1}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-blue-600">
                    <span className="text-4xl text-blue-600 px-4">Q.</span>
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400">
                    <span className="text-4xl text-gray-400 px-4">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-blue-600 font-bold">
                      {question2}
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">{answer2}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-blue-600">
                    <span className="text-4xl text-blue-600 px-4">Q.</span>
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400">
                    <span className="text-4xl text-gray-400 px-4">A.</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-blue-600 font-bold">
                      {question3}
                    </span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">{answer3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <div className="bg-white rounded-lg shadow ">
        <div className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="" className="hover:underline">
            NoCodeSSG™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Template1;
