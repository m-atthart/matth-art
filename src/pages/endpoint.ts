import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const queryParams = [...searchParams.keys()].reduce(
    (acc, curr) => {
      acc[curr] = searchParams.get(curr)!;
      return acc;
    },
    {} as Record<string, string>,
  );

  return new Response(
    JSON.stringify({
      queryParams,
    }),
  );
};
