"use client";

import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TenderFilters from "./components/Tender/TenderFilters";
import TenderList from "./components/Tender/TenderList";

const HomePage = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTenders([
        {
          id: "BNG-2025-001",
          title: "Construction of Bungoma County Hospital Wing B",
          department: "Health Services",
          deadline: "2025-05-15",
          status: "open",
          budget: "15,000,000 KES",
          category: "Construction",
        },
        {
          id: "BNG-2025-002",
          title: "Supply of IT Equipment for County Offices",
          department: "ICT",
          deadline: "2025-05-10",
          status: "pending",
          budget: "3,500,000 KES",
          category: "IT & Equipment",
        },
        {
          id: "BNG-2025-003",
          title: "Road Maintenance - Kanduyi-Musikoma Road",
          department: "Transport & Infrastructure",
          deadline: "2025-05-30",
          status: "open",
          budget: "7,200,000 KES",
          category: "Infrastructure",
        },
        {
          id: "BNG-2025-004",
          title: "County Records Digitization Services",
          department: "Administration",
          deadline: "2025-04-20",
          status: "closed",
          budget: "1,800,000 KES",
          category: "Services",
        },
        {
          id: "BNG-2025-005",
          title: "Supply of Medical Equipment",
          department: "Health Services",
          deadline: "2025-05-25",
          status: "open",
          budget: "9,300,000 KES",
          category: "Medical",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredTenders = tenders.filter((tender) => {
    const matchesFilter = filter === "all" || tender.status === filter;
    const matchesSearch =
      tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <main className="mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Find Tenders</h2>
          <TenderFilters
            filter={filter}
            setFilter={setFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <TenderList tenders={filteredTenders} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
