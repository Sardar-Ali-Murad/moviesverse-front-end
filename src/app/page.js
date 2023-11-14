"use client";
import React from "react";
import Movies from "@/components/home/movies";
import axios from "axios";
import Header from "@/components/common/Header";
import ClipLoader from "react-spinners/ClipLoader";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/bootstrap.css";
import Footer from "@/components/common/Footer";
import Head from "next/head";

const page = () => {
  let [movies, setMovies] = React.useState([]);
  let [totalPages, setTotalPages] = React.useState(1);
  let [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  let [searchInput, setSearchInput] = React.useState("");
  let [webUrl, setURL] = React.useState(
    "https://moviesverse1.p.rapidapi.com/movies"
  );

  React.useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const options = {
        method: "GET",
        url: `${webUrl}/${currentPage}`,
        headers: {
          "X-RapidAPI-Key":
            "f78c0b8604mshfc42227a084fcafp12de63jsnd5bbc1a8c81f",
          "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
        },
      };
      try {
        const { data } = await axios.request(options);
        setMovies(data?.movies);
        setTotalPages(data?.totalPages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getMovies();
  }, [webUrl, currentPage]);

  React.useEffect(() => {
    if (totalPages === 0) {
      setTotalPages(1);
    }
  }, [totalPages]);
  return (
    <>
      <Head>
        <title>Movies Verse - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Find and download your favorite movies. Search by category, genre, year, and streaming platforms like Netflix and Amazon Prime."
        />
        <meta
          name="keywords"
          content="movies, download movies, streaming, Netflix, Amazon Prime, genres, categories, years"
        />
        <meta name="author" content="Sardar Ali Murad" />
        <meta property="og:title" content={`Movies Verse -  Home`} />
        <meta
          property="og:description"
          content="Find and download your favorite movies. Search by category, genre, year, and streaming platforms like Netflix and Amazon Prime."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://moviesverse.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Find and download your favorite movies. Search by category, genre, year, and streaming platforms like Netflix and Amazon Prime."
        />
      </Head>
      <div className="bg-primary min-h-[100vh] pb-[10px]">
        <Header
          setURL={setURL}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          setMovies={setMovies}
          setTotalPages={setTotalPages}
          setLoading={setLoading}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <div className="px-[30px] md:px-[50px] lg:px-[100px]">
          {loading ? (
            <div className="mt-[100px]">
              <ClipLoader
                color="#fff"
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div>
              {movies.length === 0 && (
                <p className="text-[20px] font-bold mt-[30px] text-[#fff]">
                  No movies to show by this filter!
                </p>
              )}
              <Movies array={movies} />
              <div className="py-[30px] w-[200px] md:w-[300px] lg:w-[300px]">
                <ResponsivePagination
                  current={currentPage}
                  total={totalPages}
                  onPageChange={setCurrentPage}
                  className="fancy flex flex-row gap-[10px] w-[300px]"
                  pageItemClassName="bg-[#fff] px-[10px] py-[5px] rounded"
                  activeItemClassName="bg-[#353935]   border-dotted border-2 border-indigo-600"
                />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
