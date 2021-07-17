//@Materials------------------------------------------------------------------------------
import { Table } from "semantic-ui-react";
import { DataMaterials } from "../components/DataMaterials";

const Materials = () => {
  //console.log('DataMaterials=', DataMaterials)
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="adı">Adı</Table.HeaderCell>
            <Table.HeaderCell className="en">En</Table.HeaderCell>
            <Table.HeaderCell className="boy">Boy</Table.HeaderCell>
            <Table.HeaderCell className="kalinlik">Kalınlık</Table.HeaderCell>
            <Table.HeaderCell>Malzeme</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {DataMaterials.map((p, index) => (
          <Table.Body key={index}>
            <Table.Row>
              <Table.Cell>{p.name}</Table.Cell>
              <Table.Cell>{p.width}</Table.Cell>
              <Table.Cell>{p.length}</Table.Cell>
              <Table.Cell>{p.thickness}</Table.Cell>
              <Table.Cell>{p.stock_type}</Table.Cell>
              <Table.Cell>{p.cost_per_sheet}</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};
export default Materials;
