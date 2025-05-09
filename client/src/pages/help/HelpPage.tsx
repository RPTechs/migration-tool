import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const HelpPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Help Sidebar */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-white border-b border-[#e5e7eb] px-4 py-3">
            <h3 className="text-lg font-medium text-[#1a2a38]">Help Categories</h3>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              <li>
                <button className="flex items-center w-full space-x-3 px-4 py-3 rounded-md bg-[#fef0ea] text-[#e86c34] group transition-colors">
                  <i className="fas fa-book w-5"></i>
                  <span className="font-medium">Getting Started</span>
                </button>
              </li>
              <li>
                <button className="flex items-center w-full space-x-3 px-4 py-3 rounded-md text-[#4b5563] hover:bg-[#f5f7f9] group transition-colors">
                  <i className="fas fa-exchange-alt w-5"></i>
                  <span>Migration Process</span>
                </button>
              </li>
              <li>
                <button className="flex items-center w-full space-x-3 px-4 py-3 rounded-md text-[#4b5563] hover:bg-[#f5f7f9] group transition-colors">
                  <i className="fas fa-plug w-5"></i>
                  <span>Platform Connections</span>
                </button>
              </li>
              <li>
                <button className="flex items-center w-full space-x-3 px-4 py-3 rounded-md text-[#4b5563] hover:bg-[#f5f7f9] group transition-colors">
                  <i className="fas fa-cog w-5"></i>
                  <span>Account Settings</span>
                </button>
              </li>
              <li>
                <button className="flex items-center w-full space-x-3 px-4 py-3 rounded-md text-[#4b5563] hover:bg-[#f5f7f9] group transition-colors">
                  <i className="fas fa-credit-card w-5"></i>
                  <span>Billing & Plans</span>
                </button>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Help Content */}
        <div className="md:col-span-2">
          <Card className="overflow-hidden">
            <CardHeader className="bg-white border-b border-[#e5e7eb] px-6 py-4">
              <h2 className="text-xl font-medium text-[#1a2a38]">Getting Started</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-[#4b5563]">
                  Welcome to MigrateMyCRM! This guide will help you understand how
                  to use our platform to migrate your data between CRM systems
                  quickly and efficiently.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-[#1a2a38] font-medium">
                      What is MigrateMyCRM?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4b5563]">
                      MigrateMyCRM is a specialized platform that helps businesses
                      migrate their customer data, contacts, deals, and other
                      information between different CRM systems seamlessly. Our
                      tool supports major CRM platforms including HubSpot,
                      Salesforce, Zoho CRM, Pipedrive, and Microsoft Dynamics.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[#1a2a38] font-medium">
                      How do I start a migration?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4b5563]">
                      <p>Starting a migration is simple:</p>
                      <ol className="list-decimal ml-5 space-y-2 mt-2">
                        <li>
                          Go to the Migrations page and click "Start New Migration"
                        </li>
                        <li>
                          Select and connect to your current CRM platform (source)
                        </li>
                        <li>
                          Choose and connect to the CRM platform you want to
                          migrate to (destination)
                        </li>
                        <li>
                          Select either Quick Sample Migration to test with a small
                          portion of your data, or Customize Your Migration for
                          full control
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[#1a2a38] font-medium">
                      What's the difference between Quick Sample and Custom
                      Migration?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4b5563]">
                      <p className="mb-2">
                        <strong>Quick Sample Migration:</strong> Migrates up to 10%
                        of your data using our automatic field mappings. This is
                        perfect for testing how your data will look in the new
                        system before committing to a full migration.
                      </p>
                      <p>
                        <strong>Custom Migration:</strong> Gives you complete
                        control over which objects to migrate and how fields should
                        be mapped. You can select specific data types, customize
                        field mappings, and set up advanced options.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-[#1a2a38] font-medium">
                      How secure is my data during migration?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#4b5563]">
                      Security is our top priority. We use industry-standard
                      encryption for all data in transit and at rest. We access
                      your CRM data only through official APIs using OAuth or
                      secure API keys. Our platform is SOC 2 compliant and we do
                      not store your actual CRM data on our servers beyond the
                      migration process.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-[#f5f7f9] p-4 rounded-lg mt-6">
                  <h3 className="font-medium text-[#1a2a38] mb-2">
                    Need additional help?
                  </h3>
                  <p className="text-sm text-[#4b5563] mb-4">
                    Our support team is available to assist you with any questions
                    or issues you may encounter.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="text-[#4b5563]">
                      <i className="fas fa-envelope mr-2"></i>
                      Email Support
                    </Button>
                    <Button variant="outline" className="text-[#4b5563]">
                      <i className="fas fa-comments mr-2"></i>
                      Live Chat
                    </Button>
                    <Button
                      className="bg-[#e86c34] hover:bg-[#d85c24] text-white"
                    >
                      <i className="fas fa-book mr-2"></i>
                      View Documentation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
