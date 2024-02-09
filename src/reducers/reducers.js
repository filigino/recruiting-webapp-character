import { ATTRIBUTE_MAX, SKILL_MIN, SKILL_POINTS_BASE } from "../consts"
import { calculateModifier } from "../utils/utils"

export const attributeReducer = (state, { type, attribute, skillTotal }) => {
  let nextVal = 0
  switch (type) {
    case "INCREMENT":
      if (Object.values(state).reduce(sumReducer, 0) === ATTRIBUTE_MAX) {
        return state
      }

      nextVal = state[attribute].val + 1
      return {
        ...state,
        [attribute]: {
          ...state[attribute],
          val: nextVal,
          modifierVal: calculateModifier(nextVal),
        },
      }

    case "DECREMENT":
      nextVal = state[attribute].val - 1

      if (
        attribute === "Intelligence" &&
        skillTotal >
          SKILL_POINTS_BASE + Math.max(0, 4 * calculateModifier(nextVal))
      ) {
        alert("Must lower skill point spend first")
        return state
      }

      return {
        ...state,
        [attribute]: {
          ...state[attribute],
          val: nextVal,
          modifierVal: calculateModifier(nextVal),
        },
      }
    default:
      return state
  }
}

export const skillReducer = (
  state,
  { type, skill, intelligenceModifierVal }
) => {
  switch (type) {
    case "INCREMENT":
      const extraPoints = Math.max(0, 4 * intelligenceModifierVal)
      if (
        Object.values(state).reduce(sumReducer, 0) ===
        SKILL_POINTS_BASE + extraPoints
      ) {
        return state
      }

      return { ...state, [skill]: state[skill] + 1 }

    case "DECREMENT":
      if (state[skill] === SKILL_MIN) {
        return state
      }
      return { ...state, [skill]: state[skill] - 1 }
    default:
      return state
  }
}

export const sumReducer = (sum, val) => sum + val
