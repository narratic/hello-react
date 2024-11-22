import type { FC } from "react";
import { useState } from "react";

import { Counter, DealProgress } from "@/lib";
import { DealHeader } from "@/lib/CounterDemo/DealHeader";
import { deals } from "@/data/mockData";
import type { Deal } from "@/types";

import "@/styles.css";

const App: FC = () => {
    const [currentDeal, setCurrentDeal] = useState<Deal>(deals[0]);

    const handleDealChange = (dealId: string) => {
        const selectedDeal = deals.find((deal) => deal.dealId === dealId);
        if (selectedDeal) {
            setCurrentDeal(selectedDeal);
        }
    };

    return (
        <div>
            <Counter />
            <DealHeader deal={currentDeal} onDealChange={handleDealChange} availableDeals={deals} />
            <DealProgress deal={currentDeal} />
        </div>
    );
};

export default App;
