import type { FC } from "react";
import { useState } from "react";
import "@/styles.css";
import { deals } from "@/data/mockData";
import type { Deal, HubspotTask } from "@/types";
import { Toaster as Toastie } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
    DealProgress,
    DealHeader,
    DealStakeholders,
    DealRisk,
    DealQualification,
    DealActions,
    ActionPlan,
} from "@/lib";

const App: FC = () => {
    const [currentDeal, setCurrentDeal] = useState<Deal>(deals[0]);

    const handleDealChange = (dealId: string) => {
        const selectedDeal = deals.find((deal) => deal.dealId === dealId);
        if (selectedDeal) {
            setCurrentDeal(selectedDeal);
        }
    };

    const handleHubspotTaskAdd = (task: HubspotTask) => {
        console.log("Adding task to Hubspot:", task);
        // toast.success("Task added to Hubspot");
    };

    const handleNavigate = (path: string) => {
        toast.success("Navigating to " + path);
    };

    return (
        <div>
            <Toastie position="bottom-center" />
            <DealHeader deal={currentDeal} onDealChange={handleDealChange} availableDeals={deals} />
            <DealProgress deal={currentDeal} />
            <DealStakeholders deal={currentDeal} />
            <DealRisk deal={currentDeal} />
            <DealQualification deal={currentDeal} onNavigate={handleNavigate} />
            <ActionPlan deal={currentDeal} onHubspotTaskAdd={handleHubspotTaskAdd} />
        </div>
    );
};

export default App;
