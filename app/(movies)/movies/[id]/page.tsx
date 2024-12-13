import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
