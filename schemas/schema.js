// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import navigation from "./documents/navigation";
import siteSettings from "./documents/siteSettings";
import navigationSection from "./objects/navigationSection";
import navigationLink from "./objects/navigationLink";
import gallery from "./objects/gallery";
import textBlock from "./objects/textBlock";
import form from "./objects/form";
import hero from "./objects/hero";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    navigation, navigationSection, navigationLink, siteSettings, page, gallery, textBlock, form, hero
  ]),
});
