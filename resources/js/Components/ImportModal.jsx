import { useEffect, useState } from 'react';
import Modal from '@/Components/Modal';

export default function ImportModal({showImportModal}){
    const [showModal, setShowModal] = useState(showImportModal);

    const closeModal = () => {
        setShowModal(false);
    }

    <Modal show={true} onClose={closeModal}>
        <form onSubmit={deleteLearner} className="p-6">
            <h2 className="text-lg font-medium text-gray-900 text-center">
                Are you sure you want to delete the following leaner?
            </h2>

            {/*<p className='font-semibold text-medium text-center'>
                <span className=''>{toDelete.fullName} {toDelete.lastName}</span>
            </p>*/}

            <p className="mt-1 text-sm text-gray-600 text-center">
                Once you delete this learner, all of their information will be permanently deleted. Please
                enter your password to confirm you would like to permanently delete your account.
            </p>

            <div className="mt-6 flex justify-end">
                {/*<SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                <DangerButton className="ms-3" disabled={processing}>
                    Delete Account
                </DangerButton>*/}
                <button className='inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150' onClick={closeModal}>Cancel</button>
                <button className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 mx-2">
					Delete Learner
				</button>
            </div>
        </form>
    </Modal>
}