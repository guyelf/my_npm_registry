import type { PackageDetails } from "../types/PackageDetails";

// Kinda like constant array to always fetch these 4 on the homepage
const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function getFetaturedPackages() {
  const promises = FEATURED_PACKAGES.map(async (package_name) => {
    const res = await fetch(`https:\\registry.npmjs.org/${package_name}`);
    const data = res.json();
    return data;
  });
  const data = await Promise.all(promises);
  return data as PackageDetails[];
}
