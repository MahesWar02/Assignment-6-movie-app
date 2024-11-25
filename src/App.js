import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Movie from "./components/Movie";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const API_KEY = "db228836";

  // Fungsi untuk mencari film berdasarkan query
  const fetchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      console.log(response);

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError("Film tidak ditemukan.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Terjadi kesalahan dalam pengambilan data.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("man");
  }, []);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    fetchMovies(searchQuery);
  };

  return (
    <div className="container-fluid fw-bold">
      {/* Header untuk Navbar dan Pencarian */}
      <Header
        title="Movie App"
        onSearch={handleSearch}
        query={query}
        setQuery={setQuery}
      />
      <div className="container">
        {/* Error handling */}
        {error && <div className="alert alert-danger mt-3">{error}</div>}

        {/* Loading */}
        {loading && <p className="text-center">Loading...</p>}

        {/* Display movies */}
        <div className="row mt-4 ml-4 mr-4">
          {!loading && !error && movies.length > 0 ? (
            movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
          ) : (
            <p className="text-center">No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
