import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import ConstructionLayout from '@/Layouts/ConstructionLayout';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <ConstructionLayout>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="flex">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mb-4 text-center text-sky-950 font-extralight text-5xl">Something exciting is coming your way soon!</h2>
                    
                </div>
            </div>
        </ConstructionLayout>
    );
}
