import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎉" | "🐣" | "🇺🇸" | "🎃" | "🎄";

const alphabetically: Record<Holiday, Holiday> = {
    "🎄": "🐣",
    "🐣": "🎃",
    "🎃": "🇺🇸",
    "🇺🇸": "🎉",
    "🎉": "🎄",
};

const chronologically: Record<Holiday, Holiday> = {
    "🎉": "🐣",
    "🐣": "🇺🇸",
    "🇺🇸": "🎃",
    "🎃": "🎄",
    "🎄": "🎉",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎉");

    return (
        <div>
            <div>Holiday: {holiday}</div>

            <Button
                onClick={() => {
                    setHoliday(alphabetically[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    setHoliday(chronologically[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
