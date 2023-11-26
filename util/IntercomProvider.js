"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  load as loadIntercom,
  boot as bootIntercom,
  update as updateIntercom,
} from "./intercom";

export const IntercomProvider = ({ children }) => {
    const router = useRouter();
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        loadIntercom();
        bootIntercom();
      }
  
      const handleRouteChange = (url) => {
        if (typeof window !== "undefined") {
          updateIntercom();
        }
      };
    
      // Check if router.events is defined before subscribing
      if (router && router.events) {
        router.events.on("routeChangeStart", handleRouteChange);
    
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
          router.events.off("routeChangeStart", handleRouteChange);
        };
      }
    }, [router]);
  
    return children;
  };