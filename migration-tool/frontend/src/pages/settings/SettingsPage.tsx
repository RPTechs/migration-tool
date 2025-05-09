import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/apiService";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("general");

  const { data: user, isLoading } = useQuery({
    queryKey: ["/api/user/profile"],
    staleTime: 300000, // 5 minutes
  });

  const handleEditUsername = () => {
    // In a real app, this would open a modal or enable editing
    alert("Edit username functionality would go here");
  };

  const settingsTabs = [
    { id: "general", label: "General", icon: "cog" },
    { id: "security", label: "Security", icon: "shield-alt" },
    { id: "plans", label: "Plans", icon: "credit-card" },
    { id: "billing", label: "Billing", icon: "file-invoice-dollar" },
    { id: "teams", label: "Teams", icon: "users", comingSoon: true },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Settings Menu */}
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <ul className="space-y-2">
              {settingsTabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center w-full space-x-3 px-4 py-3 rounded-md ${
                      activeTab === tab.id
                        ? "bg-[#fef0ea] text-[#e86c34]"
                        : "text-[#4b5563] hover:bg-[#f5f7f9]"
                    } group transition-colors`}
                  >
                    <i className={`fas fa-${tab.icon} w-5`}></i>
                    <span className={activeTab === tab.id ? "font-medium" : ""}>
                      {tab.label}
                    </span>
                    {tab.comingSoon && (
                      <span className="text-xs text-[#4b5563] ml-1">
                        (coming soon)
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <div className="md:col-span-2">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              {activeTab === "general" && (
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <i className="fas fa-user-circle text-[#4b5563]"></i>
                    <h2 className="text-lg font-medium text-[#1a2a38]">
                      Profile
                    </h2>
                  </div>
                  <p className="text-sm text-[#4b5563] mb-6">
                    Basic information about your user.
                  </p>

                  <div className="space-y-6">
                    {/* Username */}
                    <div>
                      <label className="block text-sm font-medium text-[#4b5563] mb-1">
                        Username
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          value={isLoading ? "Loading..." : user?.username || "laharcre"}
                          className="w-full pr-16"
                          disabled
                        />
                        <Button
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white text-xs rounded px-2 py-0.5"
                          onClick={handleEditUsername}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#4b5563] mb-1">
                        Email address
                      </label>
                      <Input
                        type="email"
                        value={isLoading ? "Loading..." : user?.email || "laharcre@rcvpartners.io"}
                        className="w-full"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <i className="fas fa-shield-alt text-[#4b5563]"></i>
                    <h2 className="text-lg font-medium text-[#1a2a38]">
                      Security Settings
                    </h2>
                  </div>
                  <p className="text-sm text-[#4b5563] mb-6">
                    Manage your account security and authentication options.
                  </p>

                  <div className="text-center py-8 text-[#4b5563]">
                    Security settings content coming soon
                  </div>
                </div>
              )}

              {activeTab === "plans" && (
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <i className="fas fa-credit-card text-[#4b5563]"></i>
                    <h2 className="text-lg font-medium text-[#1a2a38]">
                      Plans & Subscriptions
                    </h2>
                  </div>
                  <p className="text-sm text-[#4b5563] mb-6">
                    View and manage your current plan and subscriptions.
                  </p>

                  <div className="text-center py-8 text-[#4b5563]">
                    Plans & subscriptions content coming soon
                  </div>
                </div>
              )}

              {activeTab === "billing" && (
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <i className="fas fa-file-invoice-dollar text-[#4b5563]"></i>
                    <h2 className="text-lg font-medium text-[#1a2a38]">
                      Billing Information
                    </h2>
                  </div>
                  <p className="text-sm text-[#4b5563] mb-6">
                    Manage your billing details and payment methods.
                  </p>

                  <div className="text-center py-8 text-[#4b5563]">
                    Billing information content coming soon
                  </div>
                </div>
              )}

              {activeTab === "teams" && (
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <i className="fas fa-users text-[#4b5563]"></i>
                    <h2 className="text-lg font-medium text-[#1a2a38]">
                      Team Management
                    </h2>
                  </div>
                  <p className="text-sm text-[#4b5563] mb-6">
                    Manage team members and their permissions.
                  </p>

                  <div className="text-center py-8 text-[#4b5563]">
                    <p>Team management features coming soon</p>
                    <p className="text-sm mt-2">
                      You'll be able to invite team members and manage their roles
                      and permissions for your migrations.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
