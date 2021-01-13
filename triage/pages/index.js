import Head from 'next/head';
import Link from "next/link";

export default function Triage() {
  return (
    <div className="h-full w-full">
      <Head>
        <title>Triage</title>
      </Head>
      <div className="flex flex-col h-full">
        <nav className="h-12 flex items-center px-4 dark:bg-gray-900 border-b border-solid border-gray-700">
          <a href="/" className="mr-4 dark:text-gray-50">Home</a>
          <a href="/triage" className="mr-4 dark:text-gray-50">Triage</a>
          <a href="/star-wars" className="dark:text-gray-50">Star Wars</a>
        </nav>
        <div className="flex h-full w-full">
          <div className="min-w-max w-64 bg-gray-50 dark:bg-gray-900 flex-shrink-0 border-r border-solid border-gray-300 dark:border-gray-700">
          </div>
          <div className="flex flex-col bg-blue-100 dark:bg-gray-800 flex-grow">
            <div className="h-40 bg-gray-50 dark:bg-gray-900 border-b border-solid border-gray-300 dark:border-gray-700 flex-shrink-0">
            </div>
            <div className="flex flex-col p-8 pt-0 h-full w-full flex-grow">
              <div className="flex items-center py-4" />
              <div className="h-full w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
