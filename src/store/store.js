import { create } from 'zustand';

const useStore = create((set) => ({
  reservations: [],
  addReservation: (hotel, date) =>
    set((state) => ({
      reservations: [...state.reservations, { hotel, date }],
    })),
}));
export default useStore;
