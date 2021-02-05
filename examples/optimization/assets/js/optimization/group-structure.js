import { hiddenObjects } from './hidden-objects.js';
/**
 * Deprecated
 */
const groupStructure = (structured) => {
  let visible = new THREE.Object3D();
  let hidden = new THREE.Object3D();
  let visibleChildren = [];
  let hiddenChildren = [];
  structured.MainObject.children.forEach((child) => {
    const data = child._Data;
    if (data === undefined) return;
    const ifcClass = data._IfcClass;
    if (hiddenObjects.indexOf(ifcClass) === -1) {
      visibleChildren = [...visibleChildren, child];
    } else {
      hiddenChildren = [...hiddenChildren, child];
    }
  });
  visible.children = visibleChildren;
  hidden.children = hiddenChildren;
  return { visible, hidden };
};

export { groupStructure };
