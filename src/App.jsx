import { Toaster } from 'sonner';
import * as Tooltip from '@radix-ui/react-tooltip';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import React from 'react';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
   <Tooltip.Provider>
      <Toaster />
      {/* Removed the Sonner component as it's not meant to be rendered directly */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

        </Routes>
      </BrowserRouter>
    </Tooltip.Provider>
  </QueryClientProvider>
);

export default App;