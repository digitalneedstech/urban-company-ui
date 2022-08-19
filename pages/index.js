import Head from "next/head";
import Banner from "../components/home/banner";
import ServiceCarousel from "../components/home/serviceCarousel";
import HomeAncillary from "../components/home/ancillary";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Protocall</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Banner />
      <ServiceCarousel />
      <HomeAncillary />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};
