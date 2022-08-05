function DataTable({ tableRow, tableData }) {
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
            {/* <td>Shard</td>
              <td className={`${tableRow[1]}`}>Hash</td>
              <td>From</td>
              <td>To</td>
              <td>Timestamp</td> */}
            {/* {
                  tableData.map((data, index) =>  {
                      return Object.keys(data).map(el => {
                      
                      return <td>{data[tableRow]}</td>})
                  }) 
              } */}
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data?.shard}</td>
                <td>{data?.hash}</td>
                <td>{data?.from}</td>
                <td>{data?.to}</td>
                <td>{data?.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default DataTable;
  