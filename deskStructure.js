// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document().schemaType("navigation").documentId("navigation")
                ),
            ])
        ),
      S.listItem()
        .title("Contact Information")
        .child(S.document().schemaType("contact").documentId("contact")),
      S.listItem()
        .title("Sermons")
        .child(
          S.list()
            .title("Sermon Details")
            .items(
              S.documentTypeListItems().filter((listItem) =>
                ["sermonSeries"].includes(listItem.getId())
              )
            )
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "navigation",
            "contact",
            "sermon",
            "sermonSeries",
          ].includes(listItem.getId())
      ),
    ]);
