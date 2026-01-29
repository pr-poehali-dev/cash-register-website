
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const trackVisit = async () => {
      const lastVisit = localStorage.getItem('lastVisit');
      const now = Date.now();
      const oneDayInMs = 24 * 60 * 60 * 1000;
      
      if (!lastVisit || (now - parseInt(lastVisit)) > oneDayInMs) {
        try {
          await fetch('https://functions.poehali.dev/c9566f4e-f463-49b7-9a31-e1d6625f6f9c', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
          });
          localStorage.setItem('lastVisit', now.toString());
        } catch (error) {
          console.error('Failed to track visit:', error);
        }
      }
    };
    
    trackVisit();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;