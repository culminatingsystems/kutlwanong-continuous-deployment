import AuthenticatedLayout from '@/Layouts/AuthenticatedAdminLayout';
import { Head } from '@inertiajs/react';
import { Card, Progress, Calendar } from 'antd';
import { Bar } from '@ant-design/charts';
//import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faFlask, faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;

export default function Dashboard({ auth }) {
    const baseUrl = window.location.origin;

    /*const config = {
        type: 'bar',
        data,
        options: {
          indexAxis: 'y',
        }
    };

    const labels = ['Mathematics', 'Physics', 'English'] //Utils.months({count: 7});
    const data = {
    labels: labels,
    datasets: [{
        axis: 'y',
        label: 'My First Dataset',
        data: [65, 59, 80],
        fill: false,
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        ],
        borderWidth: 1
    }]
    };*/
    const data = [
        { subject: 'Maths', value: 90 },
        { subject: 'Physics', value: 90 },
        { subject: 'English', value: 80 },
      ];
    
      // Configuration for the bar chart
      const config = {
        data: data,
        xField: 'subject',
        yField: 'value',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        yAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        height: 200
      };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            currentKey={'1'}
        >
            <Head title="Dashboard" />

            <div className="p-2 lg:p-12">
                <h2 className='text-xl text-blue-500'>Hi Admin</h2>
                <p className='text-slate-600 font-light'>Welcome to your dashborad overview</p>
                {/*<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>*/}
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 py-1'>
                    <div className="px-4 py-6 bg-white rounded shadow">
                        <div className='py-2'>
                            <span className='font-light'>Total Teachers</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                    <div class="px-4 py-6 bg-white rounded shadow">
                        <div className='py-2'>
                            <span className='font-light'>Total Learners</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                    <div class="px-4 py-6 bg-white rounded shadow">
                        <div className='py-2'>
                            <span className='font-light'>Total Centers</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                    <div class="px-4 py-6 bg-white rounded shadow">
                        <div className='py-2'>
                            <span className='font-light'>Feeder Schools</span>
                        </div>
                        <div className='py-2'>
                            <span className='font-semibold text-lg'>1000</span>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-xl text-blue-500'>Statistics</h2>
                </div>
                <div className=''>
                    <div className='grid grid-cols-4 gap-2'>
                        <div className='col-span-3 bg-white p-4 h-80'>
                            <p className='font-semibold'>Learner Enrollment</p>
                            <div className='min-h-full w-max flex justify-center items-center'>
                                <Bar {...config} />
                            </div>
                        </div>
                        <div className='col-span-1 min-h-12'>
                            <div class="m-2 text-center bg-white rounded shadow">
                                <Card
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    <Progress type='circle' percent={90}/>
                                    <Meta
                                        title="Mathematics"
                                    />
                                    
                                </Card>
                            </div>
                            <div class="m-2 text-center bg-white rounded shadow">
                            <Card
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    <Progress type='circle' percent={90}/>
                                    <Meta
                                        title="Physics"
                                    />
                                    
                                </Card>
                            </div>
                            <div class="m-2 text-center bg-white rounded shadow">
                                <Card
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    <Progress type='circle' percent={80}/>
                                    <Meta
                                        title="English"
                                    />
                                    
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
