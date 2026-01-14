"use client";
import { useEffect, useState } from "react";
import { Center, Card, Stack, Text, Loader } from "@mantine/core";
import SuccessUI from "./SuccessUI";
import { Submission } from "@prisma/client";

interface AutoConfirmProps {
  token: string;
  submission: Submission;
}

function AutoConfirm({ token, submission }: AutoConfirmProps) {
  const [done, setDone] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);

  useEffect(() => {
    fetch("/api/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Confirmation result:", data);
        if (data.status === "ALREADY_CONFIRMED") {
          setAlreadyVerified(true);
        }
        setDone(true);
      });
  }, [token]);

  if (!done) {
    return (
      <Center h="100vh" px="md">
        <Card shadow="md" radius="md" p="xl" maw={420} w="100%">
          <Stack align="center" gap="md">
            <Loader size="lg" />
            <Text c="dimmed">Confirming your submission…</Text>
          </Stack>
        </Card>
      </Center>
    );
  }

  return <SuccessUI submission={submission} alreadyVerified={alreadyVerified} />;
}

export default AutoConfirm;