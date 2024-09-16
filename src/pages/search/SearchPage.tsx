import type { searchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";
import { useLoaderData } from "react-router-dom";
export default function SearchPage() {
    const {searchResults} = useLoaderData() as searchLoaderResult;
    
    const renderedResults = searchResults.map((result) => {
        return <PackageListItem key={result.name} pack={result}/>;
    });
    return <div>
        <h1 className="text-2xl font-bold my-6">Search Page</h1>
        <div className="space-y-4 mt-4">
            {renderedResults}
        </div>
    </div>;
}