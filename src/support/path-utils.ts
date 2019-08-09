/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import {relative} from 'path';

/**
 * Similar to `path.dirname()` except includes trailing slash and for a
 * path `/like/this/` will return `/like/this/` instead of `/like` since the
 * trailing slash indicates `this` is a folder name not a file name.
 * (`path.dirname('/like/this/')` returns `/like`.)
 */
export const dirname = (path: string): string => path.replace(/[^\/]+$/, '');

export const ensureLeadingDot = (path: string): string =>
    (path.startsWith('../') || path.startsWith('./')) ? path : './' + path;

export const ensureTrailingSlash = (path: string): string =>
    path.endsWith('/') ? path : path + '/';

export const forwardSlashesOnlyPlease = (path: string): string =>
    path.replace(/\\/g, '/');

export const getBasePath = (href: string): string =>
    href.replace(/[^\/]+$/, '');

export const noLeadingSlash = (href: string): string => href.replace(/^\//, '');

export const relativePath = (from: string, to: string): string =>
    ensureLeadingDot(relative(
        getBasePath(forwardSlashesOnlyPlease(from)),
        forwardSlashesOnlyPlease(to)));
