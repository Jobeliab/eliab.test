import React from "react";

export default function Sidebar({activeTab,setActiveTab}) {
  return (
    <div className="md:w-64  bg-white rounded-lg shadow-md p-4">
      <nav>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                activeTab === "overview"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Grid className="w-5 h-5 mr-3" />
              Dashboard Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("applications")}
              className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                activeTab === "applications"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FileText className="w-5 h-5 mr-3" />
              My Applications
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("notifications")}
              className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                activeTab === "notifications"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Bell className="w-5 h-5 mr-3" />
              Notifications
              {notifications.filter((n) => !n.read).length > 0 && (
                <span className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {notifications.filter((n) => !n.read).length}
                </span>
              )}
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center px-4 py-2 rounded-lg text-left ${
                activeTab === "profile"
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <User className="w-5 h-5 mr-3" />
              Company Profile
            </button>
          </li>
        </ul>
      </nav>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 px-4">
          Quick Links
        </h3>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <ExternalLink className="w-4 h-4 mr-3" />
              Browse Open Tenders
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <Download className="w-4 h-4 mr-3" />
              Download Templates
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <AlertCircle className="w-4 h-4 mr-3" />
              Help & Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
