//@Price---------------------------------------------------------------------------------
import Nest from "../components/Nest";
import {
  Form,
  Segment,
  Button,
  Grid,
  Message,
  Menu,
  Table,
  Divider,
  Card,
  Tab,
  Container,
  Input,
  Image,
  Checkbox,
  Dropdown,
} from "semantic-ui-react";

const Price = ({ mobilya }) => {
  const a = Nest(mobilya);
  // console.log('--a=', a)

  return (
    <div className="Price">
      <h1>Malzeme kesim listesi</h1>
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
        {a.map((p, index) => (
          <Table.Body key={index}>
            <Table.Row>
              <Table.Cell>{p.name}</Table.Cell>
              <Table.Cell>{p.en}</Table.Cell>
              <Table.Cell>{p.boy}</Table.Cell>
              <Table.Cell>{p.kalinlik}</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};
export default Price;
