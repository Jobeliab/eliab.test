"use client"

import React, { useState, useEffect } from "react";
import {
  FileText,
  ChevronRight,
  User,
  Building,
  Bell,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  FileCheck,
  Search,
  Grid,
  List,
  Eye,
  Upload,
  ExternalLink,
  Calendar,
  Download,
  Star,
} from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [applications, setApplications] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  // Mock data loading
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProfile({
        name: "Kamau Construction Ltd",
        contactPerson: "John Kamau",
        email: "john@kamauco.co.ke",
        phone: "+254 723 456789",
        registrationNumber: "BUS/2018/12345",
        registrationDate: "2018-05-10",
        address: "Bungoma Town, Kenya",
        taxId: "A123456789B",
        categories: ["Construction", "Infrastructure", "Electrical"],
        verificationStatus: "verified",
      });

      setApplications([
        {
          id: "APP-2025-001",
          tenderId: "BNG-2025-001",
          tenderTitle: "Construction of Bungoma County Hospital Wing B",
          department: "Health Services",
          appliedDate: "2025-04-15",
          status: "under_review",
          deadline: "2025-05-15",
          applicationFee: "5,000 KES",
          paymentStatus: "paid",
          stages: [
            {
              name: "Application Submitted",
              completed: true,
              date: "2025-04-15",
            },
            { name: "Payment Confirmed", completed: true, date: "2025-04-15" },
            { name: "Documents Verified", completed: true, date: "2025-04-17" },
            { name: "Technical Evaluation", completed: false },
            { name: "Financial Evaluation", completed: false },
            { name: "Tender Award", completed: false },
          ],
        },
        {
          id: "APP-2025-002",
          tenderId: "BNG-2025-003",
          tenderTitle: "Road Maintenance - Kanduyi-Musikoma Road",
          department: "Transport & Infrastructure",
          appliedDate: "2025-04-18",
          status: "pending_documents",
          deadline: "2025-05-30",
          applicationFee: "3,000 KES",
          paymentStatus: "paid",
          stages: [
            {
              name: "Application Submitted",
              completed: true,
              date: "2025-04-18",
            },
            { name: "Payment Confirmed", completed: true, date: "2025-04-18" },
            { name: "Documents Verified", completed: false },
            { name: "Technical Evaluation", completed: false },
            { name: "Financial Evaluation", completed: false },
            { name: "Tender Award", completed: false },
          ],
        },
        {
          id: "APP-2025-003",
          tenderId: "BNG-2024-045",
          tenderTitle: "Renovation of County Assembly Offices",
          department: "Public Works",
          appliedDate: "2024-12-10",
          status: "rejected",
          deadline: "2024-12-30",
          applicationFee: "4,000 KES",
          paymentStatus: "paid",
          rejectionReason: "Did not meet minimum technical requirements",
          stages: [
            {
              name: "Application Submitted",
              completed: true,
              date: "2024-12-10",
            },
            { name: "Payment Confirmed", completed: true, date: "2024-12-10" },
            { name: "Documents Verified", completed: true, date: "2024-12-15" },
            {
              name: "Technical Evaluation",
              completed: true,
              date: "2024-12-22",
            },
            { name: "Financial Evaluation", completed: false },
            { name: "Tender Award", completed: false },
          ],
        },
        {
          id: "APP-2024-015",
          tenderId: "BNG-2024-030",
          tenderTitle: "County Headquarters Electrical Upgrade",
          department: "Public Works",
          appliedDate: "2024-08-05",
          status: "awarded",
          deadline: "2024-08-25",
          applicationFee: "3,500 KES",
          paymentStatus: "paid",
          contractValue: "3,200,000 KES",
          stages: [
            {
              name: "Application Submitted",
              completed: true,
              date: "2024-08-05",
            },
            { name: "Payment Confirmed", completed: true, date: "2024-08-05" },
            { name: "Documents Verified", completed: true, date: "2024-08-10" },
            {
              name: "Technical Evaluation",
              completed: true,
              date: "2024-08-28",
            },
            {
              name: "Financial Evaluation",
              completed: true,
              date: "2024-09-05",
            },
            { name: "Tender Award", completed: true, date: "2024-09-10" },
          ],
        },
      ]);

      setNotifications([
        {
          id: 1,
          type: "info",
          message: "Your application for tender BNG-2025-001 is under review",
          date: "2025-04-17",
          read: false,
        },
        {
          id: 2,
          type: "success",
          message: "Payment confirmed for tender application BNG-2025-003",
          date: "2025-04-18",
          read: true,
        },
        {
          id: 3,
          type: "warning",
          message:
            "Deadline approaching for document submission - BNG-2025-003",
          date: "2025-04-20",
          read: false,
        },
        {
          id: 4,
          type: "danger",
          message:
            "Your application for tender BNG-2024-045 was not successful",
          date: "2024-12-23",
          read: true,
        },
        {
          id: 5,
          type: "success",
          message: "Congratulations! You have been awarded tender BNG-2024-030",
          date: "2024-09-10",
          read: true,
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  // Get status display properties
  const getStatusDisplay = (status) => {
    switch (status) {
      case "under_review":
        return {
          label: "Under Review",
          color: "text-blue-700",
          bg: "bg-blue-100",
          icon: <Clock className="w-4 h-4" />,
        };
      case "pending_documents":
        return {
          label: "Pending Documents",
          color: "text-yellow-700",
          bg: "bg-yellow-100",
          icon: <AlertCircle className="w-4 h-4" />,
        };
      case "rejected":
        return {
          label: "Rejected",
          color: "text-red-700",
          bg: "bg-red-100",
          icon: <XCircle className="w-4 h-4" />,
        };
      case "awarded":
        return {
          label: "Awarded",
          color: "text-green-700",
          bg: "bg-green-100",
          icon: <CheckCircle className="w-4 h-4" />,
        };
      default:
        return {
          label: "Unknown",
          color: "text-gray-700",
          bg: "bg-gray-100",
          icon: <AlertCircle className="w-4 h-4" />,
        };
    }
  };

  // Get notification icon
  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "danger":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "info":
      default:
        return <Bell className="w-5 h-5 text-blue-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className=" mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              Vendor Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {notifications.filter((n) => !n.read).length}
                  </span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 rounded-full p-2 text-white">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">{profile.name}</p>
                  <p className="text-xs text-gray-500">Vendor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className=" mx-auto px-4 py-6">
        {/* Dashboard navigation */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="sticky left-0 md:w-64  bg-white rounded-lg shadow-md p-4">
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

          {/* Main Panel */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">
                          Total Applications
                        </p>
                        <h2 className="text-2xl font-bold">
                          {applications.length}
                        </h2>
                      </div>
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                        <FileText className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">Under Review</p>
                        <h2 className="text-2xl font-bold">
                          {
                            applications.filter(
                              (a) => a.status === "under_review"
                            ).length
                          }
                        </h2>
                      </div>
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">Awarded</p>
                        <h2 className="text-2xl font-bold">
                          {
                            applications.filter((a) => a.status === "awarded")
                              .length
                          }
                        </h2>
                      </div>
                      <div className="p-2 rounded-lg bg-green-100 text-green-700">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-500">Pending Action</p>
                        <h2 className="text-2xl font-bold">
                          {
                            applications.filter(
                              (a) => a.status === "pending_documents"
                            ).length
                          }
                        </h2>
                      </div>
                      <div className="p-2 rounded-lg bg-yellow-100 text-yellow-700">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Applications */}
                <div className="bg-white rounded-lg shadow-md">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">
                      Recent Applications
                    </h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Tender ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Applied Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {applications.slice(0, 3).map((app) => {
                          const status = getStatusDisplay(app.status);
                          return (
                            <tr key={app.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {app.tenderId}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900">
                                {app.tenderTitle}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(app.appliedDate).toLocaleDateString(
                                  "en-GB"
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
                                >
                                  {status.icon}
                                  <span className="ml-1">{status.label}</span>
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button className="text-blue-600 hover:text-blue-800 font-medium">
                                  View Details
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <button
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      onClick={() => setActiveTab("applications")}
                    >
                      View all applications
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Latest Notifications & Recommended Tenders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-lg font-semibold">
                        Latest Notifications
                      </h2>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        {notifications.slice(0, 3).map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 rounded-lg ${
                              notification.read ? "bg-white" : "bg-blue-50"
                            } border border-gray-200`}
                          >
                            <div className="flex items-start">
                              <div className="mr-3 flex-shrink-0">
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1">
                                <p
                                  className={`text-sm ${
                                    notification.read
                                      ? "text-gray-700"
                                      : "text-gray-900 font-medium"
                                  }`}
                                >
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(
                                    notification.date
                                  ).toLocaleDateString("en-GB")}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center mt-4"
                        onClick={() => setActiveTab("notifications")}
                      >
                        View all notifications
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-lg font-semibold">
                        Recommended Tenders
                      </h2>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-500">
                              BNG-2025-006
                            </span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              New
                            </span>
                          </div>
                          <h3 className="font-medium">
                            Supply and Installation of Solar Panels for County
                            Buildings
                          </h3>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>Deadline: May 30, 2025</span>
                          </div>
                          <div className="mt-3">
                            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </button>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-500">
                              BNG-2025-008
                            </span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              New
                            </span>
                          </div>
                          <h3 className="font-medium">
                            Construction of Steel Bridges in Rural Areas
                          </h3>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>Deadline: June 15, 2025</span>
                          </div>
                          <div className="mt-3">
                            <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                              <Eye className="w-4 h-4 mr-1" />
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center mt-4"
                      >
                        Browse all open tenders
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {viewMode === "grid" ? (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app) => {
                  const status = getStatusDisplay(app.status);
                  return (
                    <div
                      key={app.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div className="bg-gray-50 p-3 border-b border-gray-200 flex justify-between items-center">
                        <span className="font-medium text-gray-700">
                          {app.id}
                        </span>
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
                        >
                          {status.icon}
                          <span className="ml-1">{status.label}</span>
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">{app.tenderTitle}</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-start">
                            <Building className="w-4 h-4 mr-2 mt-0.5 text-gray-500" />
                            <span>{app.department}</span>
                          </div>
                          <div className="flex items-start">
                            <Calendar className="w-4 h-4 mr-2 mt-0.5 text-gray-500" />
                            <span>
                              Applied:{" "}
                              {new Date(app.appliedDate).toLocaleDateString(
                                "en-GB"
                              )}
                            </span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="w-4 h-4 mr-2 mt-0.5 text-gray-500" />
                            <span>
                              Deadline:{" "}
                              {new Date(app.deadline).toLocaleDateString(
                                "en-GB"
                              )}
                            </span>
                          </div>
                        </div>

                        {app.status === "pending_documents" && (
                          <div className="mt-4 p-2 bg-yellow-50 text-yellow-700 rounded border border-yellow-200 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            <span className="text-sm">
                              Documents pending upload
                            </span>
                          </div>
                        )}

                        {app.status === "rejected" && app.rejectionReason && (
                          <div className="mt-4 p-2 bg-red-50 text-red-700 rounded border border-red-200">
                            <div className="flex items-center mb-1">
                              <XCircle className="w-4 h-4 mr-2" />
                              <span className="text-sm font-medium">
                                Application Rejected
                              </span>
                            </div>
                            <p className="text-sm">{app.rejectionReason}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
