import UserLayout from "@/Layouts/UserLayout";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function BookUdate({book}) {
    const [values, setValues] = useState({
        name: book.name,
        title: book.title,
        description: book.description,
        thumbnail: book.thumbnail,
        link_access: book.link_access,
        price: book.price,
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        router.post(`/book/${book.id}`, values)
    }

    return (
        <UserLayout>
            <div className="flex flex-col gap-3 items-center h-screen">
                <div>
                    <h1 className="font-bold text-5xl mt-4">Form Buku</h1>
                </div>
                <form className="flex flex-col gap-6 mt-8 w-full px-8 max-w-xl" onSubmit={handleSubmit}>
                    <label className="floating-label">
                        <span>Judul Buku</span>
                        <input id='title' type="text" value={values.title} onChange={handleChange} placeholder="judul" className="input input-lg w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Deskripsi Buku</span>
                        <textarea id='description' value={values.description} onChange={handleChange} className="textarea textarea-lg" placeholder="deskripsi"></textarea>
                    </label>
                    <label className="floating-label">
                        <span>Image Url</span>
                        <input id='thumbnail' type="url" value={values.thumbnail} onChange={handleChange} placeholder="https://image-url" className="input input-lg w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Access Url</span>
                        <input id='link_access' type="url" value={values.link_access} onChange={handleChange} placeholder="https://access-url" className="input input-lg w-full" />
                    </label>
                    <label className="floating-label">
                        <span>Harga</span>
                        <input id='price' type="number" value={values.price} onChange={handleChange} placeholder="Rp. " className="input input-lg w-full" />
                    </label>
                    <button className="btn btn-primary" type="submit">Submit</button>

                </form>
            </div>
        </UserLayout>
    )
}