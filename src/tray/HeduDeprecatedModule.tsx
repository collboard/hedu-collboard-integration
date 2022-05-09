import { Abstract2dArt, Authors, declareModule, makeArtModule } from '@collboard/modules-sdk';
import React from 'react';
import { Vector } from 'xyzt';
import hejny from '../../assets/icons/hejny.svg';
import { makeDepracatedWarningModule } from './makeDepracatedWarningModule';
import { version } from '../../package.json';

/**
 * Note: In future this file will we in independent repository as external module.
 */

declareModule(
    makeDepracatedWarningModule({
        manifest: {
            name: '@hedu/tray-tool',
            version,
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
        version
        // TODO: Deprecation should be made with versioning
    };

    acceptedAttributes = [];

    topLeftCorner = Vector.zero();
    bottomRightCorner = Vector.zero();

    render() {
        return <></>;
    }
}

// TODO: !! Is this working?
// TODO: !! Migrations
//       > declareModule(() => makeArtModule({ name: 'Hedu', class: HeduDeprecatedArt }));
declareModule(makeArtModule(HeduDeprecatedArt));
