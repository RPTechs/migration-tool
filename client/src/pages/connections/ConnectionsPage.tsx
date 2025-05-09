import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { connectionService } from "@/services/apiService";
import { queryClient } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const ConnectionsPage = () => {
  const [newConnection, setNewConnection] = useState({
    platform: "",
    apiKey: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Fetch connections
  const { data: connections, isLoading } = useQuery({
    queryKey: ["/api/connections"],
    staleTime: 60000, // 1 minute
  });

  // Add connection mutation
  const addConnection = useMutation({
    mutationFn: connectionService.createConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/connections"] });
      toast({
        title: "Connection added",
        description: "Your connection has been successfully added.",
      });
      setIsDialogOpen(false);
      setNewConnection({ platform: "", apiKey: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to add connection",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    },
  });

  // Delete connection mutation
  const deleteConnection = useMutation({
    mutationFn: connectionService.deleteConnection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/connections"] });
      toast({
        title: "Connection removed",
        description: "The connection has been successfully removed.",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to remove connection",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    },
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newConnection.platform) {
      toast({
        title: "Platform required",
        description: "Please select a platform.",
        variant: "destructive",
      });
      return;
    }

    addConnection.mutate({
      platform: newConnection.platform,
      credentials: { apiKey: newConnection.apiKey },
    });
  };

  const hasConnections = connections && connections.length > 0;

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium text-[#1a2a38] mb-4">
            Manage Connections
          </h2>
          <p className="text-sm text-[#4b5563] mb-6">
            Connect to your CRM platforms to enable migration and estimate services.
          </p>

          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-[#4b5563]">Loading connections...</p>
            </div>
          ) : hasConnections ? (
            <div className="space-y-4">
              {connections.map((connection: any) => (
                <div
                  key={connection.id}
                  className="border border-[#e5e7eb] rounded-lg p-4 flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#f5f7f9] flex items-center justify-center">
                      <i className="fas fa-plug text-[#4b5563]"></i>
                    </div>
                    <div>
                      <h3 className="font-medium">{connection.platform}</h3>
                      <p className="text-sm text-[#4b5563]">
                        Connected {new Date(connection.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => deleteConnection.mutate(connection.id)}
                    disabled={deleteConnection.isPending}
                  >
                    <i className="fas fa-trash-alt mr-1"></i>
                    Remove
                  </Button>
                </div>
              ))}

              <div className="mt-4 text-center">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#e86c34] hover:bg-[#d85c24] text-white">
                      Add Another Connection
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <form onSubmit={handleFormSubmit}>
                      <DialogHeader>
                        <DialogTitle>Add New Connection</DialogTitle>
                        <DialogDescription>
                          Connect to a CRM platform to enable migration services.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="platform">Platform</Label>
                          <Select
                            value={newConnection.platform}
                            onValueChange={(value) =>
                              setNewConnection({ ...newConnection, platform: value })
                            }
                          >
                            <SelectTrigger id="platform">
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="HubSpot">HubSpot</SelectItem>
                              <SelectItem value="Salesforce">Salesforce</SelectItem>
                              <SelectItem value="Zoho CRM">Zoho CRM</SelectItem>
                              <SelectItem value="Pipedrive">Pipedrive</SelectItem>
                              <SelectItem value="Microsoft Dynamics">
                                Microsoft Dynamics
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="apiKey">API Key</Label>
                          <Input
                            id="apiKey"
                            value={newConnection.apiKey}
                            onChange={(e) =>
                              setNewConnection({
                                ...newConnection,
                                apiKey: e.target.value,
                              })
                            }
                            placeholder="Enter your API key"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          className="bg-[#e86c34] hover:bg-[#d85c24] text-white"
                          disabled={addConnection.isPending}
                        >
                          {addConnection.isPending ? "Adding..." : "Add Connection"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ) : (
            <div className="border border-dashed border-[#e5e7eb] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <i className="fas fa-plug text-4xl text-[#4b5563] opacity-30"></i>
              </div>
              <h3 className="font-medium text-[#4b5563] mb-2">No connections yet</h3>
              <p className="text-sm text-[#4b5563] mb-4">
                Connect to your CRM platforms to enable migration services
              </p>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#e86c34] hover:bg-[#d85c24] text-white">
                    Add Connection
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <form onSubmit={handleFormSubmit}>
                    <DialogHeader>
                      <DialogTitle>Add New Connection</DialogTitle>
                      <DialogDescription>
                        Connect to a CRM platform to enable migration services.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="platform">Platform</Label>
                        <Select
                          value={newConnection.platform}
                          onValueChange={(value) =>
                            setNewConnection({ ...newConnection, platform: value })
                          }
                        >
                          <SelectTrigger id="platform">
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="HubSpot">HubSpot</SelectItem>
                            <SelectItem value="Salesforce">Salesforce</SelectItem>
                            <SelectItem value="Zoho CRM">Zoho CRM</SelectItem>
                            <SelectItem value="Pipedrive">Pipedrive</SelectItem>
                            <SelectItem value="Microsoft Dynamics">
                              Microsoft Dynamics
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apiKey">API Key</Label>
                        <Input
                          id="apiKey"
                          value={newConnection.apiKey}
                          onChange={(e) =>
                            setNewConnection({
                              ...newConnection,
                              apiKey: e.target.value,
                            })
                          }
                          placeholder="Enter your API key"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="bg-[#e86c34] hover:bg-[#d85c24] text-white"
                        disabled={addConnection.isPending}
                      >
                        {addConnection.isPending ? "Adding..." : "Add Connection"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectionsPage;
