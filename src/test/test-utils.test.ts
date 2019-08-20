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
import test from 'tape';

import {squeeze} from './test-utils';

test('squeeze will inject newlines around most angle-brackets', (t) => {
  t.plan(1);
  t.equal(squeeze('<h1>Hello</h1>'), '<h1>\nHello\n</h1>');
});

test('squeeze will not inject newlines around comparator brackets', (t) => {
  t.plan(1);
  t.equal(squeeze('something <= otherthing'), 'something <= otherthing');
});

test('squeeze will shrink multiple spaces to single spaces', (t) => {
  t.plan(1);
  t.equal(squeeze('<h1> Hello </h1>'), '<h1>\nHello\n</h1>');
});
