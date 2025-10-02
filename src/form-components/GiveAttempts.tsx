import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    const safeSetRequest = (newValue: string) => {
        if (newValue === "" || !isNaN(parseInt(newValue, 10))) {
            setRequest(newValue);
        }
    };

    const parsedRequest = parseInt(request, 10);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label> Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        safeSetRequest(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    if (attempts > 0) {
                        setAttempts(attempts - 1);
                    }
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    if (!isNaN(parsedRequest)) {
                        setAttempts(attempts + parsedRequest);
                        setRequest("");
                    }
                }}
            >
                gain
            </Button>
            Attempts Left: {attempts}
        </div>
    );
}
