import { Icon } from "@iconify/react";
import MyToolTip from './../../lib/MyToolTip';

function BlockHashNormal({ title, value ,tooltip}) {
  console.log("first", value);
  return (
    <tr>
      <th>
      <MyToolTip>
          <Icon
            icon="ant-design:question-circle-outlined"
            content={tooltip}
          />
        </MyToolTip>   <span>{title}</span>
      </th>
      <td>{value !== "" ? value : <Icon icon="bi:dash-lg" />}</td>
    </tr>
  );
}

export default BlockHashNormal;
