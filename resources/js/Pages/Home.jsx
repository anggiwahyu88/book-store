import Card from '@/Components/Card';
import Modal from '@/Components/Modal';
import UserLayout from '@/Layouts/UserLayout';
import { router, usePage } from "@inertiajs/react";
import { useState } from 'react';

export default function Home({ books }) {
  const { csrf_token } = usePage().props;
  const [dataDetailBook, setDataDetailBook] = useState()

  async function handleBayar(event, id) {
    event.stopPropagation();
    const id_book = id || dataDetailBook.id

    // const response = await fetch("/transaction/pay", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-CSRF-TOKEN": csrf_token
    //   },
    //   body: JSON.stringify({ id_book })
    // })
    // const data = await response.json()

    // window.snap.pay(data.token, {
    //   onSuccess: async function (result) {
    function random5DigitString() {
      return Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0");
    }

    const response = await fetch("/transaction/succses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrf_token
      },
      body: JSON.stringify({ id_book, order_id: random5DigitString() })
    })
    router.visit("/koleksi")
    //   },
    // });
    document.getElementById("btn-close").click()
  }
  return (
    <UserLayout>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center gap-4 max-w-7xl mx-auto'>
        {books.map((book, i) => {
          return (
            <Card key={i} book={book} setDataDetailBook={setDataDetailBook} handleBayar={handleBayar} />
          )
        })}
        <Modal book={dataDetailBook} handleBayar={handleBayar} />
      </div>
    </UserLayout>
  );
}
