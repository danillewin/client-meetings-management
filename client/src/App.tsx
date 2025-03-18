import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Meetings from "@/pages/meetings";
import Researches from "@/pages/researches";
import Calendar from "@/pages/calendar";
import Dashboard from "@/pages/dashboard";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex gap-4 py-3">
          <Link href="/">
            <Button variant={location === "/" ? "default" : "ghost"} className="transition-colors duration-200">
              Meetings
            </Button>
          </Link>
          <Link href="/researches">
            <Button variant={location === "/researches" ? "default" : "ghost"} className="transition-colors duration-200">
              Researches
            </Button>
          </Link>
          <Link href="/calendar">
            <Button variant={location === "/calendar" ? "default" : "ghost"} className="transition-colors duration-200">
              Calendar
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant={location === "/dashboard" ? "default" : "ghost"} className="transition-colors duration-200">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Meetings} />
      <Route path="/researches" component={Researches} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;