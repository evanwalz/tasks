import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const COLORS = [
        "red",
        "orange",
        "yellow",
        "blue",
        "indigo",
        "violet",
        "black",
        "white",
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="colors"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={updateColor}
                    style={{
                        backgroundColor: c,
                        color: "black",
                        padding: "8px",
                        borderRadius: "4px",
                        width: "75px",
                    }}
                />
            ))}
            <p>
                {"\n"}You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        color: "black",
                        padding: "5px",
                        borderRadius: "4px",
                    }}
                >
                    {color}
                </span>
            </p>
        </div>
    );
}
