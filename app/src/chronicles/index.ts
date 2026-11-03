import type { ChronicleDef } from '../engine/types';
import { originalChronicle } from './original';

/**
 * Every chronicle the app can run. To add the reworked version, create a new
 * folder beside `original/` with its own tables, plan and summary, and list it
 * here. The app shows a chooser automatically once there is more than one.
 */
export const CHRONICLES: ChronicleDef[] = [originalChronicle];

export const getChronicle = (id: string) => CHRONICLES.find((c) => c.id === id) ?? CHRONICLES[0];
