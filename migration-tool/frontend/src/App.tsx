import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MigrationsPage from "@/pages/migrations/MigrationsPage";
import NewMigrationPage from "@/pages/migrations/NewMigrationPage";
import EstimatesPage from "@/pages/estimates/EstimatesPage";
import NewEstimatePage from "@/pages/estimates/NewEstimatePage";
import SettingsPage from "@/pages/settings/SettingsPage";
import ConnectionsPage from "@/pages/connections/ConnectionsPage";
import HelpPage from "@/pages/help/HelpPage";
import PolicyPage from "@/pages/policy/PolicyPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <DashboardLayout>
      <Switch>
        {/* Main routes */}
        <Route path="/" component={MigrationsPage} />
        <Route path="/migrations" component={MigrationsPage} />
        <Route path="/migrations/new" component={NewMigrationPage} />
        <Route path="/estimates" component={EstimatesPage} />
        <Route path="/estimates/new" component={NewEstimatePage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/connections" component={ConnectionsPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/policy" component={PolicyPage} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </DashboardLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
