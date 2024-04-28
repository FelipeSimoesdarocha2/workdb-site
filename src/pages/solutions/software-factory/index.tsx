// Next
import { NextPage } from 'next';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// i18n
import useTranslations from 'i18n';

// Components
import { Layout } from 'components/layout';

const SoftwareFactory: NextPage = () => {
  const { asPath } = useRouter();
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>
          {t('company')} - {t('pages.guardian')}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://waiuru.com${asPath}`} />
      </Head>
      <Layout selectedKey="5">
        <h1>FÁBRICA DE SOFTWARE</h1>
      </Layout>
    </>
  );
};

export default SoftwareFactory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
