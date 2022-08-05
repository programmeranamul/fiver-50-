
import ViewAllBtn from './../common/ViewAllBtn';

function BlockDataTable({ tableRow, tableData }) {
  return (
    <>
    <div className="data-table">
      <table>
        <thead>
          <tr>
            {tableRow.map((row) => (
              <th className="color-deep-gray" key={row.text}>
                {row.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="blue-color">{data?.shard}</td>
              <td className="blue-color">{data?.height}</td>
              <td className="color-deep-gray">{data?.transactions}</td>
              <td className="color-deep-gray">{data?.imestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   <ViewAllBtn text="VIEW ALL TRANSACTIONS" link="/"/>
    </>
  );
}

export default BlockDataTable;
