import UserLayout from "@/Layouts/UserLayout";
import { Link, router } from "@inertiajs/react";

export default function Book({ books }) {

    function hapus(id) {
        router.post('/book/delete', {id})
    }
    return (
        <UserLayout>
            <div className="w-full flex">
                <Link href={"/book/upload"} class="btn btn-outline btn-primary ml-auto">Unggah Buku</Link>
            </div>

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Judul</th>
                            <th>Tanggal Tenerbit</th>
                            <th className="items-center justify-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book,i) => {                                                                
                                return (
                                    <tr key={i}>
                                        <th>{i+1}</th>
                                        <td><img width="60" src={book.thumbnail} alt="" /></td>
                                        <td>{book.title}</td>
                                        <td>{book.published_date}</td>
                                        <td><Link href={`/book/${book.id}`} className="btn btn-link">Update</Link>
                                         <button className="btn btn-link" onClick={()=>hapus(book.id)}>Hapus</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </UserLayout>
    )
}