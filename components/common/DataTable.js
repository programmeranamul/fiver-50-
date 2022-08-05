import ViewAllBtn from './ViewAllBtn';

function DataTable({ tableRow, tableData }) {

  return (
    <>
      <div className="data-table">
        <table>
          <thead>
            <tr>
              {tableRow.map((row) => (
                <th key={row.text}>{row.text}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="color-deep-gray">{data?.shard}</td>
                <td className="blue-color">{data?.hash}</td>
                <td className="blue-color">{data?.from}</td>
                <td className="blue-color">{data?.to}</td>
                <td className="color-deep-gray">{data?.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ViewAllBtn text="VIEW ALL TRANSACTIONS" link="/" />
    </>
  );
}

export default DataTable;
