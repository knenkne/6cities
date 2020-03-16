import {createSelector} from 'reselect';


const typeSelector = (state) => state.request.type;
const idSelector = (state) => state.request.id;
const statusSelector = (state) => state.request.status;

export const getStatus = (state, requiredType, requiredId) => createSelector(
    typeSelector,
    idSelector,
    statusSelector,
    (type, id, status) => type === requiredType && id === requiredId ? status : ``)(state);
