export default function Modal({book,handleBayar}) {
    
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button id="btn-close" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Detail Buku</h3>
                 <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={book?.thumbnail||""}
                        className="max-w-sm rounded-lg shadow-2xl w-48"
                    />
                    <div>
                        <h1 className="text-xl font-bold">{book?.title}</h1>
                        <p className="pt-4 pb-2 text-sm">{book?.description}</p>
                        <ul className="font-semibold">
                            <li>Tanggal Terbit: {book?.published_date}</li>
                            <li>Penerbit: {book?.publisher?.name}</li>
                        </ul>
                        <div className="mt-4">
                            <span className="text-xl font-bold  text-blue-600 mr-6">Rp. {book?.price}</span>
                            <button className="btn btn-primary" onClick={handleBayar}>Beli Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </dialog>
    )
}