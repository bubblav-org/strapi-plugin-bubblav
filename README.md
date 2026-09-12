# BubblaV for Strapi

`strapi-plugin-bubblav` connects your Strapi content to [BubblaV](https://www.bubblav.com?utm_source=strapi-market), the AI chatbot for your website. It adds a **BubblaV** page under **Settings > Global settings** in your Strapi admin panel with a step-by-step setup guide and a one-click link into the BubblaV connect flow.

The plugin is a pure setup helper: it stores nothing in Strapi, registers no API routes, and collects no telemetry. Your Strapi instance never calls BubblaV and BubblaV never writes to Strapi. After setup, BubblaV searches your content server-to-server through the standard Strapi REST API using the read-only token you create below.

## What it does

- Shows the exact steps to create a read-only Strapi API token and find your base URL.
- Deep-links into the BubblaV dashboard where you paste the base URL and API token.
- Explains where to check (and remove) the connection afterwards, inside BubblaV.

## Requirements

- Strapi v5
- A BubblaV account (free plan available)

## Setup

1. Install the plugin and rebuild:

   ```sh
   npm install strapi-plugin-bubblav
   npm run build
   npm run develop
   ```

2. In your Strapi admin panel, go to **Settings > API Tokens** and click **Create new API Token**. Choose the **Read-only** token type so BubblaV can search your content but never modify it. Copy the token immediately: Strapi shows it only once.

3. Copy your Strapi base URL, for example `https://cms.yoursite.com`. Do not add a trailing `/api` segment: BubblaV adds it automatically.

4. In your Strapi admin panel, open **Settings > Global settings > BubblaV** and click **Open BubblaV and connect Strapi**.

5. In the BubblaV dashboard, pick your website, open **Integrations**, select **Strapi**, and paste your base URL and API token. BubblaV verifies the credentials and saves the connection.

6. To check status later, open the BubblaV dashboard, pick your website, and go to **Integrations**: Strapi appears there once connected, and you can resync or disconnect it from the same place.

## How the integration works

Once connected, when a visitor asks your BubblaV chatbot a question, BubblaV queries your Strapi REST API with the read-only token and answers from your published articles, pages, and custom content types. Queries go from BubblaV's servers to your Strapi host over HTTPS; Strapi never needs to be publicly writable and no content is copied into the plugin.

## Links

- Website: [https://www.bubblav.com?utm_source=strapi-market](https://www.bubblav.com?utm_source=strapi-market)
- Documentation: [https://docs.bubblav.com/user-guide/integrations/strapi](https://docs.bubblav.com/user-guide/integrations/strapi)
- Support: support@bubblav.com

## License

MIT
