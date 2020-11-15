export const setSortBy = ({order,type}) => ({
    type: 'SET_SORT_BY',
    payload: {order, type},
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});
