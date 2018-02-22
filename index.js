'use strict';
const alfy = require('alfy');

const query = alfy.input;
const lmgtfy = `http://lmgtfy.com/?q=${encodeURIComponent(query)}`;

alfy.output([
	{
		title: `Generate lmgtfy.com url for \"${query}\"`,
		subtitle: `Press ⏎ to copy or ⌘⏎ to open in browser (url: ${lmgtfy})`,
		arg: lmgtfy,
		mods: {
			cmd: {
				subtitle: `Press ⌘⏎ to open url in browser (${lmgtfy})`,
				arg: lmgtfy
			}
		},
		text: {
			copy: lmgtfy,
			largetype: `Let me google ${query} for you: ${lmgtfy}`
		}
	}
]);
