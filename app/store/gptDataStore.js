import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import zukeeper from "zukeeper";

const useGptStore = create(
  persist(
    (set) => ({
      data: {},
      callGPT: (gptResponse) => {
        set((state) => {
          return {
            ...state,
            data: gptResponse,
          };
        });
      },
    }),
    {
      name: "gptData",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// window.store = useGptStore;

export default useGptStore;
