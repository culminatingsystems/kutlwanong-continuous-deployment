import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { message, Upload, Select } from 'antd';

const { Dragger } = Upload;
const { Option } = Select;

export default function CenterForm({type = 'Add', center={}}){
    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }
    console.log(center);
    
    const {
        data,
        setData,
        delete: destroy,
        processing,
        post,
        patch,
        reset,
        errors,
    } = useForm({
        center_name: isEmpty(center) ? '' : center.center_name,
        center_venue: isEmpty(center) ? '' : center.center_venue,
        center_manager: isEmpty(center) ? '' : center.center_manager,
        center_province: isEmpty(center) ? '' : center.center_province,
        school_physical_address: isEmpty(center) ? '' : center.school_physical_address,
        manager_contact: isEmpty(center) ? '' : center.manager_contact,
        school_contact: isEmpty(center) ? '' : center.school_contact,
        kutlwanong_email: isEmpty(center) ? '' : center.kutlwanong_email,
        total_learners: isEmpty(center) ? '' : center.total_learners,
        allocation: isEmpty(center) ? '' : center.allocation,
        overflow: isEmpty(center) ? '' : center.overflow,
        status: isEmpty(center) ? '' : center.status,
    });
    console.log(data);

    const addCenter = (e) => {
        e.preventDefault();
        console.log(data);
        post('/admin/centers/store');
    }

    const editCenter = (e) => {
        e.preventDefault();
        patch('/admin/centers/update');
    }


    return(
        <form className="p-6 " onSubmit={type == 'Add' ? addCenter : editCenter}>
            <input type="hidden" name="_token" value={data._token} />
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label name='center_name' className='block font-medium text-sm text-gray-700'>Center Name</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='center_name'
                        onChange={(e) => setData('center_name', e.target.value)}
                        value={data.center_name}
                    />
                    <InputError message={errors.center_name} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Centre Venue(Host School)</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='center_venue'
                        onChange={(e) => setData('center_venue', e.target.value)}
                        value={data.center_venue}
                    />
                    <InputError message={errors.center_venue} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Centre Manager</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='center_manager'
                        onChange={(e) => setData('center_manager', e.target.value)}
                        value={data.center_manager}
                    />
                    <InputError message={errors.center_manager} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label name='full_names' className='block font-medium text-sm text-gray-700'>Manager Contact No.</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='manager_contact'
                        onChange={(e) => setData('manager_contact', e.target.value)}
                        value={data.manager_contact}
                    />
                    <InputError message={errors.manager_contact} className="mt-2" />
                </div>
                
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className='mt-6'>
                    <label className='block font-medium text-sm text-gray-700'>Center Manager Email (Kutlwanong)</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='kutlwanong_email'
                        onChange={(e) => setData('kutlwanong_email', e.target.value)}
                        value={data.kutlwanong_email}
                    />
                    <InputError message={errors.kutlwanong_email} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label name='center_province' className='block font-medium text-sm text-gray-700'>Province</label>
                    <select name='center_province' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' plcaeholder='Select Province....'
                        onChange={(e) => setData('center_province', e.target.value)}
                        value={data.center_province}
                    >
                        <option></option>
                        <option>Eastern Cape</option>
                        <option>Free State</option>
                        <option>Gauteng</option>
                        <option>KwaZulu-Natal</option>
                        <option>Limpopo</option>
                        <option>Mpumalanga</option>
                        <option>Northern Cape</option>
                        <option>North West</option>
                        <option>Western Cape</option>
                    </select>
                    <InputError message={errors.center_province} className="mt-2" />
                </div>
                
                
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>School Contact No.</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='school_contact'
                        onChange={(e) => setData('school_contact', e.target.value)}
                        value={data.school_contact}
                    />
                    <InputError message={errors.school_contact} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label name='occupational_title' className='block font-medium text-sm text-gray-700'>Host School Address</label>
                    <textarea className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full h-20' type='text' name='school_physical_address'
                        onChange={(e) => setData('school_physical_address', e.target.value)}
                        value={data.school_physical_address}
                    ></textarea>
                    <InputError message={errors.school_physical_address} className="mt-2" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='mt-6'>
                    <label className='block font-medium text-sm text-gray-700'>Total Learners</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='number' name='total_learners'
                        onChange={(e) => setData('total_learners', e.target.value)}
                        value={data.total_learners}
                    />
                    <InputError message={errors.total_learners} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Allocation</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='number' name='allocation'
                        onChange={(e) => setData('allocation', e.target.value)}
                        value={data.allocation}
                    />
                    <InputError message={errors.allocation} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Overflow</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='number' name='overflow'
                        onChange={(e) => setData('overflow', e.target.value)}
                        value={data.overflow}
                    />
                    <InputError message={errors.overflow} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Status</label>
                    <select name='status' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' plcaeholder='Select Status....'
                        onChange={(e) => setData('status', e.target.value)}
                        value={data.status}
                    >
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    <InputError message={errors.status} className="mt-2" />
                </div>
            </div>
           
            <div className='grid grid-cols-2 mt-2'>
                <div className='text-left'>
                    <button className='p-2 bg-sky-600 text-white rounded' type='button' onClick={() => window.history.back()}>
                        <span className='inline-block px-2'>Cancel</span>
                    </button>
                </div>
                <div className='text-right'>
                    <button className='p-2 bg-emerald-600 text-white rounded' type='submit'>
                        <span className='inline-block px-2'>Save</span>
                    </button>
                </div>
            </div>
        </form>
    )
}