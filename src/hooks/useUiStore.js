import { useDispatch, useSelector } from 'react-redux';
import { onCloseTransactionModal, onOpenTransactionModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isTransactionModalOpen
    } = useSelector(state => state.ui)


    const openTransactionModal = () => {
        dispatch(onOpenTransactionModal());
    }

    const closeTransactionModal = () => {
        dispatch(onCloseTransactionModal());
    }

    return {
        //* Properties
        isTransactionModalOpen,

        //*Methods
        openTransactionModal,
        closeTransactionModal,
    }

}
