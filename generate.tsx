import * as fs from 'fs';

import React from 'react'
// We could also use `renderToStaticNodeStream` to use streams.
import {renderToStaticMarkup} from 'react-dom/server'

import {Example} from './vxExample'

const html = renderToStaticMarkup(<Example width={800} height={600} />)

fs.writeFileSync('test.svg', html)