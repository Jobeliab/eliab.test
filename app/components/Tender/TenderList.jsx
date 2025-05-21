import React from "react";
import { FileText } from "lucide-react";
import TenderCard from "./TenderCard";

const TenderList = ({ tenders, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600 mb-4"></div>
        <p className="text-gray-600">Loading tenders...</p>
      </div>
    );
  }

  if (tenders.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <FileText className="mx-auto h-12 w-12 text-gray-400 mb-2" />
        <h3 className="text-lg font-medium text-gray-900">No tenders found</h3>
        <p className="mt-1 text-gray-500">Try adjusting your search...</p>
      </div>
    );
  }

  return <div className="space-y-4">{tenders.map((t) => <TenderCard key={t.id} tender={t} />)}</div>;
};

export default TenderList;
