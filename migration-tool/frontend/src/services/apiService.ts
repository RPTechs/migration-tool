import { apiRequest } from "@/lib/queryClient";

// Types for our API resources
export interface User {
  username: string;
  email: string;
}

export interface Connection {
  id: string;
  name: string;
  platform: string;
  status: string;
  createdAt: string;
}

export interface Platform {
  id: string;
  name: string;
  logo: string;
}

// User profile service
export const userService = {
  getUserProfile: async (): Promise<User> => {
    const res = await apiRequest("GET", "/api/user/profile");
    return res.json();
  },
};

// Connections service
export const connectionService = {
  getConnections: async (): Promise<Connection[]> => {
    const res = await apiRequest("GET", "/api/connections");
    return res.json();
  },
  
  createConnection: async (data: { platform: string, credentials: any }): Promise<Connection> => {
    const res = await apiRequest("POST", "/api/connections", data);
    return res.json();
  },
  
  deleteConnection: async (id: string): Promise<void> => {
    await apiRequest("DELETE", `/api/connections/${id}`);
  }
};

// Platforms service
export const platformService = {
  getPlatforms: async (): Promise<Platform[]> => {
    const res = await apiRequest("GET", "/api/platforms");
    return res.json();
  }
};

// Migrations service
export const migrationService = {
  startMigration: async (data: { 
    source: string, 
    destination: string,
    type: 'quick' | 'custom'
  }): Promise<any> => {
    const res = await apiRequest("POST", "/api/migrations", data);
    return res.json();
  },
  
  getMigrations: async (): Promise<any[]> => {
    const res = await apiRequest("GET", "/api/migrations");
    return res.json();
  }
};

// Estimates service
export const estimateService = {
  createEstimate: async (data: { 
    platform: string 
  }): Promise<any> => {
    const res = await apiRequest("POST", "/api/estimates", data);
    return res.json();
  },
  
  getEstimates: async (): Promise<any[]> => {
    const res = await apiRequest("GET", "/api/estimates");
    return res.json();
  }
};
