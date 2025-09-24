import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "NewYear"
    | "Easter"
    | "Independence"
    | "Halloween"
    | "Christmas";

const emoji: Record<Holiday, string> = {
    NewYear: "🎉",
    Easter: "🐣",
    Independence: "🇺🇸",
    Halloween: "🎃",
    Christmas: "🎄",
};

const alphabetically: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "Independence",
    Independence: "NewYear",
    NewYear: "Christmas",
};

const chronologically: Record<Holiday, Holiday> = {
    NewYear: "Easter",
    Easter: "Independence",
    Independence: "Halloween",
    Halloween: "Christmas",
    Christmas: "NewYear",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("NewYear");

    return (
        <div>
            <div>Holiday: {emoji[holiday]}</div>

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
