function BlockDataTable({ tableRow, tableData }) {
    return (
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
                <td>{data?.shard}</td>
                <td>{data?.height}</td>
                <td>{data?.transactions}</td>
                <td>{data?.imestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BlockDataTable;
  