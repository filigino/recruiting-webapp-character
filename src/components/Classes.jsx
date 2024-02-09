import { CLASS_LIST } from "../consts"
import { formatJson, meetsClassReqs } from "../utils/utils"

const Class = ({ classType, valsByAttribute, meetsReqs }) => (
  <div>
    <span
      onClick={() => alert(formatJson(valsByAttribute))}
      style={{ cursor: "pointer", textTransform: meetsReqs ? "uppercase" : "" }}
    >
      {classType}
    </span>
  </div>
)

const Classes = ({ valsByAttribute }) =>
  Object.entries(CLASS_LIST).map(([classType, classValsByAttribute]) => (
    <Class
      key={classType}
      classType={classType}
      valsByAttribute={classValsByAttribute}
      meetsReqs={meetsClassReqs(
        Object.entries(valsByAttribute).reduce(
          (map, [attribute, { val }]) => ({ ...map, [attribute]: val }),
          {}
        ),
        classValsByAttribute
      )}
    />
  ))

export default Classes
