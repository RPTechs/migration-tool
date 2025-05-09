import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const PolicyPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Card className="overflow-hidden">
        <CardHeader className="bg-white border-b border-[#e5e7eb] px-6 py-4">
          <h2 className="text-xl font-medium text-[#1a2a38]">
            Policy & Agreements
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="data">Data Processing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="terms">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium text-[#1a2a38] mb-4">
                  Terms of Service
                </h3>
                <p className="text-[#4b5563]">
                  Last updated: June 1, 2023
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  1. Acceptance of Terms
                </h4>
                <p className="text-[#4b5563]">
                  By accessing or using the MigrateMyCRM service, you agree to be bound by these Terms of Service.
                  If you do not agree to all of these terms, you may not access or use our services.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  2. Description of Service
                </h4>
                <p className="text-[#4b5563]">
                  MigrateMyCRM provides tools for migrating customer relationship management (CRM) data between
                  different platforms. The service includes data mapping, transformation, and transfer capabilities.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  3. User Accounts
                </h4>
                <p className="text-[#4b5563]">
                  To use our services, you must create an account. You are responsible for maintaining the
                  confidentiality of your account credentials and for all activities conducted through your account.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  4. Data Usage and Storage
                </h4>
                <p className="text-[#4b5563]">
                  We process and store your CRM data only to the extent necessary to provide our migration services.
                  Once a migration is complete, we retain only minimal logs for audit and support purposes.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  5. Service Limitations
                </h4>
                <p className="text-[#4b5563]">
                  While we strive for high accuracy in data migration, the nature of different CRM systems means
                  that not all data structures may map perfectly between platforms. Users should review migrated
                  data for completeness.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium text-[#1a2a38] mb-4">
                  Privacy Policy
                </h3>
                <p className="text-[#4b5563]">
                  Effective date: June 1, 2023
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  1. Information We Collect
                </h4>
                <p className="text-[#4b5563]">
                  When you use MigrateMyCRM, we collect information including account details, connection credentials
                  for your CRM platforms (stored securely), and metadata about the migrations you perform.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  2. How We Use Your Information
                </h4>
                <p className="text-[#4b5563]">
                  We use your information to provide and improve our migration services, maintain your account,
                  process payments, and send service updates and communications.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  3. Data Security
                </h4>
                <p className="text-[#4b5563]">
                  We implement appropriate technical and organizational measures to protect your data.
                  All data is encrypted in transit and at rest, and we regularly audit our security practices.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  4. Third-Party Sharing
                </h4>
                <p className="text-[#4b5563]">
                  We do not sell your data to third parties. We may share data with service providers who help us
                  deliver our services, but they are bound by confidentiality obligations.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  5. Your Rights
                </h4>
                <p className="text-[#4b5563]">
                  Depending on your location, you may have rights to access, modify, or delete your personal
                  information. Contact us to exercise these rights.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="data">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium text-[#1a2a38] mb-4">
                  Data Processing Agreement
                </h3>
                <p className="text-[#4b5563]">
                  Last updated: June 1, 2023
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  1. Processing Purpose
                </h4>
                <p className="text-[#4b5563]">
                  MigrateMyCRM processes customer data solely for the purpose of facilitating data migration
                  between CRM platforms as directed by the customer.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  2. Data Categories
                </h4>
                <p className="text-[#4b5563]">
                  Data processed may include contact information, customer records, sales data, and other
                  information stored within the customer's CRM systems.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  3. Processing Duration
                </h4>
                <p className="text-[#4b5563]">
                  Data is processed only for the duration necessary to complete the requested migration services.
                  Temporary copies are deleted within 7 days of migration completion.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  4. Subprocessors
                </h4>
                <p className="text-[#4b5563]">
                  We may engage subprocessors to assist in providing our services. All subprocessors are bound
                  by data protection terms at least as protective as those in this agreement.
                </p>
                
                <h4 className="font-medium text-[#1a2a38] mt-6 mb-2">
                  5. Security Measures
                </h4>
                <p className="text-[#4b5563]">
                  We implement appropriate technical and organizational measures including encryption,
                  access controls, security monitoring, and regular security assessments.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PolicyPage;
