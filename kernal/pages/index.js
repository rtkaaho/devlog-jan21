import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Kernal</title>
      </Head>
      <nav className="h-12 flex items-center px-4 bg-gray-50 dark:bg-gray-900 border-b border-solid dark:border-gray-700 border-gray-300">
        <a href="/" className="mr-4 dark:text-gray-50">Home</a>
        <a href="/triage" className="mr-4 dark:text-gray-50">Triage</a>
        <a href="/star-wars" className="dark:text-gray-50">Star Wars</a>
      </nav>
      <div className="flex flex-col h-full dark:bg-gray-800">
        <div className="h-12 flex-shrink-0 bg-gray-100 dark:bg-gray-700 border-b border-solid border-gray-300 dark:border-gray-700" />
        <div className="flex flex-col flex-grow p-8">
          <div className="h-8 w-24 rounded-md bg-gray-100 dark:bg-gray-700 mb-8" />
          <div className="flex-grow w-full rounded-md bg-gray-100 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
