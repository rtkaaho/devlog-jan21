import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-full dark:bg-gray-900">
      <Head>
        <title>Star Wars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="h-12 flex items-center px-4 bg-gray-50 dark:bg-gray-900 border-b border-solid dark:border-gray-700 border-gray-300">
        <a href="/" className="mr-4 dark:text-gray-50">Home</a>
        <a href="/triage" className="mr-4 dark:text-gray-50">Triage</a>
        <a href="/star-wars" className="dark:text-gray-50">Star Wars</a>
      </nav>
    </div>
  );
}
