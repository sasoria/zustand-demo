import create from 'zustand';

const increase = (set) => {
    return () => set(state => ({ count: state.count + 1 }))
};

const clear = (set) => {
    return () => set({ count: 0 })
};

const actions = (set) => ({
    increase: increase(set),
    clear: clear(set),
});

const useStore = create(set => ({
    count: 0,
    ...actions(set),
}));

export default useStore;
