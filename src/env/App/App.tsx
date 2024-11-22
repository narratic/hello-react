import type { FC } from "react";

import { Counter, DealProgress } from "@/lib";
// import { Button } from "@/components/ui/button";
import { DealHeader } from "@/lib/CounterDemo/DealHeader";

import { deals } from "@/data/mockData";

import "@/styles.css";

const App: FC = () => {
    return (
        <div>
            <Counter />
            <DealHeader deal={deals[0]} />
            {/* <Button variant="outline">Click me</Button> */}
            <DealProgress deal={deals[0]} />
        </div>
    );
};

export default App;
