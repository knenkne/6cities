import {createSelector} from 'reselect';
import {OperationStatus} from '../../../common/const';


interface State {
  request: {
    type: string;
    status: OperationStatus;
    id: number;
  };
}

const typeSelector = (state: State) => state.request.type;
const idSelector = (state: State) => state.request.id;
const statusSelector = (state: State) => state.request.status;

export const getStatus = (state: State, requiredType: string, requiredId: number) => createSelector(
    typeSelector,
    idSelector,
    statusSelector,
    (type, id, status) => type === requiredType && id === requiredId ? status : ``)(state);
