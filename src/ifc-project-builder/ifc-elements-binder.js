function bindElements(finder, type, relating, related, property) {
  const relations = finder.findByType(type);
  if (Object.keys(relations).length === 0) return;
  const _isArray = isArray(Object.keys(relations)[0]);
  Object.values(relations).forEach((relation) => {
    return _isArray
      ? bindMultiple(relation, relating, related, property)
      : bindSingle(relation, relating, related, property);
  });
}

function bindSingle(relation, relating, related, property) {
  if (!relation[relating][property]) relation[relating][property] = [];
  bind(relation[relating][property], relation, related);
}

function bindMultiple(relation, relating, related, property) {
  relation[relating].forEach((e) => {
    if (!e[property]) e[property] = [];
    bind(e[property], relation, related);
  });
}

function bind(property, relation, related) {
  return isArray(relation[related])
    ? property.push(...relation[related])
    : property.push(relation[related]);
}

function isArray(item) {
  return item.constructor === Array;
}

export { bindElements };
