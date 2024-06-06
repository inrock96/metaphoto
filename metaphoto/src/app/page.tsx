"use client"; // This is a client component 👈🏽

import PhotoList from "@/components/PhotoList";
import { fetchPhotos } from "@/services/photo.service";
import { EnrichedPhoto } from "@/utils/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [photos, setPhotos] = useState<EnrichedPhoto[]>([]);
  const [filters, setFilters] = useState({ title: '', albumTitle: '', userEmail: '' });
  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const loadPhotos = async () => {
    try {
      const data = await fetchPhotos(filters, limit, offset);
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, [filters, limit, offset]);
  const handleNextPage = () => {
    if ((offset + limit) < total) {
      setOffset(offset + limit);
    }
  };
  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">MetaPhoto</h1>
      <div className="mb-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4" >
        <input
          type="text"
          placeholder="Title"
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          className="p-2 border border-gray-300 rounded"

        />
        <input
          type="text"
          placeholder="Album Title"
          value={filters.albumTitle}
          onChange={(e) => setFilters({ ...filters, albumTitle: e.target.value })}
          className="p-2 border border-gray-300 rounded"

        />
        <input
          type="text"
          placeholder="User Email"
          value={filters.userEmail}
          onChange={(e) => setFilters({ ...filters, userEmail: e.target.value })}
          className="p-2 border border-gray-300 rounded"

        />
        <button onClick={loadPhotos} className="p-2 bg-blue-500 text-white rounded">Search</button>
      </div >
      <div className="mb-4 flex justify-center space-x-4">
        <label>
          Limit:
          <select value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="ml-2 p-2 border border-gray-300 rounded">
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </label>
        <label>
          Offset:
          <input type="number" value={offset} onChange={(e) => setOffset(Number(e.target.value))} className="ml-2 p-2 border border-gray-300 rounded" />
        </label>
      </div>
      <PhotoList photos={photos} />
      <div className="mt-4 flex justify-center space-x-4">
        <button onClick={handlePreviousPage} disabled={offset === 0} className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
          Previous
        </button>
        <button onClick={handleNextPage} disabled={(offset + limit) >= total} className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
}
