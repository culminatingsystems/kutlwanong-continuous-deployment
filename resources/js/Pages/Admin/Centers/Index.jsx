import { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedAdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Typography, Table, Space, message, Pagination, Input, Upload, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, InboxOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;
const { Dragger } = Upload;

export default function Index({ auth, centers, allocationTotal, overflowTotal, totalCenters,  msg }) {

    const [messageApi, contextHolder] = message.useMessage();
    const [data, setData] = useState(centers.data);
    const [confirmingLearnerDeletion, setConfirmingLearnerDeletion] = useState(false);
    const [toDelete, setToDelete] = useState({});
    const [showImportModal, setShowImportModal] = useState(false);

    //const [csrfToken, setCsrfToken] = useState('')
    //const [fileList, setFileList] = useState([]);

    const formData = new FormData();
    formData.append('test', 'value');
    console.log(formData);


    /*useEffect(() => {
        fetchCsrfToken();
    }, []);*/

    const defaultRow = {
        key: '0',
        centerVenue: 'search',
        manager: 'search',
        province: 'search',
        managerContact: 'search',
        schoolContact: 'search',
        schoolAddress: 'search',
        email: 'search'
    };

    const success = () => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };

    const pagination = {
        current: centers.meta.current_page,
        pageSize: centers.meta.per_page,
        total: centers.meta.total,
    };

    const handleSearch = () => {
        console.log('Searching...');
    };

    useEffect(() => {
        if (msg) {
            success();
        }
    }, [msg]);

    const handlePaginationChange = (page) => {
        console.log('Fetching');
    };

    const closeModal = () => {
        setShowImportModal(false);
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

    const fetchCsrfToken = async () => {
        try {
            const response = await axios.get('/csrf-token');
            console.log(response.data.csrf_token);
            setCsrfToken(response.data.csrf_token);
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    };

    /*const uploadFile = async ({ file, fileList }) => {
        //setFileList(fileList);
        
        try {
            const formData = new FormData();
            formData.append('file', file);
            console.log(formData.file);
            //const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
            const response = await axios.post('/learners/storedocs', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRF-TOKEN': csrfToken,
                },
            });
            message.success(`${file.name} file uploaded successfully.`);
            console.log('File uploaded:', response.data);
        } catch (error) {
            message.error(`${file.name} file upload failed.`);
            console.error('File upload failed:', error);
        }
    };*/

    const columns = [
        {
            title: 'Venue (Host School)',
            dataIndex: 'centerVenue',
            render: text => (text === 'search' ? <Input placeholder='Venue' allowClear onChange={handleSearch} /> : <a href="#">{text}</a>)
        },
        {
            title: 'Centre Manager',
            dataIndex: 'manager',
            render: text => (text === 'search' ? <Input placeholder='Centre Manager' allowClear onChange={handleSearch} /> : text)
        },
        {
            title: 'Province',
            dataIndex: 'province',
            render: text => (text === 'search' ? <Input placeholder='Province' allowClear onChange={handleSearch} /> : text)
        },
        {
            title: 'Manager Contact',
            dataIndex: 'managerContact',
            render: text => (text === 'search' ? '' : text)
        },
        {
            title: 'School Contact',
            dataIndex: 'schoolContact',
            render: text => (text === 'search' ? '' : text)
        },
        {
            title: 'School Address',
            dataIndex: 'schoolAddress',
            render: text => (text === 'search' ? <Input placeholder='School Address' allowClear onChange={handleSearch} /> : text)
        },
        {
            title: 'Email',
            dataIndex: 'email',
            render: text => (text === 'search' ? <Input placeholder='Email' allowClear onChange={handleSearch} /> : text)
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                record.key === '0' ? '' :
                    <Space size="middle">
                        <Link href={`/admin/centers/view/${record.id}`}><EyeOutlined style={{ fontSize: '20px' }} /></Link>
                        <Link href={`/admin/centers/edit/${record.id}`}><EditOutlined style={{ fontSize: '20px' }} /></Link>
                        <button className='hover:color-indigo-700' onClick={() => confirmLearnerDeletion(record)}><DeleteOutlined style={{ fontSize: '20px' }} /></button>
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Centres</h2>}
            currentKey={'3'}
        >
            <Head title="Centres" />

            <div className="p-8">
                <div>
                    <span className='text-lg font-bold'>Centres</span>
                </div>
                <div className='flex flex-row-reverse p-2'>
                    <div className='px-1'>
                        <button className='p-2 bg-sky-600 text-white rounded'>
                            <Link href='/admin/centers/create'>
                                <FontAwesomeIcon icon={faPlus} color={'FFFFFF'} />
                                <span className='inline-block px-2'>Add Centre</span>
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
                            <span className='font-light'>Total Centres</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg text-cyan-600'> {totalCenters} </span>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-white shadow">
                        <div className='py-2'>
                            <span className='font-light'>Allocation</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg text-cyan-600'>{allocationTotal}</span>
                        </div>
                    </div>
                    <div className="px-4 py-6 bg-white shadow">
                        <div className='py-2'>
                            <span className='font-light'>Overflow</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg text-cyan-600'>{overflowTotal}</span>
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
                
                <Modal title="Import Centres" centered open={showImportModal} onOk={closeModal} onCancel={closeModal}>
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
