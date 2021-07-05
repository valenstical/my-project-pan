import Head from 'next/head'
import { TopHeader } from '../components/TopHeader';
import { MainHeader } from '../components/MainHeader';
import { SideBar } from '../components/SideBar';
import { ShopProducts } from '../components/ShopProducts';
import { gql } from '@apollo/client';
import { GrophQlClient } from '../services/graphql';
import {CartProvider} from '../context/cartContext'


export default function Home(props) {
  return (
    <>
      <Head>
        <title>LuminSkin Product Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width"/>
      </Head>

      <CartProvider>
        <div className="grid grid-cols-1 grid-rows">
          <SideBar />
          <TopHeader></TopHeader>
          <MainHeader></MainHeader>

          <div className="main-content flex">
            <ShopProducts products={props.products} />
          </div>
          <div className="main-footer"></div>
        </div>
      </CartProvider>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await GrophQlClient.query({
    query: gql`
    query {
      products {
        id
        title
        image_url
        price(currency:USD)
      }
    }
    `,
  });
  return {
    props: {
      products: data.products,
    },
 };
}