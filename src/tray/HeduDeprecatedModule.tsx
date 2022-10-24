import { Abstract2dArt, Authors, declareModule, makeArtModule } from '@collboard/modules-sdk';
import React from 'react';
import { Vector } from 'xyzt';
import hejny from '../../assets/icons/hejny.svg';
import { repository, version } from '../../package.json';
import { makeDepracatedWarningModule } from './makeDepracatedWarningModule';

declareModule(
    makeDepracatedWarningModule({
        manifest: {
            // TODO: [🍗] It should be unde "hedu" scope
            name: '@collboard/hedu-tray-tool-deprecated',
            version,
            repository,
            deprecatedNames: 'HeduTool',
            title: { en: 'H-edu', cs: 'H-edu' },
            description: {
                en: 'This module is deprecated, please deactivate it and use the new one...',
                cs: 'Tento modul je zastaralý, odinstalujte ho a použijte nový, prosím...',
            },
            flags: { isDeprecated: true }, // ['deprecated']
            categories: ['Math', 'Education'],
            icon: hejny,

            // TODO: [🎻] Use authors as contributors from package json
            author: Authors.hedu,
            contributors: [Authors.rosecky],
        },
    }),
);

/**
 * @deprecated
 */
class HeduDeprecatedArt extends Abstract2dArt {
    /**
     * Note: Due to legacy reasons, naming is:
     *  - Version 1: 'Hedu' (not 'HeduDeprecatedArt')
     *  - Version 2: 'HeduV2' (not 'HeduArt')
     */
    public static serializeName = 'Hedu';
    public static manifest = {
        // Note+TODO: All modules should be in format @collboard/module-name but we started with art modules
        name: '@collboard/hedu-art-deprecated',
        version,
        // TODO: Deprecation should be made with versioning
    };

    acceptedAttributes = [];

    topLeft = Vector.zero();
    bottomRight = Vector.zero();

    render() {
        return <></>;
    }
}

// TODO: !! Is this working?
// TODO: !! Migrations
//       > declareModule(() => makeArtModule({ name: 'Hedu', class: HeduDeprecatedArt }));
declareModule(makeArtModule(HeduDeprecatedArt));
