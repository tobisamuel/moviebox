import Image from "next/image";
import MovieCard from "./components/MovieCard";
import Link from "next/link";

async function getData() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const token = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="w-full h-full">
      <div className="w-full h-[600px] relative">
        <div className="w-full flex items-center px-4 lg:px-24 absolute z-50 h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(0,_0,_0,_0.50)_0%,rgba(0,_0,_0,_0.50)_100%)]">
          <div className="lg:max-w-sm text-white space-y-4">
            <h1 className="text-5xl font-bold">John Wick 3 : Parabellum</h1>

            <div className="flex gap-8 item-center">
              <div className="flex gap-2.5">
                <Image src="/imdb.png" alt="Imdb logo" width={35} height={17} />
                <span>86.0 / 100</span>
              </div>

              <div className="flex gap-2.5">
                <Image
                  src="/tomato.png"
                  alt="Rotten tomato logo"
                  width={18}
                  height={17}
                />
                <span>97%</span>
              </div>
            </div>

            <p>
              John Wick is on the run after killing a member of the
              international assassins&apos; guild, and with a $14 million price
              tag on his head, he is the target of hit men and women everywhere.
            </p>
            <button className="flex gap-2 rounded-md px-4 py-1.5 bg-[#BE123C]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                  fill="white"
                />
              </svg>

              <span className="uppercase font-bold text-sm">Watch Trailer</span>
            </button>
          </div>
        </div>

        <Image
          src="/banner.jfif"
          alt="banner image"
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-16 lg:px-24 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold">Featured Movies</h2>

          <Link href="/" className="text-lg text-[#BE123C]">
            See More
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-20 lg:grid-cols-4">
          {data.results.slice(0, 10).map((movie: any) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              name={movie.title}
              rating={movie.vote_average}
              genreIds={movie.genre_ids}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
