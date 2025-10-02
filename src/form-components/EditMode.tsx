import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [edited, setEdited] = useState<boolean>(false);

    function updateEdited(event: React.ChangeEvent<HTMLInputElement>) {
        setEdited(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="in-edit-mode"
                label="Edit Mode?"
                checked={edited}
                onChange={updateEdited}
            />
            {edited ?
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                        disabled={!edited}
                    />
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            disabled={!edited}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }

            <h3>Edit Mode</h3>
        </div>
    );
}
