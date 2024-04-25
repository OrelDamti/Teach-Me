import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
function User({ column, children }) {
  return (
    <Container>
      <div className="row">
        <div className="p-0">
          <Table className="table table-hover" responsive="sm">
            <thead className="table-dark">
              <tr>
                {column.map((item, index) => (
                  <th key={index} className="p-3">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}

export default User;
