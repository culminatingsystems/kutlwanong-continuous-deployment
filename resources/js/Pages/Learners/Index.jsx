import { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedAdminLayout';
import { Head } from '@inertiajs/react';
import { Typography, Table, Tag, Space, message, Pagination, Input, Upload, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, InboxOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@inertiajs/react';

const { Title } = Typography;
const { Dragger } = Upload;

// import AddLearnerForm from './Partials/AddLearnerForm';

export default function Dashboard({ auth, learners, msg, totalLearners, maleLearners, femaleLearners}) {
    console.log(learners);

    const showAddLearner = () => {
        setConfirmingUserDeletion(true);
    };

    const [messageApi, contextHolder] = message.useMessage();
    const [data, setData] = useState(learners.data);
    const [confirmingLearnerDeletion, setConfirmingLearnerDeletion] = useState(false);
    const [toDelete, setToDelete] = useState({});
    const [showImportModal, setShowImportModal] = useState(false);


    const defaultRow = {
        key: '0',
        idNum: 'search', //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>,
        fullName: 'search',
        surname: 'search', // <Input placeholder='Full Names' allowClear onChange={handleSearch}/>,
        grade: 'search',
        gender: 'search',//<Input placeholder='Gener' allowClear onChange={handleSearch}/>,
        center: 'search', //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>,
        //status: 'search',
        //projectName: 'search' //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>
    }
   
    const success = () => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };

    /*setPagination({
        current: learners.meta.current_page,
        pageSize: learners.meta.per_page,
        total: learners.meta.total,
    //});*/
    const pagination = {
        current: learners.meta.current_page,
        pageSize: learners.meta.per_page,
        total: learners.meta.total,
    }

    const handleSearch = () => {
        console.log('Searching...')
    }

    useEffect(() => {
        if(msg){
            success()
        } 
    })

    const closeModal = () => {
        setShowImportModal(false);
    };

    const handlePaginationChange = (page) => {
        console.log('Fetching');
    };

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const uploadFile = (info) => {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            closeModal();
        } else if (status === 'error') {
            console.log(info);
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const columns = [{
        title: 'ID Number',
        dataIndex: 'idNum',
        render: text => (text === 'search' ? <Input placeholder='Id Number' allowClear onChange={handleSearch}/> :<a href="#">{text}</a>)
        }, 
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            render: text => (text === 'search' ? <Input placeholder='Full Name' allowClear onChange={handleSearch}/> : text)
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            render: text => (text === 'search' ? <Input placeholder='Full Name' allowClear onChange={handleSearch}/> : text)
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            render: text => (text === 'search' ? <Input placeholder='Grade' allowClear onChange={handleSearch}/> : text)
        }, 
        {
            title: 'Gender',
            dataIndex: 'gender',
            render: text => (text === 'search' ? <Input placeholder='Gender' allowClear onChange={handleSearch}/> : text)
        }, 
        {
            title: 'Centre',
            dataIndex: 'center',
            render: text => (text === 'search' ? <Input placeholder='Center' allowClear onChange={handleSearch}/> : text)
        }, 
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                record.key === '0' ? '' :
                <Space size="middle">
                    <Link href={`/learners/view/${record.id}`}><EyeOutlined style={{fontSize: '20px'}} /></Link>
                    <Link href={`/learners/edit/${record.id}`}><EditOutlined style={{fontSize: '20px'}} /></Link>
                    <button className='hover:color-indigo-700'  onClick={() => confirmLearnerDeletion(record)}><DeleteOutlined style={{fontSize: '20px'}} /></button>
                </Space>
            ),
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            
            disabled: record.key === '0', // Column configuration not to be checked
        }),
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Learners</h2>}
            currentKey={'sub1'}
            openKey={'2'}
        >
            <Head title="Learners" />

            <div className="p-8">
                {/*<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>*/}
                {/* <div className='py-8'>
                    <Title level={3} type={"secondary"}>Learners</Title>
                    <span>NSF's Leaner's Overview</span>
                </div> */}
                <div className='flex flex-row-reverse p-2'>
                    <div className='px-1'>
                        <button className='p-2 bg-sky-600 text-white rounded'>
                            <Link href='/learners/create'>
                                <FontAwesomeIcon icon={faPlus} color={'FFFFFF'} />
                                <span className='inline-block px-2'>Add Learner</span>
                            </Link>
                        </button>
                    </div>

                    <div className='px-1'>
                        
                        <button className='p-2 bg-gray-300 rounded' onClick={() => setShowImportModal(true)}>
                            <FontAwesomeIcon icon={faFileImport} color={'#2F2E41'} />
                            <span className='inline-block px-2'>Import</span>
                        </button>
                        
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <div className="px-4 py-6 bg-white shadow">
                        <div className='py-2'>
                            <span className='font-light'>Total Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg text-cyan-600'> {totalLearners} </span>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-white shadow">
                        <div className='py-2'>
                            <span className='font-light'>Total Males</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg text-cyan-600'>{maleLearners}</span>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-white shadow">
                        <div className='py-2'>
                            <span className='font-light'>Total Females</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg text-cyan-600'>{femaleLearners}</span>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-white rounded shadow">
                        <div className='py-2'>
                            <span className='font-light'>Total Schools</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg text-cyan-600'>300</span>
                        </div>
                    </div>
                </div>
                <div className='mt-14'>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={[defaultRow, ...data]} pagination={false} rowKey={"id"} />
                    <div className='float-right'>
                        <Pagination
                            {...pagination}
                            showSizeChanger
                            showQuickJumper
                            onChange={handlePaginationChange}
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        />
                    </div>
                </div>
                <Modal title="Import Learners" centered open={showImportModal} onOk={closeModal} onCancel={closeModal}>
                    <Dragger 
                        name="centres_csv"
                        multiple={false}
                        action="/admin/centers/import" // Ensure this endpoint handles file uploads
                        onChange={uploadFile}
                        headers={{'X-CSRF-TOKEN': csrfToken}}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
                        </p>
                    </Dragger>
                </Modal>
            </div>
        </AuthenticatedLayout>
    );
}
