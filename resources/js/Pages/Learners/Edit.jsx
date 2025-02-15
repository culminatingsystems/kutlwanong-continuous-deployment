import { useRef, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedAdminLayout';
import { Head, useForm } from '@inertiajs/react';
//import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { Typography, Table } from 'antd';
const { Title } = Typography;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";

import AddLearnerForm from './Partials/AddLearnerForm';
import { Link } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { DatePicker, Space, Select } from 'antd';
import LearnerForm from '@/Components/LearnerForm';

export default function Dashboard({ auth, learner, centers }) {
    console.log(learner);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Learners</h2>}
            currentKey={'2'}
        >
            <Head title="Add Learner" />
           
            <div className="w-full h-screen bg-white">
                {/*<div className='p-6'>
                    <button className='p-2 add-button text-white rounded' onClick={() => window.history.back()}>Back</button>
                </div>*/}
                <div className='px-6'>
                    <h1 className="text-xl font-bold text-gray-900">
                        {/*Edit: <span>{learner.learner_name}</span> <span>{learner.learner_surname}</span>*/}
                    </h1>
                </div>
                <LearnerForm  type={'Edit'} learner={learner} centers={centers}/>
            </div>
        </AuthenticatedLayout>
    );
}
