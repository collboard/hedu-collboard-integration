import { declareModule, HTMLArt, measureHtmlSize, sanitizeHtml, topleftArts } from '@collboard/modules-sdk';

declareModule({
    manifest: {
        name: '@collboard/hedu-import',
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

                const sanitizedHtml = sanitizeHtml(html);

                const htmlArt = new HTMLArt(
                    sanitizedHtml,
                    /*
                        Note: Just for backup:

                        spaceTrim(
                            (block) => `
                              <div
                                style="transform: scale(${1 / appState.transform.value.scale.x}); transform-origin: 0% 0%;"
                              >
                                ${block(html)}
                              </div>
                          `,
                        ),*/
                    1 / appState.transform.value.scale.x,
                );

                htmlArt.originalSize = await measureHtmlSize(sanitizedHtml);

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
