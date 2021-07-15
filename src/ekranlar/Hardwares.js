//@Hardwares---------------------------------------------------------------------------------
import { useState } from "react";
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
import { DataHardware } from "../components/DataHardware";

const Hardwares = () => {
  const initialState = {
    hinge: false,
    hinge_mount: false,
    kd_hardware: false,
    molding: false,
    pocket_screw: false,
    pull: false,
    slide: false,
    wood_component: false,
    user_defined_hardware: false,
  };
  const [menu, setmenu] = useState(initialState);

  return (
    <div>
      <Button.Group widths="7">
        <Button
          onClick={() => {
            setmenu({
              hinge: true,
              hinge_mount: false,
              kd_hardware: false,
              molding: false,
              pocket_screw: false,
              pull: false,
              slide: false,
              wood_component: false,
              user_defined_hardware: false,
            });
          }}
        >
          Menteşe
        </Button>
        <Button
          onClick={() => {
            setmenu({
              hinge: false,
              hinge_mount: true,
              kd_hardware: false,
              molding: false,
              pocket_screw: false,
              pull: false,
              slide: false,
              wood_component: false,
              user_defined_hardware: false,
            });
          }}
        >
          M Papuc
        </Button>
        <Button
          onClick={() => {
            setmenu({
              hinge: false,
              hinge_mount: false,
              kd_hardware: true,
              molding: false,
              pocket_screw: false,
              pull: false,
              slide: false,
              wood_component: false,
              user_defined_hardware: false,
            });
          }}
        >
          Ayak
        </Button>
        <Button>molding</Button>
        <Button>pocket_screw</Button>
        <Button>kulp</Button>
        <Button>ray</Button>
      </Button.Group>
      <Divider />
      <Button.Group widths="3">
        <Button>woodComponenets</Button>
        <Button>Userdefinet hardware</Button>
        <Button>Support</Button>
      </Button.Group>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="adı">İmalatçı</Table.HeaderCell>
            <Table.HeaderCell className="en">En</Table.HeaderCell>
            <Table.HeaderCell className="boy">Boy</Table.HeaderCell>
            <Table.HeaderCell className="kalinlik">Kalınlık</Table.HeaderCell>
            <Table.HeaderCell>Malzeme</Table.HeaderCell>
            <Table.HeaderCell>Fiyat</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {menu.hinge &&
          DataHardware.hinge.map((p, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{p.manufacturer}</Table.Cell>
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
export default Hardwares;
