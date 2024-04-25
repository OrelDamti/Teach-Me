import { Flex } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setGlobalLoader } from "../../store/slices/globalLoader";
import config from "../../../services/config";
function TableTeachers() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [faculty, setFaculty] = useState();
  
  useEffect(() => {
    dispatch(setGlobalLoader(true));
    axios({
      url: config.SERVER_API + "faculty",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setFaculty(res?.data);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        dispatch(setGlobalLoader(false));
      });
  }, []);

  return (
    <Container>
      <div className="row">
        <div className="col-10 mx-auto">
          <Table className="table table-hover" responsive="sm">
            <thead className="table-dark">
              <tr>
                <th className="p-3">Roles</th>
                <th className="p-3">Members</th>
              </tr>
            </thead>
            <tbody>
              <>
                {faculty?.DEAN.length > 0 && (
                  <tr>
                    <td className="p-3">Dean</td>
                    <td className="p-3">
                      <Flex vertical>
                        {faculty?.DEAN.map((item, index) => (
                          <p>{item.name}</p>
                        ))}
                      </Flex>
                    </td>
                  </tr>
                )}
              </>
              <>
                {faculty?.VC?.length > 0 && (
                  <tr>
                    <td className="p-3">Vice Chancellor</td>
                    <td className="p-3">
                      <Flex vertical>
                        {faculty?.VC?.map((item, index) => (
                          <p>{item.name}</p>
                        ))}
                      </Flex>
                    </td>
                  </tr>
                )}
              </>
              <>
                {faculty?.DIRECTOR?.length > 0 && (
                  <tr>
                    <td className="p-3">Director</td>
                    <td className="p-3">
                      <Flex vertical>
                        {faculty?.DIRECTOR?.map((item, index) => (
                          <p>{item.name}</p>
                        ))}
                      </Flex>
                    </td>
                  </tr>
                )}
              </>
              <>
                {faculty?.VF?.length > 0 && (
                  <tr>
                    <td className="p-3">Visiting Faculty</td>
                    <td className="p-3">
                      <Flex vertical>
                        {faculty?.VF?.map((item, index) => (
                          <p>{item.name}</p>
                        ))}
                      </Flex>
                    </td>
                  </tr>
                )}
              </>
              <>
                {faculty?.LECTURER?.length > 0 && (
                  <tr>
                    <td className="p-3">Lecturer</td>
                    <td className="p-3">
                      <Flex vertical>
                        {faculty?.LECTURER?.map((item, index) => (
                          <p>{item.name}</p>
                        ))}
                      </Flex>
                    </td>
                  </tr>
                )}
              </>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}

export default TableTeachers;
