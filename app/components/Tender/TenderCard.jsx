import React from "react";
import { Check, X, Clock } from "lucide-react";

const getStatusBadgeClass = (status) => {
  switch (status) {
    case "open":
      return "bg-green-100 text-green-800";
    case "closed":
      return "bg-red-100 text-red-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "open":
      return <Check className="w-4 h-4" />;
    case "closed":
      return <X className="w-4 h-4" />;
    case "pending":
      return <Clock className="w-4 h-4" />;
    default:
      return null;
  }
};

const TenderCard = ({ tender }) => (
  <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-500 text-sm font-medium">
            {tender.id}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusBadgeClass(tender.status)}`}
          >
            {getStatusIcon(tender.status)}
            {tender.status.charAt(0).toUpperCase() + tender.status.slice(1)}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{tender.title}</h3>
        <div className="text-gray-600 mb-3">
          <p className="mb-1">
            <span className="font-medium">Department:</span> {tender.department}
          </p>
          <p className="mb-1">
            <span className="font-medium">Category:</span> {tender.category}
          </p>
          <p className="mb-1">
            <span className="font-medium">Budget:</span> {tender.budget}
          </p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500 mb-2">
          <p>Deadline</p>
          <p className="font-semibold text-base">
            {new Date(tender.deadline).toLocaleDateString("en-GB")}
          </p>
        </div>
        <button
          className={`px-4 py-2 rounded-lg text-white font-medium ${
            tender.status === "open"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={tender.status !== "open"}
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

export default TenderCard;
