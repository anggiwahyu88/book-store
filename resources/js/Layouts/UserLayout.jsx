import { Link, router, usePage } from "@inertiajs/react";

export default function UserLayout({ children }) {
    const publisher = usePage().props.auth.publisher;
    const member = usePage().props.auth.member;
    function logout() {
        router.post('/logout', { isPublisher: publisher ? true : false })
    }
    return (
        <div className="min-h-screen bg-gray-200">
            <nav className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link href={"/"} className="btn btn-ghost text-xl">Book Store</Link>
                </div>
                <div className="flex-none">
                    {!publisher && !member ? <Link href={"/login"}>Masuk</Link> :
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary>{publisher?.name || member.name}</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2 z-10">
                                        {member ?
                                            <li><Link href={"/koleksi"}>Koleksi</Link></li> :
                                            <li><Link href={"/book"}>Buku</Link></li>
                                        }
                                        <li><button onClick={logout}>Logout</button></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
            <div className="mt-4 px-4">
                {children}
            </div>
        </div>
    )
}