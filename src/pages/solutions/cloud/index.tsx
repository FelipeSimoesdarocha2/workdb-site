// Next
import { NextPage } from 'next';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Components
import { Layout } from 'components/layout';

const Cloud: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>WORKDB - Cloud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://waiuru.com${asPath}`} />
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
