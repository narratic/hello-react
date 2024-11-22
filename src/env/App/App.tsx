import type { FC } from "react";

import { Counter } from "@/lib";
// import { Button } from "@/components/ui/button";
import { DealHeader } from "@/lib/CounterDemo/DealHeader";

import "@/styles.css";

const App: FC = () => {
    return (
        <div>
            <Counter />
            <DealHeader dealStage="Proposal" dealName="Deal 1" />
            {/* <Button variant="outline">Click me</Button> */}
        </div>
    );
};

export default App;
