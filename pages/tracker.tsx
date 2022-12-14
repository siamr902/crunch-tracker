import { Exercise, User } from "@prisma/client";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/payment/Footer";
import FitnessTracker from "../components/tracker/FitnessTracker";
import Header from "../components/tracker/Header";
import { TrackerContext } from "../contexts/TrackerContext";
import { prisma } from "../lib/prisma";

type Props = {
  user: User & {
    workouts: {
      exercises: Exercise[];
      id: string;
      name: string;
      rating: number;
      duration: number;
      notes: string;
    }[];
  };
};

const Tracker = ({ user }: Props) => {
  return (
    <TrackerContext.Provider value={user}>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Head>
          <title>Crunch Tracker - Monitor Your Progress</title>
          <link rel="shortcut icon" href="/crunch-logo.svg" />
        </Head>
        <ToastContainer />
        <Header />
        <FitnessTracker />
        <Footer />
      </motion.aside>
    </TrackerContext.Provider>
  );
};

export default Tracker;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  const user = await prisma?.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    include: {
      workouts: {
        where: {
          rating: { gte: 1 },
        },
        select: {
          exercises: true,
          id: true,
          name: true,
          rating: true,
          duration: true,
          notes: true,
        },
      },
    },
  });

  return {
    props: {
      user,
    },
  };
};
