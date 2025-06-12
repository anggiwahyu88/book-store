import UserLayout from "@/Layouts/UserLayout";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Login() {
    const [values, setValues] = useState({
        email: "",
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
        router.post('/login', values)
    }


    return (
        <UserLayout>
            <div className="flex flex-col items-center mt-20">
                <div>
                    <h1 className="text-center font-bold text-5xl">Login Form</h1>
                </div>
                <form className="flex flex-col gap-6 mt-8 w-full px-8 max-w-xl" onSubmit={handleSubmit}>
                    <label className="floating-label">

                        <span>Email Kamu</span>
                        <input id="email" value={values.email} onChange={handleChange} type="email" placeholder="mail@site.com" className="input input-lg w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Password Kamu</span>
                        <input id="password" value={values.password} onChange={handleChange} type="password" placeholder="password" className="input input-lg w-full" />
                    </label>
                    <label className="label">
                        <input id='isPublisher' defaultChecked={false} value={values.password} onChange={handleChange} type="checkbox" className="toggle" />
                        {values.isPublisher ? "Publisher" : "Member"}
                    </label>
                    <p>
                        Belum punya akun, silahkan <Link className="link" href={"/register"}> register</Link>
                    </p>
                    <button class="btn btn-primary">Submit</button>

                </form>
            </div>
        </UserLayout>
    )
}