import create from 'zustand';

const actions = (set) => ({
  increase: () => set(state => ({ 
    count: state.count + 1 
  })),
  clear: () => set({ 
    count: 0 
  }),
});

const useStore = create(set => ({
  count: 0,
  ...actions(set),
}));

export default useStore;
