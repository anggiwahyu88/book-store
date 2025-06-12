import UserLayout from "@/Layouts/UserLayout";

export default function Koleksi({ transactions }) {

    return (
        <UserLayout>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Judul</th>
                            <th>Penerbit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, i) => {
                            return (
                                <tr key={i}>
                                    <th>{i+1}</th>
                                    <td><img width="60" src={transaction.book.thumbnail} alt="" /></td>
                                    <td>{transaction.book.title}</td>
                                    <td>{transaction.book.publisher.name}</td>
                                    <td><a href={transaction.book.link_access} target="_blank" className="btn btn-link">Baca</a></td>
                                </tr>

                            )
                        })}

                    </tbody>
                </table>
            </div>
        </UserLayout>
    )
}