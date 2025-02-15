import { useRef, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedAdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { Typography, Table } from 'antd';
const { Title } = Typography;
import InputError from '@/Components/InputError';
import CenterForm from '@/Components/CenterForm';

export default function Dashboard({ auth, center, centers }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Centers</h2>}
            currentKey={'3'}
        >
            <Head title="Add Centers" />
            
            <div className="w-full h-screen bg-white">
                <div className='p-4 px-6'>
                    <h1 className="text-xl font-bold text-gray-900">
                        Add a Center
                     </h1>
                </div>
                {/* Add Center Form Here */}
                <CenterForm type={'Add'} center />
            </div>
        </AuthenticatedLayout>
    );
}
