import Head from 'next/head';
import Link from "next/link";

import {QueryClient, useQuery} from "react-query";
import {dehydrate} from "react-query/hydration";

import {starWarsAPI} from "../api";

// init api
const api = starWarsAPI();

export async function getServerSideProps(context) {
  // init the query client
  const queryClient = new QueryClient()

  // prefetch the data on the server
  await queryClient.prefetchQuery("people", () => api.getPeople());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default function Home() {

  const {data: people, isLoading, isError} = useQuery("people", () => api.getPeople());

  return (
    <div className="h-full flex flex-col dark:bg-gray-900">
      <Head>
        <title>Star Wars</title>
      </Head>
      <nav className="h-12 flex items-center px-4 bg-gray-50 dark:bg-gray-900 border-b border-solid dark:border-gray-700 border-gray-300">
        <a href="/" className="mr-4 dark:text-gray-50">Home</a>
        <a href="/triage" className="mr-4 dark:text-gray-50">Triage</a>
        <a href="/star-wars" className="dark:text-gray-50">Star Wars</a>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-6xl text-gray-900 dark:text-gray-50 font-bold mb-8">Star Wars Characters</h1>
        <div className="bg-gray-100 dark:bg-gray-800 w-96 rounded-lg py-2">
          {people.results.map((person) => {
            // split the url
            const personUrlParts = person.url.split("/").filter(Boolean);

            // get the personID from the url
            const personId = personUrlParts[personUrlParts.length - 1];
            return (
              <Link key={person.name} href={`/people/${personId}`}>
                <div key={person.name} className="transition-colors duration-100 p-4 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                  <h5 className="text-gray-900 dark:text-gray-50 font-bold">{person.name}</h5>
                  <p className="text-gray-900 dark:text-gray-200">{person.gender}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
