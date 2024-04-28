// Next
import { NextPage } from 'next';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

// Components
import { Layout } from 'components/layout';

const Cloud: NextPage = () => {
  return (
    <>
      <Head>
        <title>WORKDB - Cloud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout selectedKey="3">
        <h1>Cloud</h1>
      </Layout>
    </>
  );
};

export default Cloud;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
