import Image from "next/image";

import { getYearFromDate } from "@/utils";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  releaseDate: string;
  image: string;
  genreIds: string[];
  rating: number;
};

const genres = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const token = process.env.NEXT_PUBLIC_API_KEY;

async function getGenresList() {
  const res = await fetch(genres, {
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

export default async function MovieCard({
  id,
  name,
  releaseDate,
  image,
  genreIds,
  rating,
}: Props) {
  const response = await getGenresList();
  const genres = response.genres;

  console.log(genres);

  const filteredGenres = genres.filter((genre: any) =>
    genreIds.includes(genre.id)
  );

  // console.log(name, filteredGenres);

  return (
    <Link href={`/movies/${id}`} className="relative space-y-3 text-xs">
      <Image
        src={`http://image.tmdb.org/t/p/w500/${image}`}
        alt=""
        width={500}
        height={100}
      />
      <p className="text-[#9CA3AF] font-bold">{getYearFromDate(releaseDate)}</p>
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="flex items-center gap-2.5 text-[#111827]">
        <Image src="/imdb.png" alt="Imdb logo" width={35} height={17} />
        {`${rating} / 10`}
      </div>
      <div>
        {filteredGenres.map((genre: any) => (
          <span className="font-bold text-[#9CA3AF]" key={genre.id}>
            {genre.name}{" "}
          </span>
        ))}
      </div>

      <span className="absolute top-1 right-2 p-1.5 rounded-full bg-[#F3F4F6]">
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
            d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
            fill="#D1D5DB"
          />
        </svg>
      </span>
    </Link>
  );
}
