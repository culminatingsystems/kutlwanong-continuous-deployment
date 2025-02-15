import { useEffect, useRef, useState } from 'react';
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
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

import LearnerForm from '@/Components/LearnerForm';

export default function UploadDocs({ auth, id }) {
    const [csrfToken, setCsrfToken] = useState('')
    const [fileList, setFileList] = useState([]);

    const formData = new FormData();
    formData.append('test', 'value');
    console.log(formData);


    useEffect(() => {
        fetchCsrfToken();
    }, []);

    const fetchCsrfToken = async () => {
        try {
            const response = await axios.get('/csrf-token');
            console.log(response.data.csrf_token);
            setCsrfToken(response.data.csrf_token);
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    };

    console.log(id);
    const idCopyProps = {
        name: 'file',
        multiple: false,
        action: '/learners/storedocs',
        onChange(info) {
            //message.success(`${info.file.name} file uploaded successfully.`);
            uploadFile(info.file)
          /*const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }*/
        },
    };

    const regFormProps = {
        //name: 'registration-form',
        /*var file = {
            name: 'registration-form',

        }*/
        //multiple: true,
        //action: '/learners/storedocs',
        onChange(info) {
            //uploadFile(info.file)
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
    };

    const uploadFile = async ({ file, fileList }) => {
        setFileList(fileList);
        
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
    };

    const reportProps = {
        name: 'term-four-report',
        //multiple: true,
        action: '/learners/storedocs',
        onChange(info) {
            uploadFile(info.file)
            /*const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }*/
        },
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Learners</h2>}
            currentKey={'2'}
        >
            <Head title="Upload Documents" />
           
            <div className="w-full h-screen bg-white p-6 mb-4">
                <div>
                    <h1 className="text-xl font-semibold text-gray-900">
						Upload Documents
					</h1>
                </div>
                <div className='grid grid-cols-1 py-6'>
                    <div className='p-4'>
                        <h1 className="text-xl font-semibold text-gray-900">
							Upload Files
						</h1>
                        <Dragger name="file"
                            multiple={false} // Set to true if you want to allow multiple files
                            action="/learners/stotedocs" // Endpoint to handle file upload in Laravel backend
                            onChange={uploadFile}
                            fileList={fileList}
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Dragger>
                    </div>
                    {/*<div  className='p-4'>
                        <h1 className="text-xl font-semibold text-gray-900">
							Registration Form
						</h1>
                        <Dragger {...regFormProps}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Dragger>
                    </div>*/}
                </div>
                {/*<div className='grid grid-cols-2'>
                    <div className='p-4'>
                        <h1 className="text-xl font-semibold text-gray-900">
							Fourth Term Report
						</h1>
                        <Dragger {...reportProps}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Dragger>
                    </div>
                </div>*/}
            </div>
        </AuthenticatedLayout>
    );
}
