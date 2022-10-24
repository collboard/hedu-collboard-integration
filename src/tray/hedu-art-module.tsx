import { AbstractTrayArt, declareModule, makeArtModule } from '@collboard/modules-sdk';
import { repository, version } from '../../package.json';
import { trayDefinition } from './trayDefinition';

export class HeduArt extends AbstractTrayArt {
    /**
     * Note: Due to legacy reasons, naming is:
     *  - Version 1: 'Hedu' (not 'HeduDeprecatedArt')
     *  - Version 2: 'HeduV2' (not 'HeduArt')
     */
    public static serializeName = 'HeduV2';
    public static manifest = {
        // Note+TODO: All modules should be in format @collboard/module-name but we started with art modules
        // TODO: [🍗] It should be unde "hedu" scope - "@hedu/art" but there is no deprecatedNames on HeduArt
        name: '@collboard/hedu-art',
        deprecatedNames: 'HeduV2Art',
        version,
        repository,
    };

    getDefinition() {
        return trayDefinition;
    }
}

declareModule(makeArtModule(HeduArt));
