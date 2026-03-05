"use client";

import { Snippet } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useMemo, useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Trash2, User } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import StarButton from "@/components/StarButton";

export default function SnippetCard({ snippet }: { snippet: Snippet }) {
  const { user } = useUser();
  const deleteSnippet = useMutation(api.snippets.deleteSnippet);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDeleting(true);
    try {
      await deleteSnippet({ snippetId: snippet._id });
      toast.success("Snippet deleted");
    } catch (error) {
      console.log("Error deleting snippet:", error);
      toast.error("Error deleting snippet");
    } finally {
      setIsDeleting(false);
    }
  };

  // ✅ show only 4 lines
  const { previewCode, hasMore } = useMemo(() => {
    const lines = (snippet.code || "").replace(/\r\n/g, "\n").split("\n");
    const maxLines = 4;
    return {
      previewCode: lines.slice(0, maxLines).join("\n"),
      hasMore: lines.length > maxLines,
    };
  }, [snippet.code]);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      className="w-full h-full"
    >
      <Link href={`/snippets/${snippet._id}`} className="block h-full">
        <div
          className="
            group relative h-full
            rounded-2xl
            bg-white/[0.04] backdrop-blur
            ring-1 ring-white/10
            hover:ring-white/20
            transition-all duration-200
            overflow-hidden
          "
        >
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute -top-24 -left-24 h-56 w-56 bg-blue-500/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-56 w-56 bg-purple-500/15 blur-3xl" />
          </div>

          <div className="relative p-6">
            {/* header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                {/* icon */}
                <div className="relative shrink-0">
                  <div className="relative w-11 h-11 rounded-xl bg-black/30 ring-1 ring-white/10 flex items-center justify-center">
                    <Image
                      src={`/${snippet.language}.png`}
                      alt={`${snippet.language} logo`}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* meta */}
                <div className="min-w-0">
                  <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/12 text-blue-300 capitalize">
                    {snippet.language}
                  </span>

                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="size-3" />
                    {new Date(snippet._creationTime).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* actions */}
              <div className="flex items-center gap-2 shrink-0">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <StarButton snippetId={snippet._id} />
                </div>

                {user?.id === snippet.userId && (
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className={`
                      w-9 h-9 rounded-xl flex items-center justify-center
                      ring-1 ring-white/10
                      transition
                      ${
                        isDeleting
                          ? "bg-red-500/15 text-red-300 cursor-not-allowed"
                          : "bg-white/5 text-gray-300 hover:bg-red-500/10 hover:text-red-300"
                      }
                    `}
                    title="Delete"
                  >
                    {isDeleting ? (
                      <div className="size-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" />
                    ) : (
                      <Trash2 className="size-4" />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* title + author */}
            <div className="mt-5">
              <h2 className="text-xl font-semibold text-white line-clamp-1 group-hover:text-blue-300 transition-colors">
                {snippet.title}
              </h2>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                <div className="w-7 h-7 rounded-lg bg-black/25 ring-1 ring-white/10 flex items-center justify-center">
                  <User className="size-4" />
                </div>
                <span className="truncate max-w-[220px]">
                  {snippet.userName}
                </span>
              </div>
            </div>

            {/* ✅ code preview */}
            <div className="mt-5">
              <div className="rounded-xl bg-black/35 ring-1 ring-white/10 p-4 overflow-hidden">
                <pre className="text-sm text-gray-200 font-mono leading-relaxed whitespace-pre-wrap break-words max-h-[90px] overflow-hidden">
                  {previewCode}
                  {hasMore && "\n..."}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
