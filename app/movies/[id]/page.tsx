import { getYearFromDate } from "@/utils";
import Image from "next/image";

type Props = { params: { id: string } };

async function fetchMovieDetails(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

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

export default async function Home({ params: { id } }: Props) {
  const movie = await fetchMovieDetails(id);

  return (
    <div className="min-h-screen">
      <div className="p-4 lg:p-9">
        {/* create a container div for the image and add the fill prop to the Image component, set height and width values for the container div (very important), set position to relative */}
        <div className="w-full h-[449px] relative">
          <Image
            className="rounded-lg object-cover"
            src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="movie poster"
            fill
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between px-4 lg:px-12 mb-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 text-[#404040] font-semibold text-2xl">
          <p>{`${movie.title}  •  ${getYearFromDate(
            movie.release_date
          )}  •  PG-13  •  ${movie.runtime} minutes`}</p>

          <div className="flex gap-3">
            {movie.genres.map((genre: any) => (
              <span
                className="py-1 px-4 font-medium text-base text-[#B91C1C] border rounded-2xl border-[#F8E7EB]"
                key={genre.id}
              >
                {genre.name}{" "}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2.5 text-[#111827]">
            <Image src="/Star.png" alt="Imdb logo" width={24} height={24} />

            <span>{`${movie.vote_average} | ${movie.vote_count}`}</span>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-12 mb-10 flex flex-col lg:flex-row gap-6">
        <div className="font-normal text-xl">
          <p className="text-[#333333] mb-8">{movie.overview}</p>

          <p className="mb-8">
            Director: <span className="text-[#BE123C]">Joseph Kosinski</span>
          </p>

          <p className="mb-8">
            Writers:{" "}
            <span className="text-[#BE123C]">
              Jim Cash, Jack Epps Jr, Peter Craig
            </span>
          </p>

          <p className="mb-8">
            Stars:{" "}
            <span className="text-[#BE123C]">
              Tom Cruise, Jennifer Connelly, Miles Teller
            </span>
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="rounded-lg bg-[#BE123C] text-white px-5 py-3">
              Top rated movie #65
            </div>

            <div className="rounded-lg border border-[#C7C7C7] px-5 py-3">
              Awards 9 nominations
            </div>
          </div>
        </div>

        <div className=" space-y-6">
          <div className="flex justify-center items-center gap-2 bg-[#BE123C] w-full lg:w-[360px] h-14 rounded-lg">
            <Image src="/TwoTickets.png" alt="ticket" width={25} height={25} />
            <p className="font-medium text-xl text-white">See ShowTimes</p>
          </div>

          <div className="flex justify-center items-center gap-2 bg-[#BE123C]/10 w-full lg:w-[360px] h-14 rounded-lg border border-[#BE123C]">
            <Image src="/ListB.png" alt="ticket" width={25} height={25} />
            <p className="font-medium text-xl">More watch options</p>
          </div>

          <div className="mt-4 relative rounded-lg w-full lg:w-[360px] h-[229px]">
            <Image
              src="/ad.png"
              alt="advertisement"
              fill
              className="object-cover"
            />

            <div className="p-2 w-full flex justify-between items-center gap-2 bg-[#12121280]/50 backdrop-blur-sm absolute bottom-0 rounded-lg">
              <Image src="/List.png" alt="ticket" width={25} height={25} />
              <p className="font-medium text-sm text-white">
                The Best Movies and Shows in September
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
