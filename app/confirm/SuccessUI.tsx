import { Center, Card, Stack, ThemeIcon, Title, Text, Button } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";
import { Submission } from "@prisma/client";

function SuccessUI({
  submission,
  alreadyVerified = false,
}: {
  submission: Submission;
  alreadyVerified?: boolean;
}) {
  return (
    <Center h="100vh" px="md">
      <Card shadow="md" radius="md" p="xl" maw={480} w="100%">
        <Stack align="center">
          <ThemeIcon color="green" size={64} radius="xl">
            <IconCircleCheck size={36} />
          </ThemeIcon>

          <Title order={2}>
            {alreadyVerified ? "Link already verified" : "Submission confirmed"}
          </Title>

          <Text ta="center">
            Thank you, <strong>{submission.name}</strong>. Your email has been
            verified successfully.
          </Text>
          <Text ta="center">
            Company: <strong>{submission.companyName}</strong>
          </Text>
          <Text ta="center">
            LinkedIn: <strong>{submission.linkedinUrl}</strong>
          </Text>
          {submission.documentName && (
            <Text size="sm" c="dimmed">
              Document: <strong>{submission.documentName}</strong>
            </Text>
          )}

          <Link href="/submission">
            <Button mt="lg" variant="light">
              Submit another response
            </Button>
          </Link>
        </Stack>
      </Card>
    </Center>
  );
}
export default SuccessUI;
