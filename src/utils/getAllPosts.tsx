function importAll(r: { (arg0: any): any; keys: () => any[]; }) {
    return r
        .keys()
        .filter((filename) => filename.startsWith('.'))
        .map((filename) => ({
            slug: filename.substring(2,filename.length-4).replace(/\/index\.mdx$/, ''),
            filename,
            module: r(filename),
        }))
        .filter(({ slug }) => !slug.includes('/snippets/'))
        .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
}
function dateSortDesc(a: number, b: number) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}
export function getAllPosts() {
    // @ts-ignore
    return importAll(require.context('../pages/blog/', true, /\.mdx$/))
}