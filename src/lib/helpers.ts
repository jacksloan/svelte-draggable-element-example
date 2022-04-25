import { basePath } from './constants';

export function link(...pathParts: string[]): string {
	return [basePath, ...pathParts].join('/');
}
