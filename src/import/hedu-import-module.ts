import { HTMLArt, declareModule, measureHtmlSize, sanitizeHtml, topleftArts } from '@collboard/modules-sdk';
import { repository, version } from '../../package.json';

declareModule({
    manifest: {
        name: '@collboard/hedu-import',
        repository,
        version,
    },
    async setup(systems) {
        const { importSystem, appState, collSpace } = await systems.request('importSystem', 'appState', 'collSpace');

        // TODO: What about installations that need to be reinstalled after board is changed?
        // Note: For lot of systems we are using this makeWhatever helpers. I am trying one system - ImportSystem without make helper to modules just to use this systems methods directly.
        return importSystem.registerFileSupport({
            priority: 10,

            async importFile({ file, willCommitArts, next, isNativeSupporter }) {
                if (!isNativeSupporter) {
                    return next();
                }

                willCommitArts();
                const html = await file.text();

                // TODO: Probbably some prevention of accidentally impoting native html imports
                //     > if(html.includes('collboard:art'))

                // TODO: Html = stripScriptsFromHtml(html);
                // TODO: Html = stripFixedElementsFromHtml(html);
                // TODO: Html = scopeCssInHtml(html);
                // TODO: Probably split html into items

                // TODO: !!! Remove marked tiles

                const sanitizedHtml = sanitizeHtml(html);

                const htmlArt = new HTMLArt(
                    sanitizedHtml,

                    1 / appState.transform.value.scale.x,
                );

                htmlArt.originalSize = await measureHtmlSize(sanitizedHtml);
                htmlArt.locked = true;

                topleftArts({
                    arts: [htmlArt],
                    collSpace,
                });

                return htmlArt;

                // TODO: When inserting a html and selecting after, in first autoselection it is not measured and selectbox is small 10x10 box
                //       after manual reselecting it is working well @roseckyj do you know why?
            },
        });
    },
});

/**
 * TODO: !!! DRY with https://github.com/collboard/collboard/blob/c25db91a44d76e5484a8e514a4a232cebb7e9691/src/00-modules/files/html/HtmlImportModule.ts#L27
 */
