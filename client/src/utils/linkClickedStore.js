import create from "zustand";

export const useLinkClickedStore = create((set) => ({
  linkClicked: false,
  clickedFalse: () => set((state) => ({ linkClicked: false })),
  clickedTrue: () => set((state) => ({ linkClicked: true })),
}));
