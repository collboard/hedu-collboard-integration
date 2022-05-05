import { AbstractTrayArt, ITrayDynamicDefinition, makeArtModule, makeDynamicTrayModule } from '@collboard/modules-sdk';
import { Authors } from '../../../50-systems/ModuleStore/Authors';
import { internalModules } from '../../../50-systems/ModuleStore/internalModules';
import { HeduItemsGenerator } from './HeduItems';

/**
 * Note: In future this file will we in independent repository as external module.
 */

const trayDefinition: ITrayDynamicDefinition = {
    className: 'HeduModule',
    imageFolder: 'http://localhost:9980/modules/Hedu',
    getItems: HeduItemsGenerator.items.bind(HeduItemsGenerator),
    getToolbarItems: HeduItemsGenerator.toolbar.bind(HeduItemsGenerator),
};

internalModules.declareModule(
    makeDynamicTrayModule({
        manifest: {
            name: 'HeduToolV2',
            title: { en: 'H-edu', cs: 'H-edu' },
            // TODO: Finish
            description: {
                en: 'Whether you use interactive board or just screen and projector, at both, you can easily present the given problem, without the need of gathering the pupils around one table.',
                cs: 'Ať už používáte interaktivní tabuli nebo jen plátno a projektor, na obojím vám půjde snadno prezentovat daný problém, aniž by se museli žáci sbíhat okolo jednoho stolu.',
            },

            categories: ['Math', 'Education'],
            icon: 'http://localhost:9980/icons/hejny.svg',

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

internalModules.declareModule(() => makeArtModule(HeduArt));

class HeduArt extends AbstractTrayArt {
    /**
     * Note: Due to legacy reasons, naming is:
     *  - Version 1: 'Hedu' (not 'HeduDeprecatedArt')
     *  - Version 2: 'HeduV2' (not 'HeduArt')
     */
    public static serializeName = 'HeduV2';
    public static manifest = {
        // Note+TODO: All modules should be in format @collboard/module-name but we started with art modules
        name: '@collboard/hedu-art',
    };

    getDefinition() {
        return trayDefinition;
    }
}
