import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import "./App.css";

import SearchBar from "./components/searchbar";
import YouTubeProvider from "./context/YouTubeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

/**
 * Application settings provider / context
 */
function App() {
  return (
    <>
      <SearchBar />
      <YouTubeProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YouTubeProvider>
    </>
  );
}

export default App;
