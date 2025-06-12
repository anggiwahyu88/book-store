import UserLayout from '@/Layouts/UserLayout';
import { Link, router } from '@inertiajs/react'
import { useState } from 'react'

export default function Register() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        website: "",
        password: "",
        isPublisher: false
    })

    function handleChange(e) {
        const key = e.target.id;
        let value
        if (e.target.id == "isPublisher") {
            value = e.target.checked
        } else {
            value = e.target.value
        }
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/register', values)
    }

    return (
        <UserLayout>
            <div className='flex flex-col gap-3 items-center mt-20 min-h-screen'>

                <div>
                    <h1 className="font-bold text-5xl mt-4">Register Form</h1>
                </div>

                <form className="flex flex-col gap-6 mt-8 w-full px-8 max-w-xl" onSubmit={handleSubmit}>
                    <label className="floating-label">
                        <span>Nama Kamu</span>
                        <input id='name' type="text" value={values.name} onChange={handleChange} placeholder="nama" className="input input-lg w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Email Kamu</span>
                        <input id='email' type="email" value={values.email} onChange={handleChange} placeholder="mail@site.com" className="input input-lg w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Alamat Kamu</span>
                        <textarea id='address' value={values.address} onChange={handleChange} className="textarea textarea-lg" placeholder="alamat lengkap"></textarea>
                    </label>
                    {
                        values.isPublisher ?
                            <>
                                <label className="floating-label">
                                    <span>No HP Kamu</span>
                                    <input id='phone' type="text" value={values.phone} onChange={handleChange} placeholder="08xxxxxx" className="input input-lg w-full" />
                                </label>
                                <label className="floating-label">
                                    <span>Website Kamu</span>
                                    <input id='website' type="url" value={values.website} onChange={handleChange} placeholder="htpps://exmaple.com" className="input input-lg w-full" />
                                </label>
                            </> : ""
                    }
                    <label className="floating-label">
                        <span>Password Kamu</span>
                        <input id='password' type="password" value={values.password} onChange={handleChange} placeholder="password" className="input input-lg w-full" />
                    </label>
                    <label className="label">
                        <input id='isPublisher' type="checkbox" defaultChecked={false} value={values.password} onChange={handleChange} className="toggle" />
                        {values.isPublisher ? "Publisher" : "Member"}
                    </label>
                    <p>
                        Sudah punya akun, silahkan <Link className="link" href={"/login"}>login</Link>
                    </p>
                    <button className="btn btn-primary" type='submit'>Submit</button>

                </form>
            </div>
        </UserLayout>
    )
}