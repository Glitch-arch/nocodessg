import { create } from "zustand";
import useGptStore from "./gptDataStore";
import { persist, createJSONStorage } from "zustand/middleware";

const useTemplateDataStore = create(
  persist(
    (set) => ({
      templateData: {},
      toggle: false,

      initializeTemplateData: () => {
        const data = useGptStore.getState().data;
        console.log(data);
        // const data = JSON.parse(res);
        console.log(data);
        set((state) => ({
          ...state,
          templateData: {
            title: data.title,
            tagline: data.tagline,
            heroSectionImage: "https://images.alphacoders.com/128/1282480.jpg",
            btn1: "Get Started",
            description: data.descriptions[0],

            ftitle1: data.features[0].feature1,
            ftitle2: data.features[1].feature2,
            featureSectionImage1:
              "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
            featureSectionImage2:
              "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
            fdescription1: data.features[0].detail1,
            fdescription2: data.features[1].detail2,
            question1: data.faqs[0].question1,
            question2: data.faqs[1].question2,
            question3: data.faqs[2].question3,
            answer1: data.faqs[0].answer1,
            answer2: data.faqs[1].answer2,
            answer3: data.faqs[2].answer3,
          },
        }));
      },

      updateToggle: () => {
        set((state) => {
          return {
            toggle: !state.toggle,
          };
        });
      },

      updateTemplateData: (newData) => {
        set((state) => {
          return {
            ...state,
            templateData: newData,
          };
        });
      },
    }),
    {
      name: "templateData",
      Storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useTemplateDataStore;
