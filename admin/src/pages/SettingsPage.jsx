import React from 'react';
import {
  Box,
  Divider,
  Flex,
  Link,
  Main,
  Typography,
} from '@strapi/design-system';
import { ExternalLink } from '@strapi/icons';

const BUBBLAV_CONNECT_URL =
  'https://www.bubblav.com/dashboard/websites?utm_source=strapi-market';
const BUBBLAV_DOCS_URL =
  'https://docs.bubblav.com/user-guide/integrations/strapi';

const STEPS = [
  {
    title: 'Create a read-only API token in Strapi',
    body: 'Go to Settings > API Tokens and click "Create new API Token". Choose the "Read-only" token type so BubblaV can search your content but never modify it. Copy the token right away: Strapi shows it only once.',
  },
  {
    title: 'Copy your Strapi base URL',
    body: 'This is the public address of your Strapi host, for example https://cms.yoursite.com. Do not add a trailing /api segment: BubblaV adds it automatically.',
  },
  {
    title: 'Connect Strapi in BubblaV',
    body: 'Open the BubblaV dashboard with the button below, pick your website, open Integrations, select Strapi, and paste your base URL and API token. BubblaV verifies the credentials and saves the connection.',
  },
];

const SettingsPage = () => (
  <Main>
    <Box padding={8}>
      <Flex direction="column" alignItems="flex-start" gap={6}>
        <Box>
          <Typography variant="beta" as="h1">
            BubblaV
          </Typography>
          <Typography variant="epsilon" textColor="neutral600">
            Connect your Strapi content to your BubblaV chatbot
          </Typography>
        </Box>

        <Box
          padding={6}
          background="neutral0"
          hasRadius
          shadow="filterShadow"
          width="100%"
        >
          <Flex direction="column" alignItems="flex-start" gap={4}>
            <Typography variant="delta" as="h2">
              Setup guide
            </Typography>
            {STEPS.map((step, index) => (
              <Flex
                key={step.title}
                direction="column"
                alignItems="flex-start"
                gap={1}
              >
                <Typography variant="omega" fontWeight="semiBold">
                  {`${index + 1}. ${step.title}`}
                </Typography>
                <Typography textColor="neutral600">{step.body}</Typography>
              </Flex>
            ))}

            <Box paddingTop={2}>
              <Link
                href={BUBBLAV_CONNECT_URL}
                isExternal
                endIcon={<ExternalLink />}
              >
                Open BubblaV and connect Strapi
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box
          padding={6}
          background="neutral0"
          hasRadius
          shadow="filterShadow"
          width="100%"
        >
          <Flex direction="column" alignItems="flex-start" gap={2}>
            <Typography variant="delta" as="h2">
              Connection status
            </Typography>
            <Typography textColor="neutral600">
              This plugin does not store anything in Strapi and makes no
              background requests. After you save the Strapi connection in
              BubblaV, check its status there: open the BubblaV dashboard, pick
              your website, and go to Integrations. Strapi is listed among the
              connected integrations once the connection is saved, and you can
              disconnect or resync it from the same place.
            </Typography>
            <Box paddingTop={2}>
              <Link href={BUBBLAV_DOCS_URL} isExternal endIcon={<ExternalLink />}>
                BubblaV Strapi documentation
              </Link>
            </Box>
          </Flex>
        </Box>

        <Divider />

        <Typography variant="pi" textColor="neutral500">
          BubblaV is the AI chatbot for your website. This plugin is free and
          open source under the MIT license and collects no telemetry.
        </Typography>
      </Flex>
    </Box>
  </Main>
);

export default SettingsPage;
