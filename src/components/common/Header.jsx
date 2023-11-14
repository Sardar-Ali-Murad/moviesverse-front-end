import React from "react";
import Image from "next/image";
import { Dropdown } from "flowbite-react";
import axios from "axios";

const Header = ({
  setURL,
  searchInput,
  setSearchInput,
  setMovies,
  setTotalPages,
  setLoading,
  setCurrentPage,
  currentPage,
}) => {
  let moviesArray = [
    {
      name: "LATEST MOVIES",
      link: "latest-movies",
    },
    {
      name: "BOLLWOOD",
      link: "bollywood",
    },
    {
      name: "HINDI MOVIES",
      link: "hindi-movies",
    },
    {
      name: "SOUTH MOVIES",
      link: "south-movies",
    },
    {
      name: "ADULT MOVIES",
      link: "adult-movies",
    },
    {
      name: "TAMIL MOVIES",
      link: "tamil-movies",
    },
    {
      name: "TELUGU MOVIES",
      link: "telugu-movies",
    },
    {
      name: "MARATHI MOVIES",
      link: "marathi-movies",
    },
    {
      name: "GUJARATI MOVIES",
      link: "gujarati-movies",
    },
    {
      name: "BENGALLI MOVIES",
      link: "bengalli-movies",
    },
    {
      name: "BENGALLI MOVIES",
      link: "bengalli-movies",
    },
    {
      name: "KANNADA MOVIES",
      link: "kannada-movies",
    },
  ];

  let genres = [
    {
      name: "ACTION",
      link: "action",
    },
    {
      name: "ACTION SERIES",
      link: "action-series",
    },
    {
      name: "ADULT COMEDY",
      link: "adult-comedy",
    },
    {
      name: "BIOGRAPHY",
      link: "biography",
    },
    {
      name: "COMEDY",
      link: "comedy",
    },
    {
      name: "COMEDY SERIES",
      link: "comedy-series",
    },
    {
      name: "CRIME SERIES",
      link: "crime-series",
    },
    {
      name: "DANCE",
      link: "dance",
    },
    {
      name: "DRAMA",
      link: "drama",
    },
  ];

  let year = [
    {
      name: "2023",
      link: "2023",
    },
    {
      name: "2022",
      link: "2022",
    },
    {
      name: "2021",
      link: "2021",
    },
    {
      name: "2020",
      link: "2020",
    },
    {
      name: "2019",
      link: "2019",
    },
    {
      name: "2018",
      link: "2018",
    },
    {
      name: "2017",
      link: "2017",
    },
    {
      name: "2016",
      link: "2016",
    },
    {
      name: "2015",
      link: "2015",
    },
    {
      name: "2010-2015",
      link: "2010-215",
    },
    {
      name: "2000-2005",
      link: "2000-2005",
    },
    {
      name: "1900-2000",
      link: "1900-2000",
    },
  ];

  let webSeries = [
    {
      name: "NETFLIX",
      link: "netflix",
    },
    {
      name: "AMAZON PRIME VIDEO",
      link: "amazon-prime-video",
    },
    {
      name: "HOTSTAR",
      link: "hotstar",
    },
    {
      name: "ZEE5",
      link: "zee5",
    },
    {
      name: "VOOT",
      link: "voot",
    },
  ];

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const getMovies = async () => {
      const options = {
        method: "GET",
        url: `https://moviesverse1.p.rapidapi.com/movies/movieBySearch/${currentPage}`,
        params: { search: searchInput },
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
  }

  return (
    <div className=" bg-primaryLight px-[20px] rounded-bl-lg rounded-br-lg">
      <div className="flex flex-col md:flex-col lg:flex-row gap-[20px] py-[30px]">
        <div className="flex-1">
          <Image src="/assets/logo.png" height={200} width={200} alt="Logo" />
        </div>
        <form className="flex-1" onSubmit={handleSubmit}>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movies, Series..."
              value={searchInput}
              onChange={(e) => setSearchInput(e?.target?.value)}
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[30px] md:gap-[0px] lg:gap-[0px] text-[#fff] py-[20px]">
        <div className="cursor-pointer">
          <Dropdown label="Movies" dismissOnClick={false}>
            {moviesArray?.map((item, index) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    setURL(
                      `https://moviesverse1.p.rapidapi.com/movies/category/${item?.link}`
                    );
                    setCurrentPage(1);
                  }}
                  key={index}
                >
                  {item?.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>
        <div className="cursor-pointer">
          <Dropdown label="Genre" dismissOnClick={false}>
            {genres?.map((item, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onClick={() => {
                    setURL(
                      `https://moviesverse1.p.rapidapi.com/movies/genre/${item?.link}`
                    );
                    setCurrentPage(1);
                  }}
                >
                  {item?.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>
        <div className="cursor-pointer">
          <Dropdown label="Year" dismissOnClick={false}>
            {year?.map((item, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onClick={() => {
                    setURL(
                      `https://moviesverse1.p.rapidapi.com/movies/year/${item?.link}`
                    );
                    setCurrentPage(1);
                  }}
                >
                  {item?.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>

        <div className="cursor-pointer">
          <Dropdown label="Web Series" dismissOnClick={false}>
            {webSeries?.map((item, index) => {
              return (
                <Dropdown.Item
                  index={index}
                  onClick={() => {
                    setURL(
                      `https://moviesverse1.p.rapidapi.com/movies/webSeries/${item?.link}`
                    );
                    setCurrentPage(1);
                  }}
                >
                  {item?.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
