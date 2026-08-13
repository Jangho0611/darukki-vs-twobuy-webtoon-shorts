export const DARUKKI_VS_TWOBUY_FPS = 30;
export const DARUKKI_VS_TWOBUY_SCENE_FRAMES = 90;

export type DarukkiSceneNumber = 1 | 2 | 3 | 4 | 5 | 6;

export type DarukkiSceneSpec = {
  scene: DarukkiSceneNumber;
  movingElements: string[];
  fixedElements: string[];
  requiredReferences: string[];
};

const pending = ['6씬 기획안 확정 후 입력'];

export const DARUKKI_SCENE_SPECS: Record<DarukkiSceneNumber, DarukkiSceneSpec> = {
  1: {scene: 1, movingElements: pending, fixedElements: pending, requiredReferences: pending},
  2: {scene: 2, movingElements: pending, fixedElements: pending, requiredReferences: pending},
  3: {scene: 3, movingElements: pending, fixedElements: pending, requiredReferences: pending},
  4: {scene: 4, movingElements: pending, fixedElements: pending, requiredReferences: pending},
  5: {scene: 5, movingElements: pending, fixedElements: pending, requiredReferences: pending},
  6: {scene: 6, movingElements: pending, fixedElements: pending, requiredReferences: pending},
};

