import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { estimateService } from "@/services/apiService";

const EstimatesPage = () => {
  // Fetch existing estimates, if any
  const { data: estimates, isLoading } = useQuery({
    queryKey: ["/api/estimates"],
    staleTime: 60000, // 1 minute
  });

  const hasEstimates = estimates && estimates.length > 0;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] space-y-4">
        <Link href="/estimates/new">
          <Button 
            size="lg" 
            className="bg-[#e86c34] hover:bg-[#d85c24] text-white font-medium py-3 px-6 rounded-md shadow-sm transition-colors"
          >
            START NEW ESTIMATE
          </Button>
        </Link>
        
        <p className="text-[#4b5563] text-center mt-4">
          Click the button above to start a platform migration estimate
        </p>
        
        <div className="flex items-center mt-2 text-xs text-[#4b5563]">
          <i className="fas fa-tag mr-1"></i>
          <span>No credit card required. Service and safe.</span>
        </div>
        
        {/* Display estimates list if there are any */}
        {hasEstimates && (
          <div className="w-full mt-10">
            <h3 className="text-lg font-medium mb-4">Your estimates</h3>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {isLoading ? (
                    <div className="p-6 text-center text-gray-500">
                      Loading estimates...
                    </div>
                  ) : (
                    estimates.map((estimate: any) => (
                      <div 
                        key={estimate.id} 
                        className="p-4 flex justify-between items-center"
                      >
                        <div>
                          <div className="font-medium">{estimate.platform} Migration</div>
                          <div className="text-sm text-gray-500">
                            {new Date(estimate.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-[#1a2a38]">
                            ${estimate.estimatedPrice}
                          </span>
                          <Link href={`/estimates/${estimate.id}`}>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-xs"
                            >
                              View
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimatesPage;
