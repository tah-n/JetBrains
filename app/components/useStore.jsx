import { create } from 'zustand'

const useStore = create((set) => ({
  display: false,
  toggleDisplay: () => set((state) => ({ display: !state.display })),
  displayFalse: () => set(() =>( { display: false })),
  displayTrue: () => set(() =>( { display: true })),
  isToggled: false,
  toggleTrue: () => set(() => ({ isToggled: true })),
  toggleFalse: () => set(() => ({ isToggled: false })),


}))

export default useStore;

