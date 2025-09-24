import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <span>
            Question Type:{" "}
            {type === "short_answer_question" ?
                <p>Short Answer</p>
            :   <p>Multiple Choice</p>}
            <Button
                onClick={() => {
                    if (type === "short_answer_question") {
                        setType("multiple_choice_question");
                    } else {
                        setType("short_answer_question");
                    }
                }}
            >
                {" "}
                Change Type{" "}
            </Button>
        </span>
    );
}
