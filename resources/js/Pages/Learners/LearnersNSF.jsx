import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Typography, Table } from 'antd';
const { Title } = Typography;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";

import AddLearnerForm from './Partials/AddLearnerForm';
import { Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {

    const showAddLearner = () => {
        setConfirmingUserDeletion(true);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Learners</h2>}
            currentKey={'2'}
        >
            <Head title="Learners" />

            <div className="p-8">
                {/*<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>*/}
                <div className='py-8'>
                    <Title level={3} type={"secondary"}>Learners</Title>
                    <span>NSF's Leaner's Overview</span>
                </div>
                <div className='flex flex-row-reverse p-2'>
                    {/*<div className='px-1'>
                        <button className='p-2 add-button rounded'>
                            <FontAwesomeIcon icon={faPlus} color={'#FFFFFF'} />
                            <span className='inline-block px-2 text-white'>Add Learner</span>
                        </button>
                    </div>*/}

                    <div className='px-1'>
                        <Link href='/learners/create' className='p-2  rounded' onClick={() => create()}>
                            <FontAwesomeIcon icon={faFileExport} color={'#3F2C6E'} />
                            <span className='inline-block px-2'>Export</span>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <div className="px-4 py-6 info-card">
                        <div className='py-2'>
                            <span className='font-light'>Total Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                    <div class="px-4 py-6 info-card">
                        <div className='py-2'>
                            <span className='font-light'>New Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                    <div class="px-4 py-6 info-card">
                        <div className='py-2'>
                            <span className='font-light'>Existing Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                    <div class="px-4 py-6 alt-info-card">
                        <div className='py-2'>
                            <span className='font-light'>Reinstated Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
