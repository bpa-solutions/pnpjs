# @pnp/msaljsclient

This library provides a thin wrapper around the [msal](https://github.com/AzureAD/microsoft-authentication-library-for-js) library to make it easy to integrate MSAL authentication in the browser.

You will first need to install the package:

`npm install @pnp/msaljsclient --save`

The configuration and authParams

```TypeScript
import { spfi, SPBrowser } from "@bpa-solutions/pnp-sp";
import { MSAL } from "@pnp/msaljsclient";
import "@bpa-solutions/pnp-sp/webs";

const configuation = {
    auth: {
        authority: "https://login.microsoftonline.com/common",
        clientId: "{client id}",
    }
};

const authParams = {
    scopes: ["https://{tenant}.sharepoint.com/.default"],
};

const sp = spfi("https://tenant.sharepoint.com/sites/dev").using(SPBrowser(), MSAL(configuration, authParams));

const webData = await sp.web();
```

Please see more scenarios in the [authentication article](../concepts/authentication.md).

