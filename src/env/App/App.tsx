import type { FC } from "react";
import { useState } from "react";
import "@/styles.css";
import { deals } from "@/data/mockData";
import type { Deal } from "@/types";
import { Toaster as Toastie } from "@/components/ui/sonner";
import { toast } from "sonner";
import { DealProgress, DealHeader, DealStakeholders, DealRisk, DealQualification, DealActions } from "@/lib";

const App: FC = () => {
    const [currentDeal, setCurrentDeal] = useState<Deal>(deals[0]);

    const handleDealChange = (dealId: string) => {
        const selectedDeal = deals.find((deal) => deal.dealId === dealId);
        if (selectedDeal) {
            setCurrentDeal(selectedDeal);
        }
    };

    const handleNavigate = (path: string) => {
        toast.success("Navigating to " + path);
    };

    return (
        <div>
            <Toastie position="bottom-center" />
            {/* <Counter /> */}
            <DealHeader deal={currentDeal} onDealChange={handleDealChange} availableDeals={deals} />
            <DealProgress deal={currentDeal} />
            <DealStakeholders deal={currentDeal} />
            <DealRisk deal={currentDeal} />
            <DealQualification deal={currentDeal} onNavigate={handleNavigate} />
            <DealActions deal={currentDeal} />
        </div>
    );
};

export default App;
