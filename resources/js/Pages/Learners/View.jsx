import AuthenticatedLayout from '@/Layouts/AuthenticatedAdminLayout';
import { Head } from '@inertiajs/react';
import { Typography, Table, Tag, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const { Title } = Typography;
import { Descriptions, Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { usePage } from '@inertiajs/inertia-react';



import { Link } from '@inertiajs/react';

export default function Dashboard({ auth, learner }) {

    // const showAddLearner = () => {
    //     setConfirmingUserDeletion(true);
    // };

    const data = [
        {
          key: '1',
          label: 'ID number',
          children: '0123456789012',
        },
        {
          key: '2',
          label: 'Full Name',
          children: 'Don Corleone',
        },
        {
          key: '3',
          label: 'Gender',
          children: 'Male',
        },
        {
          key: '4',
          label: 'Learner Type',
          children: 'Existing',
        },
        {
          key: '5',
          label: 'Learner Status',
          children: 'In Progress',
        },
        {
          key: '6',
          label: 'Project Name',
          children: 'SEDA',
        }];

    // rowSelection object indicates the need for row selection
    // const rowSelection = {
    //     onChange: (selectedRowKeys, selectedRows) => {
    //         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    //     },
    //     getCheckboxProps: record => ({
    //         disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //     }),
    // };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Learners</h2>}
            currentKey={'sub1'}
            openKey={'2'}
        >
            {/*<Head title="Learners" />*/}

            {/*<Descriptions title="Learner Information" items={data} />*/}
			<div className='w-full  p-6 mb-4'>
				<div className='grid grid-cols-2'>
					<div className='py-6'>
						<div className='py-2'>
							<button className='p-3 add-button text-white rounded' onClick={() => window.history.back()}>Back</button>
						</div>
						<h1 className="text-xl font-bold text-gray-900">
							View: <span>{learner.learner_name}</span> <span>{learner.last_name} {learner.learner_surname}</span>
						</h1>
					</div>
					<div className='py-6'>
						<div className='text-right py-8'>
							<Link href={`/learners/edit/${learner.id}`} className='p-3  text-white inline-block rounded mx-2 bg-indigo-700 hover:bg-indigo-800'><span>Update</span></Link>
							<button className="bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded inline-block mx-2">
								Delete
							</button>
						</div>
					</div>
				</div>
				<div className='bg-white p-4'>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Full Names</span>
						</div>
						<div className='border p-4'>
							<span>{learner.learner_name}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Surname</span>
						</div>
						<div className='border p-4'>
							<span>{learner.learner_surname}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>ID Number</span>
						</div>
						<div className='border p-4'>
							<span>{learner.identity_number}</span>
						</div>
					</div>
					{/*<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Date of Birth</span>
						</div>
						<div className='border p-4'>
							<span>{learner.date_of_birth}</span>
						</div>
					</div>*/}
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Gender</span>
						</div>
						<div className='border p-4'>
							<span>{learner.gender}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>School Name</span>
						</div>
						<div className='border p-4'>
							<span>{learner.school_name}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Status</span>
						</div>
						<div className='border p-4'>
							<span>{learner.status}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Grade</span>
						</div>
						<div className='border p-4'>
							<span>{learner.grade}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Replacement</span>
						</div>
						<div className='border p-4'>
							<span>{learner.replacement}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Contact Number</span>
						</div>
						<div className='border p-4'>
							<span>{learner.contact_number}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Alternative Number</span>
						</div>
						<div className='border p-4'>
							<span>{learner.alternative_number}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Province</span>
						</div>
						<div className='border p-4'>
							<span>{learner.learner_province}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Race</span>
						</div>
						<div className='border p-4'>
							<span>{learner.learner_race}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Nationality</span>
						</div>
						<div className='border p-4'>
							<span>{learner.learner_nationality}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Home Language</span>
						</div>
						<div className='border p-4'>
							<span>{learner.learner_home_language}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Physical Address</span>
						</div>
						<div className='border p-4'>
							<span>{learner.physical_address}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Disablility</span>
						</div>
						<div className='border p-4'>
							<span>{learner.disability}</span>
						</div>
					</div>
					<div className='text-center p-4'>
						<h1 className="text-xl font-bold text-gray-900">
							Uploaded Documents
						</h1>
						<div className='py-2 text-right'>
							<Link href={`/learners/upload/${learner.id}`} className='p-2  text-white inline-block rounded mx-2 bg-indigo-700 hover:bg-indigo-800'><span>Update Documents</span></Link>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Registration Documents</span>
						</div>
						<div className='border p-4'>
							<span>{learner.reg_documents}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>ID Copy</span>
						</div>
						<div className='border p-4'>
							<span>{learner.id_copy}</span>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-0  odd:bg-white even:bg-slate-50'>
						<div className='border p-4'>
							<span>Term Four Report</span>
						</div>
						<div className='border p-4'>
							<span>{learner.term_four_report}</span>
						</div>
					</div>
				</div>
			</div>


        </AuthenticatedLayout>
    );
}
