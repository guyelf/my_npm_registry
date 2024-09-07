import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult;

  // the search results are the packages matching to the search (package is a reserved word so I can't use it as variable)
  const renderedReuslts = data.searchResults.map((result) => {
    return <PackageListItem pack={result} key={result.name} />;
  });

  return (
    <div className='text-2xl font-bold my-6'>
      Search Page
      <div className='space-y-4 mt-4'>{renderedReuslts}</div>
    </div>
  );
}
