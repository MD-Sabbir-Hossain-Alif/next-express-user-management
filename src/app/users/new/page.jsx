"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const newUserPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newUser = Object.fromEntries(formData.entries());

        console.log("new User", newUser);

        // TODO: send new user data to the server
        const req = await fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        const res = await req.json();
        console.log("created User", res);

        if (res.success) {
            alert("Form submitted successfully!");
            redirect("/users");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Form
                className="w-full max-w-120 px-6 py-10 bg-indigo-200 rounded-xl"
                onSubmit={onSubmit}
            >
                <Fieldset>
                    <Fieldset.Legend className="text-3xl text-center mb-5">
                        Create New User
                    </Fieldset.Legend>
                    <Description>Update your profile information.</Description>
                    <FieldGroup>
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Create User
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
};

export default newUserPage;
