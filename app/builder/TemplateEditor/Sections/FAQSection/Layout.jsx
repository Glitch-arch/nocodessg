"use client";

import { useEffect, useRef } from "react";
import TextArea from "../components/textArea";
import useTemplateDataStore from "@/app/store/templateDataStore";

const Layout = ({ data, updateTemplateData }) => {
  // const [faq, setFaq] = useState({
  //   question1: data.question1,
  //   answer1: data.answer1,
  //   question2: data.question2,
  //   answer2: data.answer2,
  //   question3: data.question3,
  //   answer3: data.answer3,
  // });
  const { faq, setFaq } = useTemplateDataStore((state) => ({
    faq: state.templateData,
    setFaq: state.updateTemplateData,
  }));

  const templateRef = useRef(false);

  const updateFeild = (field) => (newValue) => {
    setFaq({
      ...faq,
      [field]: newValue,
    });
  };

  useEffect(() => {
    if (!templateRef.current) {
      templateRef.current = true;
    } else {
      setFaq(faq);
    }
  }, [faq, setFaq]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <TextArea
        className=""
        name={"question1"}
        data={faq.question1}
        setData={updateFeild("question1")}
      />
      <TextArea
        name={"answer1"}
        data={faq.answer1}
        setData={updateFeild("answer1")}
      />
      <TextArea
        name={"question2"}
        data={faq.question2}
        setData={updateFeild("question2")}
      />
      <TextArea
        name={"answer2"}
        data={faq.answer2}
        setData={updateFeild("answer2")}
      />
      <TextArea
        name={"question3"}
        data={faq.question3}
        setData={updateFeild("question3")}
      />
      <TextArea
        name={"answer3"}
        data={faq.answer3}
        setData={updateFeild("answer3")}
      />
    </div>
  );
};

export default Layout;
