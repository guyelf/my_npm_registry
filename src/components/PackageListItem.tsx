import { Link } from "react-router-dom";
import type { PackageSummary } from "../api/types/packageSummary";

interface PackageListItemProps {
  pack: PackageSummary;
}

export default function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeyword = pack.keywords?.map((keyword) => {
    return (
      <div
        key={keyword}
        className='border py-0.5 px-1 text-xs bg-slate-200 rounded'
      >
        {keyword}
      </div>
    );
  });
  return (
    <div className='border p-4 rounded flex justify-between item-center'>
      <div className='flex flex-col gap-2'>
        <Link className='text-xl font-bold' to={`/packages/${pack.name}`}>
          {pack.name}
        </Link>
        <p className='text-sm text-gray-500'>{pack.description}</p>
        <div className='flex gap-1'>{renderedKeyword}</div>
      </div>
      <div className='mr-6'>
        <Link
          to={`/packages/${pack.name}`}
          className='py-2 px-3 rounded bg-black text-white text-lg'
        >
          View
        </Link>
      </div>
    </div>
  );
}
