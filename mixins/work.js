function getSlugFromResourcePath(resourcePath) {
    return resourcePath.match(/([^\/:\\*"<>|]+)\.md$/i)[1];
}

export default {
    computed: {
        projects() {
            const pattern = new RegExp(
                `^.\\/${this.$i18n.locale}\\/work\\/(.+)\\.md$`
            );

            let items = require
                .context(`~/content/`, true, /\.md$/)
                .keys()
                .filter(key => key.match(pattern) !== null)
                .map(key => {
                    let item = require(`~/content/${key.replace('./', '')}`);

                    item.meta.slug = getSlugFromResourcePath(
                        item.meta.resourcePath
                    );

                    item.meta.permalink = `/work/${item.meta.slug}/`;

                    return item;
                });

            // Return projects ordered by year desc
            return this.orderBy(items, 'attributes.year', -1);
        },
    },
};
