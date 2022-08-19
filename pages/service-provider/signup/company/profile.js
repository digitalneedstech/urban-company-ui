import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../../../components/layouts/loggedInHeader";
import ProfileImage from "../../../../components/common/profileImage";

export default function Profile() {
  const router = useRouter();

  const onFinishSetup = () => {
    router.push("/service-provider/signup/company/kyc");
  };
  return (
    <>
      <Head>
        <title>Protocall</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ProfileImage onFinishSetup={onFinishSetup} />
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
