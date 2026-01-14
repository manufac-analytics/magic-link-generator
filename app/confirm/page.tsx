import { prisma } from "@/lib/prisma";
import { hashToken } from "@/lib/token";
import { Center, Card, Title, Text, Stack, Button, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import Link from "next/link";
import SuccessUI from "./SuccessUI";
import AutoConfirm from "./AutoConfirm";

interface PageProps {
  searchParams: Promise<{ token: string }>;
}

export default async function ConfirmPage({ searchParams }: PageProps) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <Center h="100vh" px="md">
        <Card shadow="md" radius="md" p="xl" maw={420} w="100%">
          <Stack align="center">
            <ThemeIcon color="red" size={56} radius="xl">
              <IconAlertTriangle size={32} />
            </ThemeIcon>

            <Title order={3}>Invalid link</Title>
            <Text c="dimmed" ta="center">
              The confirmation link is missing or invalid.
            </Text>

            <Link href="/submission">
              <Button mt="md">Go back</Button>
            </Link>
          </Stack>
        </Card>
      </Center>
    );
  }

  const tokenHash = hashToken(token);

  const magicLinkToken = await prisma.magicLinkToken.findUnique({
    where: { tokenHash },
    include: { submission: true },
  });

  if (!magicLinkToken || magicLinkToken.expiresAt < new Date()) {
    return (
      <Center h="100vh" px="md">
        <Card shadow="md" radius="md" p="xl" maw={420} w="100%">
          <Stack align="center">
            <ThemeIcon color="orange" size={56} radius="xl">
              <IconAlertTriangle size={32} />
            </ThemeIcon>

            <Title order={3}>Link expired</Title>
            <Text c="dimmed" ta="center">
              This magic link is invalid or has expired.
            </Text>

            <Link href="/submission">
              <Button mt="md">Submit again</Button>
            </Link>
          </Stack>
        </Card>
      </Center>
    );
  }

  // If the token has already been used, show the success UI
  if (magicLinkToken.usedAt) {
    return <SuccessUI submission={magicLinkToken.submission} alreadyVerified={true} />;
  }


  // Token is valid and NOT used yet - Render AutoConfirm component to handle confirmation via API
  return <AutoConfirm token={token} submission={magicLinkToken.submission} />;
}

