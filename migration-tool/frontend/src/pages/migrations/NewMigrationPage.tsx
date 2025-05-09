import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { queryClient } from "@/lib/queryClient";
import { migrationService, platformService } from "@/services/apiService";
import { Separator } from "@/components/ui/separator";
import CrmLogo from "@/assets/CrmLogo";
import { toast } from "@/hooks/use-toast";

const NewMigrationPage = () => {
  const [_, navigate] = useLocation();
  const [sourcePlatform, setSourcePlatform] = useState<string>("HubSpot");
  const [destinationPlatform, setDestinationPlatform] = useState<string>("");
  const [sourceConnected, setSourceConnected] = useState(false);

  // Fetch available platforms
  const { data: platforms, isLoading: isLoadingPlatforms } = useQuery({
    queryKey: ["/api/platforms"],
    staleTime: 300000, // 5 minutes
  });

  // Start migration mutation
  const startMigration = useMutation({
    mutationFn: migrationService.startMigration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/migrations"] });
      toast({
        title: "Migration started",
        description: "Your migration has been successfully initiated.",
      });
      navigate("/migrations");
    },
    onError: (error) => {
      toast({
        title: "Failed to start migration",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    },
  });

  // Connect to source platform
  const handleConnectSource = () => {
    // In a real application, this would open an OAuth flow or credential form
    setSourceConnected(true);
    toast({
      title: "Connected to source",
      description: `Successfully connected to ${sourcePlatform}`,
    });
  };

  // Connect to destination platform
  const handleConnectDestination = () => {
    toast({
      title: "Connected to destination",
      description: `Successfully connected to ${destinationPlatform}`,
    });
  };

  // Handle quick sample migration
  const handleQuickSampleMigration = () => {
    if (!sourcePlatform || !destinationPlatform) {
      toast({
        title: "Missing platforms",
        description: "Please select and connect to both platforms first.",
        variant: "destructive",
      });
      return;
    }

    startMigration.mutate({
      source: sourcePlatform,
      destination: destinationPlatform,
      type: "quick",
    });
  };

  // Handle custom migration
  const handleCustomMigration = () => {
    if (!sourcePlatform || !destinationPlatform) {
      toast({
        title: "Missing platforms",
        description: "Please select and connect to both platforms first.",
        variant: "destructive",
      });
      return;
    }

    startMigration.mutate({
      source: sourcePlatform,
      destination: destinationPlatform,
      type: "custom",
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Source Platform */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-white text-center border-b border-[#e5e7eb] px-4 py-3">
            <h3 className="text-sm font-medium">Your current platform</h3>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center py-4">
                <CrmLogo name={sourcePlatform} className="h-8" />
              </div>
              <div className="relative">
                <Select
                  value={sourcePlatform}
                  onValueChange={setSourcePlatform}
                  disabled={sourceConnected}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {isLoadingPlatforms ? (
                      <SelectItem value="loading">Loading...</SelectItem>
                    ) : (
                      platforms?.map((platform: any) => (
                        <SelectItem key={platform.id} value={platform.name}>
                          {platform.name}
                        </SelectItem>
                      )) || [
                        <SelectItem key="hubspot" value="HubSpot">
                          HubSpot
                        </SelectItem>,
                        <SelectItem key="salesforce" value="Salesforce">
                          Salesforce
                        </SelectItem>,
                        <SelectItem key="zoho" value="Zoho CRM">
                          Zoho CRM
                        </SelectItem>,
                        <SelectItem key="pipedrive" value="Pipedrive">
                          Pipedrive
                        </SelectItem>,
                      ]
                    )}
                  </SelectContent>
                </Select>
              </div>
              <Button
                className="w-full bg-[#e86c34] hover:bg-[#d85c24] text-white"
                disabled={sourceConnected}
                onClick={handleConnectSource}
              >
                {sourceConnected ? "CONNECTED" : "CONNECT"}
              </Button>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-center">
              <a
                href="#"
                className="flex items-center justify-center text-xs text-[#4b5563]"
              >
                <i className="fas fa-shield-alt mr-1"></i>
                <span>SECURITY INFO</span>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Target Platform */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-white text-center border-b border-[#e5e7eb] px-4 py-3">
            <h3 className="text-sm font-medium">Your new platform</h3>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center py-4">
                {destinationPlatform ? (
                  <CrmLogo name={destinationPlatform} className="h-8" />
                ) : (
                  <div className="flex items-center justify-center h-8">
                    <span className="text-[#4b5563]">Select your platform</span>
                  </div>
                )}
              </div>
              <div className="relative">
                <Select
                  value={destinationPlatform}
                  onValueChange={setDestinationPlatform}
                  disabled={!sourceConnected}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {isLoadingPlatforms ? (
                      <SelectItem value="loading">Loading...</SelectItem>
                    ) : (
                      platforms?.map((platform: any) => (
                        <SelectItem key={platform.id} value={platform.name}>
                          {platform.name}
                        </SelectItem>
                      )) || [
                        <SelectItem key="salesforce" value="Salesforce">
                          Salesforce
                        </SelectItem>,
                        <SelectItem key="zoho" value="Zoho CRM">
                          Zoho CRM
                        </SelectItem>,
                        <SelectItem key="pipedrive" value="Pipedrive">
                          Pipedrive
                        </SelectItem>,
                        <SelectItem key="dynamics" value="Microsoft Dynamics">
                          Microsoft Dynamics
                        </SelectItem>,
                      ]
                    )}
                  </SelectContent>
                </Select>
              </div>
              <Button
                className="w-full"
                variant="secondary"
                disabled={!sourceConnected || !destinationPlatform}
                onClick={handleConnectDestination}
              >
                CONNECT
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Migration Options */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-white text-center border-b border-[#e5e7eb] px-4 py-3">
            <h3 className="text-sm font-medium">Launch</h3>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Quick Sample Migration */}
              <div className="bg-[#f5f7f9] p-4 rounded-md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <i className="fas fa-search text-[#e86c34] text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1a2a38]">
                      Quick Sample Migration
                    </h4>
                    <p className="text-sm text-[#4b5563] mt-1">
                      See how your data looks in the new system using our automatic
                      mappings. Up to 10% of your dataset will be migrated.
                    </p>
                    <Button
                      size="sm"
                      className="mt-3 bg-[#e86c34] hover:bg-[#d85c24] text-white"
                      disabled={!sourceConnected || !destinationPlatform || startMigration.isPending}
                      onClick={handleQuickSampleMigration}
                    >
                      {startMigration.isPending ? "Starting..." : "Start Sample Migration"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-[#4b5563]">or</div>

              {/* Customize Migration */}
              <div className="bg-[#f5f7f9] p-4 rounded-md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <i className="fas fa-sliders-h text-[#e86c34] text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1a2a38]">
                      Customize Your Migration
                    </h4>
                    <p className="text-sm text-[#4b5563] mt-1">
                      Begin with our automatic mappings and make adjustments to fit
                      your needs.
                    </p>
                    <Button
                      size="sm"
                      className="mt-3 bg-white border border-[#e86c34] text-[#e86c34] hover:bg-[#fef0ea]"
                      disabled={!sourceConnected || !destinationPlatform || startMigration.isPending}
                      onClick={handleCustomMigration}
                    >
                      Next: Select objects
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewMigrationPage;
