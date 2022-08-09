import { Icon } from "@iconify/react";

function BlockHashNormal({title, value}) {
  console.log("first", value)
  return (
    <tr
    >
      <th>
        <Icon icon="ant-design:question-circle-outlined" /> <span>{title}</span>
      </th>
      <td>{value !==""  ? value : <Icon icon="bi:dash-lg" />}</td>
    </tr>
  );
}

export default BlockHashNormal;
