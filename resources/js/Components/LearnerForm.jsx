import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { message, Upload, Select, DatePicker } from 'antd';

const { Dragger } = Upload;
const { Option } = Select;

export default function LearnerForm({type = 'Add', learner={}, centers}){
    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }
    console.log(centers);

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
        //learner_name: isEmpty(learner) ? '' : learner.project_name,
        learner_name: isEmpty(learner) ? '' : learner.learner_name,
        learner_surname: isEmpty(learner) ? '' : learner.learner_surname,
        gender: isEmpty(learner) ? '' : learner.gender,
        identity_number: isEmpty(learner) ? '' : learner.identity_number,
        //learner_id: isEmpty(learner) ? '' : learner.gender,
        school_name: isEmpty(learner) ? '' : learner.school_name,
        join_date: isEmpty(learner) ? '' : learner.join_date,
        //exit_date: isEmpty(learner) ? '' : learner.exit_date,
        status: isEmpty(learner) ? '' : learner.status,
        replacement: isEmpty(learner) ? '' : learner.replacement,
        grade: isEmpty(learner) ? '' : learner.grade,
        contact_number: isEmpty(learner) ? '' : learner.contact_number,
        alternative_number: isEmpty(learner) ? '' : learner.alternative_number,
        physical_address: isEmpty(learner) ? '' : learner.physical_address,
        learner_province: isEmpty(learner) ? '' : learner.learner_province,
        learner_race: isEmpty(learner) ? '' : learner.learner_race,
        learner_nationality: isEmpty(learner) ? '' : learner.learner_nationality,
        learner_home_language: isEmpty(learner) ? '' : learner.learner_home_language,
        disability: isEmpty(learner) ? '' : learner.disability,
        reg_documents: isEmpty(learner) ? '' : learner.reg_documents,
        id_copy: isEmpty(learner) ? '' : learner.id_copy,
		term_four_report: isEmpty(learner) ? '' : learner.term_four_report,
		disability: isEmpty(learner) ? '' : learner.disability,
		//'learning_programme_category' => 'required|string',
		//learning_programme_name: isEmpty(learner) ? '' : learner.learning_programme_name,
		//'ofo_code' => 'required|string',
		//occupational_title: isEmpty(learner) ? '' : learner.occupational_title,
		//learner_type: isEmpty(learner) ? '' : learner.learner_type,
		//learner_status: isEmpty(learner) ? '' : learner.learner_status,

    });

    const addLearner = (e) => {
        e.preventDefault();
        console.log(data);
        post('/learners/store');
    };

    const editLearner = (e) => {
        e.preventDefault();
        patch('/learners/update'); 
    };

    const handleChange = (value) => {
        data.center = value;
    }

    const onJoinDateChange = (date, dateString) => {
        console.log(dateString);
        data.join_date = dateString;
    }

    return(
        <form className="p-6 " onSubmit={type == 'Add' ? addLearner : editLearner}>
            <input type="hidden" name="_token" value={data._token} />
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label name='learner_name' className='block font-medium text-sm text-gray-700'>Full Names</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='learner_name'
                        onChange={(e) => setData('learner_name', e.target.value)}
                        value={data.learner_name}
                    />
                    <InputError message={errors.learner_name} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Surname</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='learner_surname'
                        onChange={(e) => setData('learner_surname', e.target.value)}
                        value={data.learner_surname}
                    />
                    <InputError message={errors.learner_surname} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Gender</label>
                    <select name='gender' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full'
                        onChange={(e) => setData('gender', e.target.value)}
                        value={data.gender}
                    >
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <InputError message={errors.gender} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label name='identity_number' className='block font-medium text-sm text-gray-700'>ID Number</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' 
                        onChange={(e) => setData('identity_number', e.target.value)}
                        value={data.identity_number}
                    />
                    <InputError message={errors.identity_number} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label name='occupational_title' className='block font-medium text-sm text-gray-700'>School Name</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' 
                        onChange={(e) => setData('school_name', e.target.value)}
                        value={data.school_name}
                    />
                    <InputError message={errors.school_name} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label name='full_names' className='block font-medium text-sm text-gray-700'>Status</label>
                    {/*<input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' 
                        onChange={(e) => setData('status', e.target.value)}
                        value={data.status}
                    />*/}
                    <select name='status' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' plcaeholder='Status....'
                        onChange={(e) => setData('status', e.target.value)}
                        value={data.status}
                    >
                        <option></option>
                        <option>Active</option>
                        <option>Drop Out</option>
                    </select>
                    <InputError message={errors.status} className="mt-2" />
                </div>
            </div>
            {/*<div className='mt-4'>
                <span className='text-lg font-medium mt-2'>Personal Details</span>
            </div>*/}
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Grade</label>
                    <select name='grade' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full'
                        onChange={(e) => setData('grade', e.target.value)}
                        value={data.grade}
                    >
                        <option></option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <InputError message={errors.grade} className="mt-2" />
                </div>
                <div className='mt-6'>
                    <label className='block font-medium text-sm text-gray-700'>Center</label>
                    <Select
                        showSearch
                        style={{ width: '100%', height: 44, paddingTop:4 }}
                        placeholder="Select a center"
                        optionFilterProp="children"
                        onChange={handleChange}
                        /*onFocus={handleFocus}
                        onBlur={handleBlur}*/
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        {centers.map(center => (
                            <Option key={center.id} value={center.id}>
                                {center.center_name}
                            </Option>
                        ))}
                        {/*<Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>*/}
                    </Select>
                </div>
            </div>
            
            <div className='grid grid-cols-2 gap-2'>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Date Joined</label>
                    <DatePicker
                        name='join_date'
                        format="YYYY-MM-DD"
                        style={{ width: '100%', height: 44, paddingTop:4 }}
                        onChange={onJoinDateChange}
                    />
                    {/*<select name='gender' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full'
                        onChange={(e) => setData('gender', e.target.value)}
                        value={data.gender}
                    >
                        <option></option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>*/}
                    <InputError message={errors.join_date} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Contact Number</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='contact_number'
                        onChange={(e) => setData('contact_number', e.target.value)}
                        value={data.contact_number}
                    />
                    <InputError message={errors.contact_number} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Alternative Number</label>
                    <input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='alternative_number'
                        onChange={(e) => setData('alternative_number', e.target.value)}
                        value={data.alternative_number}
                    />
                    <InputError message={errors.alternative_number} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Province</label>
                    <select name='province' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' plcaeholder='Select Province....'
                        onChange={(e) => setData('learner_province', e.target.value)}
                        value={data.learner_province}
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
                    <InputError message={errors.learner_province} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Race</label>
                    <select name='learner_race' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' plcaeholder='Select Race....'
                        onChange={(e) => setData('learner_race', e.target.value)}
                        value={data.learner_race}
                    >
                        <option></option>
                        <option>African</option>
                        <option>Coloured</option>
                        <option>White</option>
                        <option>Asian</option>
                        <option>Other</option>
                    </select>
                    <InputError message={errors.learner_race} className="mt-2" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Nationality</label>
                    {/*<input className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' 
                        onChange={(e) => setData('learner_nationality', e.target.value)}
                        value={data.learner_nationality}
                    />*/}
                    <select name='nationality' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' plcaeholder='Select Nationality....'
                        onChange={(e) => setData('learner_nationality', e.target.value)}
                        value={data.learner_nationality}
                    >
                        <option></option>
                        <option>South African</option>
                        <option>Non-South African</option>
                    </select>
                    <InputError message={errors.learner_nationality} className="mt-2" />
                </div>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Home Language</label>
                    <select name='learner_home_language' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full'
                        onChange={(e) => setData('learner_home_language', e.target.value)}
                        value={data.learner_home_language}
                    >
                        <option></option>
                        <option>Afrikaans</option>
                        <option>English</option>
                        <option>IsiXhosa</option>
                        <option>IsiZulu</option>
                        <option>Setswana</option>
                        <option>Venda</option>
                        <option>Tsonga</option>
                        <option>Southen Sotho</option>
                        <option>Nothern Sotho</option>
                        <option>Swati</option>
                        <option>Ndebele</option>
                        <option>Other</option>
                    </select>
                    <InputError message={errors.learner_home_language} className="mt-2" />
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className="mt-6">
                    <label className='block font-medium text-sm text-gray-700'>Physical Address</label>
                    <textarea className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' type='text' name='physical_address'
                        onChange={(e) => setData('physical_address', e.target.value)}
                        value={data.physical_address}
                    ></textarea>
                    <InputError message={errors.physical_address} className="mt-2" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='mt-6'>
                    <label className='block font-medium text-sm text-gray-700'>Replacement</label>
                    <div className="grid grid-cols-6 gap-2">
                        <div className='flex items-center'>
                            <label className='block text-sm text-gray-700 py-1'>Yes</label>
                            <input type='radio' name='replacement' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm m-1 block' 
                            onChange={(e) => setData('replacement', e.target.value)}
                            value={'Yes'}
                            checked={learner.replacement === "Yes"}
                        />
                        </div>
                        <div className='flex items-center'>
                            <label className='block text-sm text-gray-700 py-1'>No</label>
                            <input type='radio' name='replacement' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm m-1 block' 
                            onChange={(e) => setData('replacement', e.target.value)}
                            value={'No'}
                            checked={learner.replacement === "No"}
                        />
                        </div>
                    </div>
                    <InputError message={errors.replacement} className="mt-2" />
                </div>
                <div className='mt-6'>
                    <label className='block font-medium text-sm text-gray-700'>Disability</label>
                    <div className="grid grid-cols-6 gap-2">
                        <div className='flex items-center'>
                            <label className='block text-sm text-gray-700 py-1'>Yes</label>
                            <input type='radio' name='disability' id='dis1' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm m-1 block' 
                            onChange={(e) => setData('disability', e.target.value)}
                            value={'Yes'}
                            checked={learner.replacement === "Yes"}
                        />
                        </div>
                        <div className='flex items-center'>
                            <label className='block text-sm text-gray-700 py-1'>No</label>
                            <input type='radio' name='disability' id='dis2' className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm m-1 block' 
                            onChange={(e) => setData('disability', e.target.value)}
                            value={'No'}
                            checked={learner.replacement === "No"}
                        />
                        </div>
                    </div>
                    <InputError message={errors.replacement} className="mt-2" />
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
            
            {/*<div className='text-center mt-6'>
                <button className='p-2 add-button text-white rounded' type='submit'>
                    <span className='inline-block px-2'>Save</span>
                </button>
            </div>*/}
        </form>
    )
}