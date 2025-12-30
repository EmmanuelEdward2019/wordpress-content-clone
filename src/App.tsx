import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DynamicPage from "./pages/DynamicPage";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Dynamic WordPress pages */}
          <Route path="/about-us" element={<DynamicPage />} />
          <Route path="/our-services" element={<DynamicPage />} />
          <Route path="/i-teach" element={<DynamicPage />} />
          <Route path="/i-inspire" element={<DynamicPage />} />
          <Route path="/i-write" element={<DynamicPage />} />
          <Route path="/i-speak" element={<DynamicPage />} />
          <Route path="/i-digital" element={<DynamicPage />} />
          <Route path="/i-sing" element={<DynamicPage />} />
          <Route path="/e-books" element={<DynamicPage />} />
          {/* Catch-all for any other WordPress pages */}
          <Route path="/:slug" element={<DynamicPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
