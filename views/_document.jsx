import React from "react";

import { Document, Head, Main } from "@react-ssr/express";

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>KoolDev-Resume</title>
          <link rel="icon" type="image/png" href="/favicon.ico"></link>
        </Head>

        <body>
          <Main />
        </body>
      </html>
    );
  }
}
