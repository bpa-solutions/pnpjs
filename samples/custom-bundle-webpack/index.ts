// ** import the ambient augmentation
import "@bpa-solutions/pnp-sp/src/webs";
import "@bpa-solutions/pnp-sp/src/lists/web";
import "@bpa-solutions/pnp-sp/src/items/list";

export {
    IWeb,
    Web,
    IWebs,
    Webs,
} from "@bpa-solutions/pnp-sp/src/webs";

export {
    ILists,
    List,
    IList,
    Lists,
} from "@bpa-solutions/pnp-sp/src/lists";

export {
    IItems,
    IItem,
    Item,
    Items,
} from "@bpa-solutions/pnp-sp/src/items";

// export only a subset of the sp lib root
export {
    sp,
    spGet,
    spPost,
    extractWebUrl,
} from "@bpa-solutions/pnp-sp";
