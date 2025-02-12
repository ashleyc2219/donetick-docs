import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
       
      </div>
    </header>
  );
}


export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  // reroute to get started automatically:
  useEffect(() => {
    window.location.href = '/getting-started';
  }, []);
  return null;

}
