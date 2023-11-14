"use client";
import React from "react";
import Header from "@/components/movie/Navbar";
import Footer from "@/components/common/Footer";
import axios from "axios";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";

const Movie = ({ params }) => {
  let [info, setInfo] = React.useState({});
  let [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const getMovieInfo = async () => {
      setLoading(true);
      const options = {
        method: "GET",
        url: `https://moviesverse1.p.rapidapi.com/movie/singleMovie/${params?.id}`,
        headers: {
          "X-RapidAPI-Key":
            "f78c0b8604mshfc42227a084fcafp12de63jsnd5bbc1a8c81f",
          "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
        },
      };

      try {
        const { data } = await axios.request(options);
        setInfo(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    getMovieInfo();
  }, []);
  return (
    <div className="bg-primary min-h-[100vh] pb-[10px]">
      <Header />
      {loading ? (
        <div className="flex flex-col gap-[30px] px-[30px] md:px-[50px] lg:px-[100px] text-[#fff] py-[100px]">
          <ClipLoader
            color="#fff"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-[30px] px-[30px] md:px-[50px] lg:px-[100px] text-[#fff] py-[100px]">
          <h1 className="text-[25px]">{info?.header}</h1>
          <p className="text-[14px]">{info?.intro}</p>
          <div className="flex flex-col gap-[10px]">
            {info?.movieInfo?.map((item) => {
              return (
                <div className="flex flex-row gap-[5px] items-center">
                  <p className="text-[18px] font-bold">{item?.highlighter}</p>
                  <p className="text-[14px] underline mt-[2px]">{item?.info}</p>
                </div>
              );
            })}
          </div>
          <p>{info?.storyLine}</p>
          <div className="flex flex-col gap-[10px]">
            {info?.extraInfo?.map((item) => {
              return (
                <div className="flex flex-row gap-[5px] items-center">
                  <p className="text-[18px] font-bold">{item?.header}</p>
                  <p className="text-[14px] underline mt-[2px]">{item?.para}</p>
                </div>
              );
            })}
          </div>
          <Image
            src={info?.screenShots}
            height={300}
            width={200}
            unoptimized
            alt={params?.id}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Movie;
