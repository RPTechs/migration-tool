import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { estimateService, platformService } from "@/services/apiService";
import { queryClient } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import CrmLogo from "@/assets/CrmLogo";

const NewEstimatePage = () => {
  const [_, navigate] = useLocation();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  // Fetch available platforms
  const { data: platforms, isLoading: isLoadingPlatforms } = useQuery({
    queryKey: ["/api/platforms"],
    staleTime: 300000, // 5 minutes
  });

  // Create estimate mutation
  const createEstimate = useMutation({
    mutationFn: estimateService.createEstimate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/estimates"] });
      toast({
        title: "Estimate created",
        description: "Your migration estimate has been successfully created.",
      });
      navigate("/estimates");
    },
    onError: (error) => {
      toast({
        title: "Failed to create estimate",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    },
  });

  // Handle connect platform for estimate
  const handleConnectPlatform = () => {
    if (!selectedPlatform) {
      toast({
        title: "Platform required",
        description: "Please select a platform first.",
        variant: "destructive",
      });
      return;
    }

    createEstimate.mutate({ platform: selectedPlatform });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Selection */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="text-center mb-4">
                <h3 className="font-medium text-[#1a2a38] text-lg">
                  Select Your Platform
                </h3>
              </div>
              <div className="relative">
                <Select
                  value={selectedPlatform}
                  onValueChange={setSelectedPlatform}
                >
                  <SelectTrigger className="w-full px-4 py-3 border-[#e86c34]">
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
                        <SelectItem key="dynamics" value="Microsoft Dynamics">
                          Microsoft Dynamics
                        </SelectItem>,
                      ]
                    )}
                  </SelectContent>
                </Select>
              </div>
              <Button
                className={`w-full py-3 ${
                  selectedPlatform
                    ? "bg-[#e86c34] hover:bg-[#d85c24] text-white"
                    : "bg-[#e5e7eb] text-[#4b5563] opacity-70 cursor-not-allowed"
                }`}
                disabled={!selectedPlatform || createEstimate.isPending}
                onClick={handleConnectPlatform}
              >
                {createEstimate.isPending ? "CONNECTING..." : "CONNECT"}
              </Button>
              <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-center">
                <a
                  href="#"
                  className="flex items-center justify-center text-xs text-[#4b5563]"
                >
                  <i className="fas fa-shield-alt mr-1"></i>
                  <span>SECURITY INFO</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h3 className="font-medium text-[#1a2a38] text-lg mb-6">How It Works</h3>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div
                    className={`h-8 w-8 rounded-full ${
                      selectedPlatform ? "bg-[#e86c34]" : "bg-[#e86c34]"
                    } flex items-center justify-center text-white`}
                  >
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                  </div>
                  <div
                    className="h-full border-l border-[#e5e7eb] ml-4 mt-2"
                    style={{ height: "40px" }}
                  ></div>
                </div>
                <div>
                  <h4 className="font-medium text-[#1a2a38]">
                    CONNECT SOURCE PLATFORM
                  </h4>
                  <p className="text-sm text-[#4b5563] mt-1">
                    Authorize access to analyze the dataset
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div
                    className={`h-8 w-8 rounded-full ${
                      false
                        ? "bg-[#e86c34] text-white"
                        : "bg-white border border-[#e5e7eb] text-[#4b5563]"
                    } flex items-center justify-center`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        false ? "bg-white" : "bg-[#e5e7eb]"
                      }`}
                    ></span>
                  </div>
                  <div
                    className="h-full border-l border-[#e5e7eb] ml-4 mt-2"
                    style={{ height: "40px" }}
                  ></div>
                </div>
                <div>
                  <h4 className="font-medium text-[#4b5563]">
                    SELECT TARGET PLATFORM
                  </h4>
                  <p className="text-sm text-[#4b5563] mt-1">
                    Helps determine the type of migration needed
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div
                    className={`h-8 w-8 rounded-full ${
                      false
                        ? "bg-[#e86c34] text-white"
                        : "bg-white border border-[#e5e7eb] text-[#4b5563]"
                    } flex items-center justify-center`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        false ? "bg-white" : "bg-[#e5e7eb]"
                      }`}
                    ></span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#4b5563]">START ESTIMATOR</h4>
                  <p className="text-sm text-[#4b5563] mt-1">
                    Calculates estimated migration price
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-[#4b5563] text-center">
              *DATA WILL NOT BE MIGRATED TO SELECTED PLATFORM
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewEstimatePage;
