import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

const OrderConfirm = dynamic(() => import('../../components/checkout/Confirm'),
  { ssr: false }
)

function Confirm() {
  return (
    <>
      <Head>
        <title>Orden | Salud y Figura </title>
      </Head>
      <OrderConfirm />
    </>
  )
}

export default Confirm;
