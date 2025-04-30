"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();

  // Reset loading state on route change
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      // Add a small delay to make the loader visible for at least a moment
      // This improves UX by providing consistent feedback even for fast loads
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    // Only run this effect when the component mounts or when the route changes
    handleRouteChangeComplete();
  }, [pathname, searchParams]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {isLoading && <Loader />}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;