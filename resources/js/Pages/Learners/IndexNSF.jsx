import { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Typography, Table, Tag, Space, message, Pagination, Input } from 'antd';
const { Title } = Typography;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileImport, faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import AddLearnerForm from './Partials/AddLearnerForm';
import { Link } from '@inertiajs/react';
import Modal from '@/Components/Modal';

export default function Dashboard({ auth, learners, msg, totalLearners, newLearners, existingLearners, reinstatedLearners }) {

    

    //const [pagination, setPagination] = useState({});
    const [messageApi, contextHolder] = message.useMessage();
    const [data, setData] = useState(learners.data);
    const [confirmingLearnerDeletion, setConfirmingLearnerDeletion] = useState(false);
    const [toDelete, setToDelete] = useState({});

    const defaultRow = {
        key: '0',
        idNum: 'search', //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>,
        fullName: 'search', // <Input placeholder='Full Names' allowClear onChange={handleSearch}/>,
        gender: 'search',//<Input placeholder='Gener' allowClear onChange={handleSearch}/>,
        type: 'search', //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>,
        status: 'search',
        projectName: 'search' //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>
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

    const confirmLearnerDeletion = (learner) => {
        console.log(learner);
        setConfirmingLearnerDeletion(true);
        setToDelete(learner)
    };

    const closeModal = () => {
        setConfirmingLearnerDeletion(false);

        //reset();
    };

    const deleteLearner = () => {
        console.log('deleting');
    } 


    //const data = learners.data;
    /*var searchColumns = {
        key: '21',
        idNum: 'search', //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>,
        fullName: 'search', // <Input placeholder='Full Names' allowClear onChange={handleSearch}/>,
        gender: 'search',//<Input placeholder='Gener' allowClear onChange={handleSearch}/>,
        type: 'search', //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>,
        status: 'search',
        projectName: 'search' //<Input placeholder='Id Number' allowClear onChange={handleSearch}/>
    }
    data.unshift(searchColumns);*/
    //data.push(learners.data);
    
    useEffect(() => {
        if(msg){
            success()
        } 
    })

    const handlePaginationChange = (page) => {
        console.log('Fetching');
    };

    console.log(learners);

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
            title: 'Last Name',
            dataIndex: 'fullName',
            render: text => (text === 'search' ? <Input placeholder='Full Name' allowClear onChange={handleSearch}/> : text)
        }, 
        {
            title: 'Gender',
            dataIndex: 'gender',
            render: text => (text === 'search' ? <Input placeholder='Gender' allowClear onChange={handleSearch}/> : text)
        }, 
        {
            title: 'Learner Type',
            dataIndex: 'type',
            render: text => (text === 'search' ? <Input placeholder='Learner Type' allowClear onChange={handleSearch}/> : text)
        }, 
        {
            title: 'Learner Status',
            dataIndex: 'status',
            render: status => (
                <span>
                    {
                        <Tag 
                            style={{ 
                                backgroundColor: status === 'Learning programme in progress' ? '#FFBF80' : status === 'Withdrawn' ? '#FFECEC' : '#DFFBF0',
                                color: status === 'Learning programme in progress' ? '#654321' : status === 'Withdrawn' ? '#F03C39' : '#396E59',
                                borderColor: 'transparent' // Ensures border color doesn't change with text color
                            }} 
                            key={status}
                        >
                            {status.toUpperCase()}
                        </Tag>
                    }
                </span>
            ),
        }, 
        {
            title: 'Project Name',
            dataIndex: 'projectName',
            render: text => (text === 'search' ? <Input placeholder='Project Name' allowClear onChange={handleSearch}/> : text)
        }, 
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                record.key === '0' ? '' :
                <Space size="middle">
                    <Link href={`/learners/view/${record.key}`}><EyeOutlined style={{fontSize: '20px'}} /></Link>
                    <Link href={`/learners/edit/${record.key}`}><EditOutlined style={{fontSize: '20px'}} /></Link>
                    <button className='hover:color-indigo-700'  onClick={() => confirmLearnerDeletion(record)}><DeleteOutlined style={{fontSize: '20px'}} /></button>
                </Space>
            ),
        }
    ];

    // rowSelection object indicates the need for row selection
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
            currentKey={'2'}
        >
            <Head title="Learners" />
            {contextHolder}

            <div className="p-8">
                <div className='py-8'>
                    <Title level={3} type={"secondary"}>Learners</Title>
                    <span>NSF's Leaner's Overview</span>
                </div>
                <div className='flex flex-row-reverse p-2'>
                    <div className='px-1'>
                        <button className='p-2 add-button text-white rounded'>
                            <Link href='/learners/create'>
                                <FontAwesomeIcon icon={faPlus} color={'FFFFFF'} />
                                <span className='inline-block px-2'>Add Learner</span>
                            </Link>
                        </button>
                    </div>

                    <div className='px-1'>
                        
                        <button className='p-2 export-button rounded'>
                            <FontAwesomeIcon icon={faFileImport} color={'#3F2C6E'} />
                            <span className='inline-block px-2'>Import</span>
                        </button>
                        
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <div className="px-4 py-6 info-card">
                        <div className='py-2'>
                            <span className='font-light'>Total Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>{totalLearners}</span>
                        </div>
                    </div>
                    <div className="px-4 py-6 info-card">
                        <div className='py-2'>
                            <span className='font-light'>New Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>{newLearners}</span>
                        </div>
                    </div>
                    <div className="px-4 py-6 info-card">
                        <div className='py-2'>
                            <span className='font-light'>Existing Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>{existingLearners}</span>
                        </div>
                    </div>
                    <div className="px-4 py-6 alt-info-card">
                        <div className='py-2'>
                            <span className='font-light'>Reinstated Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>{reinstatedLearners}</span>
                        </div>
                    </div>
                </div>
                <div className='mt-14'>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={[defaultRow, ...data]} pagination={false} />
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
                <Modal show={confirmingLearnerDeletion} onClose={closeModal}>
                    <form onSubmit={deleteLearner} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 text-center">
                            Are you sure you want to delete the following leaner?
                        </h2>

                        <p className='font-semibold text-medium text-center'>
                            <span className=''>{toDelete.fullName} {toDelete.lastName}</span>
                        </p>

                        <p className="mt-1 text-sm text-gray-600 text-center">
                            Once you delete this learner, all of their information will be permanently deleted. Please
                            enter your password to confirm you would like to permanently delete your account.
                        </p>

                        {/*<div className="mt-6">
                            <InputLabel htmlFor="password" value="Password" className="sr-only" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>*/}

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
            </div>
        </AuthenticatedLayout>
    );
}
