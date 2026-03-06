"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import SnippetsPageSkeleton from "./_components/SnippetsPageSkeleton";
import NavigationHeader from "@/components/NavigationHeader";

import { motion } from "framer-motion";
import { BookOpen, Code, Grid, Layers, Search, Tag, X } from "lucide-react";
import SnippetCard from "./_components/SnippetCard";

function SnippetsPage() {
  const snippets = useQuery(api.snippets.getSnippets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  // loading state
  if (snippets === undefined) {
    return (
      <div className="min-h-screen">
        <NavigationHeader />
        <SnippetsPageSkeleton />
      </div>
    );
  }

  const languages = [...new Set(snippets.map((s) => s.language))];
  const popularLanguages = languages.slice(0, 5);

  const filteredSnippets = snippets.filter((snippet) => {
    const q = searchQuery.toLowerCase();

    const matchesSearch =
      snippet.title.toLowerCase().includes(q) ||
      snippet.language.toLowerCase().includes(q) ||
      snippet.userName.toLowerCase().includes(q);

    const matchesLanguage =
      !selectedLanguage || snippet.language === selectedLanguage;

    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <NavigationHeader />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r
             from-blue-500/10 to-purple-500/10 text-sm text-gray-400 mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Community Code Library
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-6"
          >
            Discover & Share Code Snippets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 mb-8"
          >
            Explore a curated collection of code snippets from the community
          </motion.p>
        </div>

        {/* Filters Section */}
        <div className="relative max-w-5xl mx-auto mb-12 space-y-6">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-40 pointer-events-none" />
            <div className="relative flex items-center rounded-2xl bg-white/5 ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-blue-500/40 transition">
              <Search className="ml-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search snippets..."
                className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-500 focus:outline-none"
              />

              {(searchQuery || selectedLanguage) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedLanguage(null);
                  }}
                  className="mr-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-gray-300 hover:bg-white/10 transition"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Languages:</span>
            </div>

            {popularLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() =>
                  setSelectedLanguage(lang === selectedLanguage ? null : lang)
                }
                className={`
                    group relative px-3 py-1.5 rounded-lg transition-all duration-200
                    ${
                      selectedLanguage === lang
                        ? "text-blue-400 bg-blue-500/10 ring-2 ring-blue-500/50"
                        : "text-gray-400 hover:text-gray-300 bg-[#1e1e2e] hover:bg-[#262637] ring-1 ring-gray-800"
                    }
                  `}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`/${lang}.png`}
                    alt={lang}
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-sm">{lang}</span>
                </div>
              </button>
            ))}

            {selectedLanguage && (
              <button
                onClick={() => setSelectedLanguage(null)}
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-300 transition-colors"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}

            <div className="ml-auto flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {filteredSnippets.length} snippets found
              </span>

              {/* View Toggle */}
              <div className="flex items-center gap-1 p-1 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-md transition-all ${
                    view === "grid"
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-400 hover:text-gray-300 hover:bg-[#262637]"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-md transition-all ${
                    view === "list"
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-400 hover:text-gray-300 hover:bg-[#262637]"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Snippets Layout (3 cards in one row on lg) */}
        <div
          className={
            view === "grid"
              ? "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-6 max-w-3xl mx-auto"
          }
        >
          {filteredSnippets.map((snippet) => (
            <SnippetCard key={snippet._id} snippet={snippet} />
          ))}
        </div>

        {/* empty state */}
        {filteredSnippets.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-md mx-auto mt-20 p-8 rounded-2xl overflow-hidden"
          >
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br
                from-blue-500/10 to-purple-500/10 ring-1 ring-white/10 mb-6"
              >
                <Code className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                No snippets found
              </h3>
              <p className="text-gray-400 mb-6">
                {searchQuery || selectedLanguage
                  ? "Try adjusting your search query or filters"
                  : "Be the first to share a code snippet with the community"}
              </p>

              {(searchQuery || selectedLanguage) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedLanguage(null);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#262637] text-gray-300 hover:text-white rounded-lg 
                    transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
export default SnippetsPage;
