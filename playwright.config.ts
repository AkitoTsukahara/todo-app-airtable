import type { PlaywrightTestConfig } from '@playwright/test';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)

const config: PlaywrightTestConfig = {
	reporter: 'html',
	expect: {
		timeout: 20000,
		toHaveScreenshot: {
			maxDiffPixels: 100,
			maxDiffPixelRatio: 0.8,
			threshold: 0.8
		}
	},
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests'
};

export default config;
