"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const GAME_TYPES = [
  { id: "WHEEL_OF_FORTUNE", label: "Wheel of Fortune" },
  { id: "FOOTBALL_TRIVIA", label: "Football Trivia" },
  { id: "RELIGIOUS_READ_WIN", label: "Religious Read & Win" },
  { id: "DAILY_LOTTO", label: "Daily Lotto" },
];

interface Winner {
  name: string;
  amount: number;
  date: string;
  wonAt: string;
}

interface FetchWinnersParams {
  gameType: string;
  date?: string;
  page: number;
  limit: number;
}

const fetchWinners = async ({ gameType, date, page, limit }: FetchWinnersParams) => {
  const params: Record<string, string | number> = { gameType, page, limit };
  if (date) params.date = date;

  const { data } = await axios.get("https://api.primelotto.games/api/v1/games/winners", {
    params,
  });
  return data.data; // { winners, total, page, limit, totalPages }
};

interface Column<T> {
  header: string;
  accessorKey: keyof T | ((row: T) => React.ReactNode);
}

export function ReusableTable<T>({ 
  columns, 
  data, 
  isLoading 
}: { 
  columns: Column<T>[]; 
  data: T[]; 
  isLoading: boolean;
}) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
      <table className="w-full text-left text-sm text-white/80">
        <thead className="border-b border-white/10 bg-white/5 uppercase text-white/50 text-xs tracking-wider">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-6 py-4 font-semibold whitespace-nowrap">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-16 text-center text-white/50">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-8 h-8 border-2 border-[var(--brand-primary)] border-t-transparent rounded-full animate-spin"></div>
                  <p>Loading winners...</p>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-16 text-center text-white/50">
                <p className="text-lg mb-2">No winners found for this selection.</p>
                <p className="text-sm">Try choosing a different game or date.</p>
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={i} 
                className="hover:bg-white/5 transition-colors group"
              >
                {columns.map((col, j) => (
                  <td key={j} className="px-6 py-4 whitespace-nowrap">
                    {typeof col.accessorKey === "function"
                      ? col.accessorKey(row)
                      : (row[col.accessorKey as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export function WinnersSection() {
  const [activeTab, setActiveTab] = useState(GAME_TYPES[0].id);
  const [selectedDate, setSelectedDate] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["winners", activeTab, selectedDate, page],
    queryFn: () => fetchWinners({ gameType: activeTab, date: selectedDate, page, limit }),
  });

  const columns: Column<Winner>[] = [
    { 
      header: "Player Name", 
      accessorKey: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-xs font-bold text-white shadow-inner">
            {row.name.charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-white group-hover:text-[var(--brand-primary)] transition-colors">
            {row.name}
          </span>
        </div>
      ) 
    },
    { 
      header: "Amount Won", 
      accessorKey: (row) => (
        <span className="text-[var(--brand-primary)] font-bold text-base shadow-sm">
          ₦{row.amount.toLocaleString()}
        </span>
      ) 
    },
    { 
      header: "Date Won", 
      accessorKey: (row) => (
        <span className="text-white/70">
          {new Date(row.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </span>
      ) 
    },
    { 
      header: "Time Won", 
      accessorKey: (row) => (
        <span className="text-white/50 bg-white/5 px-2.5 py-1 rounded-md text-xs font-medium font-mono">
          {new Date(row.wonAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      ) 
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#050505] to-zinc-950 relative border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent opacity-20" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[var(--brand-primary)] rounded-full blur-[128px] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl text-white mb-6"
          >
            Daily <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-emerald-300">Winners</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            See who's winning big today across our various games. Will your name be on this list next?
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10"
          >
            {/* Tabs */}
            <div className="flex overflow-x-auto w-full lg:w-auto p-1.5 bg-black/50 rounded-xl border border-white/5 hide-scrollbar">
              {GAME_TYPES.map((game) => (
                <button
                  key={game.id}
                  onClick={() => {
                    setActiveTab(game.id);
                    setPage(1);
                  }}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === game.id
                      ? "bg-gradient-to-r from-[var(--brand-primary)] to-emerald-400 text-black shadow-[0_0_20px_rgba(43,201,106,0.3)]"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {game.label}
                </button>
              ))}
            </div>

            {/* Date Filter */}
            <div className="w-full lg:w-auto flex items-center gap-3">
              <label htmlFor="date" className="text-sm font-medium text-white/60 whitespace-nowrap">Filter Date:</label>
              <div className="relative group flex-1 lg:flex-none">
                <input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setPage(1);
                  }}
                  className="w-full bg-black/50 border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-sm text-white outline-none focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] transition-all"
                  style={{ colorScheme: "dark" }}
                />
                {selectedDate && (
                  <button
                    onClick={() => {
                      setSelectedDate("");
                      setPage(1);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/90 bg-black/50 rounded-full p-1 transition-colors"
                    title="Clear date"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Table Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {isError ? (
              <div className="p-12 text-center bg-red-500/10 border border-red-500/20 rounded-2xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20 text-red-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Failed to load winners</h3>
                <p className="text-red-300/80">Please check your connection and try again later.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <ReusableTable columns={columns} data={data?.winners || []} isLoading={isLoading} />
                
                {/* Pagination */}
                {!isLoading && data?.totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4 backdrop-blur-sm">
                    <div className="text-sm font-medium text-white/50">
                      Showing page <span className="text-white">{data.page}</span> of <span className="text-white">{data.totalPages}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white/5 hover:bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                        disabled={page === data.totalPages}
                        className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--brand-primary)] text-black hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-[0_0_15px_rgba(43,201,106,0.2)]"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
