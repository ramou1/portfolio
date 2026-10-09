"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

const LoadingStateContext = createContext(false);
const LoadingDispatchContext = createContext<(loading: boolean) => void>(() => {});

export const useLoading = () => {
  const isLoading = useContext(LoadingStateContext);
  const setLoading = useContext(LoadingDispatchContext);
  return { isLoading, setLoading };
};

export const useSetLoading = () => useContext(LoadingDispatchContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const setLoading = useCallback((loading: boolean) => {
    clearHideTimer();
    setIsLoading(loading);

    if (loading) {
      hideTimer.current = setTimeout(() => {
        setIsLoading(false);
      }, 8000);
    }
  }, []);

  useEffect(() => {
    clearHideTimer();
    setIsLoading(false);
  }, [pathname]);

  useEffect(() => {
    return () => clearHideTimer();
  }, []);

  return (
    <LoadingDispatchContext.Provider value={setLoading}>
      <LoadingStateContext.Provider value={isLoading}>
        {isLoading && <Loader />}
        {children}
      </LoadingStateContext.Provider>
    </LoadingDispatchContext.Provider>
  );
};

export default LoadingProvider;
