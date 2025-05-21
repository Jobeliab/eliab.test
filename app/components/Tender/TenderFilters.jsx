import React from "react";
import { Search, Filter } from "lucide-react";

const TenderFilters = ({ filter, setFilter, searchQuery, setSearchQuery }) => (
  <div className="flex flex-col md:flex-row gap-4 mb-6">
    <div className="flex-1 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search tenders by ID, title or department..."
        className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

    <div className="md:w-64 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Filter className="h-5 w-5 text-gray-400" />
      </div>
      <select
        className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Tenders</option>
        <option value="open">Open Tenders</option>
        <option value="closed">Closed Tenders</option>
        <option value="pending">Pending Review</option>
      </select>
    </div>
  </div>
);

export default TenderFilters;
