import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  id: string;
}

export async function generateMetadata({
  params: { id },
}: {
  params: IParams;
}) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetails({ params: { id } }: { params: IParams }) {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
