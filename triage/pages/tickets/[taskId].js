import React from "react";
import Head from "next/head";

export function getServerSideProps(context) {

  // fetch task here.

  return {
    props: {
      task: {
        taskId: 1,
        name: "task thing",
        customer: "baconsecurity"
      }
    }
  }
}

export default function Ticket({ task }) {
  return (
    <div className="h-full dark:bg-gray-900">
      <Head>
        <title>Ticket - {task.customer}</title>
      </Head>

      <h1>Open a ticket for {task.customer}</h1>
    </div>
  );
}
