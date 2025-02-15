import AuthenticatedLayout from '@/Layouts/AuthenticatedLearnerLayout';
import { Head } from '@inertiajs/react';
import { Card, Progress, Calendar } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faFlask, faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;

export default function Dashboard({ auth }) {
    const baseUrl = window.location.origin;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            currentKey={'1'}
        >
            <Head title="Dashboard" />

            <div className="p-2 lg:p-12">
                <h2 className='text-xl text-blue-500'>Hi Learner</h2>
                <p className='text-slate-600 font-light'>Welcome to your learner Dashboard</p>
                {/*<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>*/}
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-1 py-1'>
                    <div className='col-span-1 lg:col-span-2'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-2'>
                            <div className='bg-white w-full shadow rounded'>
                                <Card
                                    style={{
                                        width: '100%'
                                    }}
                                    cover= {
                                        <img src={`${baseUrl}/math.png`}></img>
                                    }
                                >
                                    <Meta
                                        title="Mathematics"
                                        /*description="This is the description"*/
                                    />
                                    <Progress percent={25}/>
                                </Card>
                            </div>
                            <div className='bg-white w-full shadow rounded'>
                                <Card
                                    style={{
                                        width: '100%'
                                    }}
                                    cover= {
                                        <img src={`${baseUrl}/physics.png`}></img>
                                    }
                                >
                                    <Meta
                                        title="Physics"
                                        /*description="This is the description"*/
                                    />
                                    <Progress percent={25}/>
                                </Card>
                            </div>
                            <div className='bg-white w-full shadow rounded'>
                                <Card
                                    style={{
                                        width: '100%'
                                    }}
                                    cover= {
                                        <img src={`${baseUrl}/English.jpg`}></img>
                                    }
                                >
                                    <Meta
                                        title="English"
                                        /*description="This is the description"*/
                                    />
                                    <Progress percent={25}/>
                                </Card>
                            </div>
                        </div>
                        <div className='w-full mt-6 p-4 bg-white shadow rounded'>
                            <p className='font-bold py-4 px-2 text-base'>Class Schedule</p>
                            <div className='grid grid-cols-2 hover:bg-sky-300'>
                                <div className='flex p-4'>
                                    <p className='p-1 text-blue-500'><FontAwesomeIcon icon={faCircle} /></p>
                                    <p className='p-1'>08:00 - 10:00 Physical Sciences</p>
                                </div>
                                <div className='text-right'>
                                    <p>10 March 2024</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 hover:bg-sky-300'>
                                <div className='flex p-4'>
                                    <p className='p-1 text-blue-500'><FontAwesomeIcon icon={faCircle} /></p>
                                    <p className='p-1'>10:00 - 12:00 Mathematics</p>
                                </div>
                                <div className='text-right'>
                                    <p>10 March 2024</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 hover:bg-sky-300'>
                                <div className='flex p-4'>
                                    <p className='p-1 text-blue-500'><FontAwesomeIcon icon={faCircle} /></p>
                                    <p className='p-1'>13:00 - 15:00 Physical Sciences</p>
                                </div>
                                <div className='text-right'>
                                    <p>10 March 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full hidden sm:block'>
                        <div className='bg-white sticky shadow rounded my-2 px-2 w-11/12 float-right'>
                            <p className='p-4 font-semibold border-b'>Attendance & Important Dates</p>
                            <div>
                                <Calendar fullscreen={false} />
                            </div>
                            <div>
                                <p className='p-4 font-semibold border-t'>Assessments Pending</p>
                                <div className=''>
                                    <div className='grid grid-cols-4 p-4'>
                                        <div className='p-2 py-4 text-blue-500'>
                                            <FontAwesomeIcon icon={faFlask} fontSize={20} color='#389BCE' />
                                        </div>
                                        <div className='p-2 col-span-2 text-left'>
                                            <p>Physical Science</p>
                                            <p className='text-blue-5000'>08:00 - 10:00</p>
                                        </div>
                                        <div className='p-2'>
                                            <span>10 March 2024</span>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-4 p-4'>
                                        <div className='p-2 py-4 text-blue-500'>
                                            <FontAwesomeIcon icon={faSquareRootVariable} fontSize={20} color='#389BCE' />
                                        </div>
                                        <div className='p-2 col-span-2 text-left'>
                                            <p>Mathematics</p>
                                            <p className='text-blue-5000'>08:00 - 10:00</p>
                                        </div>
                                        <div className='p-2'>
                                            <span>14 March 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
