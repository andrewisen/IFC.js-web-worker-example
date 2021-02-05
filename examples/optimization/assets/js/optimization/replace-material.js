/**
 * Deprecated
 */
const replaceMaterial = (mainObject) => {
  for (let i = 0; i < mainObject.children.length; i++) {
    let child = mainObject.children[i];
    const type = child.type;
    let material;
    if (type === 'Line') {
      material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 1
      });
    } else if (type === 'Mesh') {
      material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });
    } else {
      continue;
    }
    mainObject.children[i].material = material;
  }
  return mainObject;
};

export { replaceMaterial };
