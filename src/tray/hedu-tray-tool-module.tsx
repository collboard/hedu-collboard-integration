import { Authors, declareModule, makeDynamicTrayModule } from '@collboard/modules-sdk';
import hejny from '../../assets/icons/hejny.svg';
import { repository, version } from '../../package.json';
import { HeduArt } from './hedu-art-module';
import { trayDefinition } from './trayDefinition';

declareModule(
    makeDynamicTrayModule({
        manifest: {
            // TODO: [🍗] It should be unde "hedu" scope
            name: '@collboard/hedu-tray-tool',
            version,
            repository,
            deprecatedNames: 'HeduToolV2',
            title: { en: 'H-edu', cs: 'H-edu' },
            // TODO: Finish
            description: {
                en: 'Whether you use interactive board or just screen and projector, at both, you can easily present the given problem, without the need of gathering the pupils around one table.',
                cs: 'Ať už používáte interaktivní tabuli nebo jen plátno a projektor, na obojím vám půjde snadno prezentovat daný problém, aniž by se museli žáci sbíhat okolo jednoho stolu.',
            },

            categories: ['Math', 'Education'],
            icon: hejny,

            // TODO: [🎻] Use authors as contributors from package json
            author: Authors.hedu,
            contributors: [Authors.rosecky],
        },
        icon: {
            order: 60,
            icon: 'hejny',
            boardCursor: 'default',
        },
        trayDefinition,
        newArtMaker({ itemId, boardPosition }) {
            return new HeduArt(itemId, boardPosition);
        },
    }),
);
