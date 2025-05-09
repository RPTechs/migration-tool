import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { migrationService } from "@/services/apiService";

const MigrationsPage = () => {
  // Fetch existing migrations, if any
  const { data: migrations, isLoading } = useQuery({
    queryKey: ["/api/migrations"],
    staleTime: 60000, // 1 minute
  });

  const hasMigrations = migrations && migrations.length > 0;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] space-y-4">
        <Link href="/migrations/new">
          <Button 
            size="lg" 
            className="bg-[#e86c34] hover:bg-[#d85c24] text-white font-medium py-3 px-6 rounded-md shadow-sm transition-colors"
          >
            START NEW MIGRATION
          </Button>
        </Link>
        
        <p className="text-[#4b5563] text-center mt-4">
          Click the button above to start a platform migration
        </p>
        
        <div className="text-[#e86c34] hover:text-[#d85c24] text-sm flex items-center mt-2">
          <span>or</span>
          <a href="#" className="ml-1 underline">
            request custom migration quote
          </a>
        </div>
        
        {/* Display migrations list if there are any */}
        {hasMigrations && (
          <div className="w-full mt-10">
            <h3 className="text-lg font-medium mb-4">Your migrations</h3>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {isLoading ? (
                    <div className="p-6 text-center text-gray-500">
                      Loading migrations...
                    </div>
                  ) : (
                    migrations.map((migration: any) => (
                      <div 
                        key={migration.id} 
                        className="p-4 flex justify-between items-center"
                      >
                        <div>
                          <div className="font-medium">{migration.name}</div>
                          <div className="text-sm text-gray-500">
                            {migration.source} → {migration.destination}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs ${
                              migration.status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : migration.status === 'in_progress' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {migration.status}
                          </span>
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

export default MigrationsPage;
