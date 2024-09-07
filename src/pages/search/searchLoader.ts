import { PackageSummary } from "../../api/types/packageSummary";
import { searchPackages } from "../../api/queries/searchPackages";

// This is the way to enforce the types on the returned values from this hook --> set it as the return value of the signature
export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}

// Using this technique of searchLoader calling searchPackage to future-proof
// this way it's much easier for the loader to showcase any amount of different requests related to search (even though now we only have one - searchPackages)
export async function searchLoader({ request }: { request: Request }): Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("Search term must be provided");
  }

  const results = await searchPackages(term);
  return {
    searchResults: results,
  };
}
