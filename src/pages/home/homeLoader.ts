import type { PackageDetails } from "../../api/types/PackageDetails";
import { getFetaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomeLoaderResult {
  featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const featuredPackages = await getFetaturedPackages(); // No need to pass params - this makes an api call to the same pre-defined endpoints
  return {
    featuredPackages,
  };
}
