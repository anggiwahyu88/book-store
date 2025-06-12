
export default function Card({handleBayar, book, setDataDetailBook}) {
    
    return (
        <div onClick={()=>{document.getElementById('my_modal_3').showModal();setDataDetailBook(book)}} className="cursor-pointer hover:scale-105 transition-all card bg-base-100 w-full shadow-sm pt-4">
            <figure>
                <img
                    src={book.thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-medium text-sm line-clamp-2 ">{book.title}</h2>
                <div className="card-actions justify-end">
                    <span className="mr-auto font-bold text-lg text-blue-600">Rp. {book.price}</span>
                    <button className="btn btn-primary btn-sm" onClick={(e)=>handleBayar(e, book?.id||1)}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}