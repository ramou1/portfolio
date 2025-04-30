"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(false);
  const pathname = usePathname();

  // Reset loading state on route change
  useEffect(() => {
    // Add a small delay to make the loader visible for at least a moment
    // This improves UX by providing consistent feedback even for fast loads
    setTimeout(() => {
      setLoading(false);
    }, 500);
    
    // Cleanup on unmount
    return () => {
      // Optional cleanup if needed
    };
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading && <Loader />}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;