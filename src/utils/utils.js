export const calculateModifier = (attributeVal) =>
  Math.floor((attributeVal - 10) / 2)

export const formatJson = (obj) => JSON.stringify(obj, null, 2)

export const meetsClassReqs = (charAttributes, classAttributes) =>
  Object.entries(classAttributes).every(
    ([attribute, val]) =>
      attribute in charAttributes && val <= charAttributes[attribute]
  )
