import * as React from "react";

import Head from 'next/head';
import Link from "next/link";

import {QueryClient, useQuery} from "react-query";
import {dehydrate} from "react-query/hydration";

import {starWarsAPI} from "../../../api";
import {useRouter} from "next/router";

// init api
const api = starWarsAPI();

export async function getServerSideProps(context) {
  // get url params
  const { query: { personId } } = context;

  // init the query client
  const queryClient = new QueryClient()

  // prefetch the data on the server
  await queryClient.prefetchQuery(["person", Number(personId)], () => api.getPerson({ personId: Number(personId) }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default function Person() {

  // init router
  const router = useRouter();

  // init query to get person
  const {data: person, isLoading, isError} = useQuery(["person", Number(router.query.personId)], () => api.getPerson({ personId: Number(router.query.personId)}));

  // handle going back
  const handleBack = React.useCallback(() => {
    // go back
    router.back();
  }, []);

  return (
    <div className="h-full flex flex-col dark:bg-gray-900">
      <Head>
        <title>Star Wars - {person.name}</title>
      </Head>

      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-6xl dark:text-gray-50 font-bold mb-8">{person.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4   ">
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h3 className="text-gray-900 dark:text-gray-50 font-bold text-xl mb-2">Gender</h3>
            <p className="text-gray-900 dark:text-gray-50">{person.gender === "n/a" ? "Not Applicable" : person.gender}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h3 className="text-gray-900 dark:text-gray-50 font-bold text-xl mb-2">Eye Color</h3>
            <p className="text-gray-900 dark:text-gray-50">{person.eyeColor}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
            <h3 className="text-gray-900 dark:text-gray-50 font-bold text-xl mb-2">Height</h3>
            <p className="text-gray-900 dark:text-gray-50">{person.height}</p>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-gray-50 rounded-md px-2 py-2" onClick={handleBack}>Go Back</button>
      </div>
    </div>
  );
}
