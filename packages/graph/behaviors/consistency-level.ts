import { TimelinePipe } from "@bpa-solutions/pnp-core";
import { Queryable } from "@bpa-solutions/pnp-queryable";

export function ConsistencyLevel(level = "eventual"): TimelinePipe<Queryable> {

    return (instance: Queryable) => {

        instance.on.pre(async function (this: Queryable, url, init, result) {

            init.headers = { ...init.headers, "ConsistencyLevel": level };

            return [url, init, result];
        });

        return instance;
    };
}
