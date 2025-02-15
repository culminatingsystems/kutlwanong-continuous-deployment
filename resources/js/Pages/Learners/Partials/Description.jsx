import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Typography, Table, Tag, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
const { Title } = Typography;
import { Descriptions } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileExport } from "@fortawesome/free-solid-svg-icons";


import { Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {

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
            currentKey={'2'}
        >
            <Head title="Learners" />

            <Descriptions title="Learner Information" items={data} />


        </AuthenticatedLayout>
    );
}
