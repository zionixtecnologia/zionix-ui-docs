import { Text, Tab, Hr, Table, Badge } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconTable } from "@tabler/icons-react";

export const TableContainer = () => {
  const data = [
    {
      id: "0001",
      details: "Detail field",
      status: "Delivered",
      date: "01/01/2024",
      total: "R$ 4,96",
      img: "https://avatars.githubusercontent.com/u/18231436?v=4",
    },
    {
      id: "0002",
      details: "Detail field",
      status: "Delivered",
      date: "01/01/2024",
      total: "R$ 4,96",
      img: "https://avatars.githubusercontent.com/u/6181797?v=4",
    },
    {
      id: "0003",
      details: "Detail field",
      status: "Delivered",
      date: "01/01/2024",
      total: "R$ 74,96",
      img: "https://avatars.githubusercontent.com/u/140957791?v=4",
    },
    {
      id: "0004",
      details: "Detail field",
      status: "Delivered",
      date: "01/01/2024",
      total: "R$ 127,54",
      img: "https://avatars.githubusercontent.com/u/69631?v=4",
    },
  ];
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconTable />
        Table{" "}
        <Badge green bordered>
          New v0.0.77
        </Badge>
      </Text>

      <Tab.Root>
        <Tab.Tabs transparentCards>
          <Tab.Item id="design" active>
            <Icon.Eye /> Design
          </Tab.Item>
          <Tab.Item id="code">
            <Icon.Code />
            Code
          </Tab.Item>
        </Tab.Tabs>

        <Tab.Content idItem="design">
          <Table.Root>
            <Table.Head
              labels={["No.", "User", "Details", "Status", "Date", "Total"]}
            />
            <Table.Body
              data={data}
              fields={[
                { name: "id", color: "var(--primary-color)", bold: true },
                { name: "img", avatar: true },
                { name: "details" },
                { name: "status", badge: { color: 'blue', bordered: true } },
                { name: "date" },
                { name: "total", align: "right", color: "#475569" },
              ]}
            />
          </Table.Root>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
 const data = [
  {
    id: "0001",
    details: "Detail field",
    status: "Delivered",
    date: "01/01/2024",
    total: "R$ 4,96",
    img: "https://avatars.githubusercontent.com/u/18231436?v=4",
  },
  {
    id: "0002",
    details: "Detail field",
    status: "Delivered",
    date: "01/01/2024",
    total: "R$ 4,96",
    img: "https://avatars.githubusercontent.com/u/6181797?v=4",
  },
  {
    id: "0003",
    details: "Detail field",
    status: "Delivered",
    date: "01/01/2024",
    total: "R$ 74,96",
    img: "https://avatars.githubusercontent.com/u/140957791?v=4",
  },
  {
    id: "0004",
    details: "Detail field",
    status: "Delivered",
    date: "01/01/2024",
    total: "R$ 127,54",
    img: "https://avatars.githubusercontent.com/u/69631?v=4",
  },
  ];


/* Mode 1 */
<Table.Root>
    <Table.Head labels={["No.", "Details", "Status", "Date", "Total"]} />
    <Table.Body
    data={data}
    fields={["id", "details", "status", "date", "total"]}
    />
</Table.Root>;

/* Mode 2 */
<Table.Root>
  <Table.Head labels={["No.","User", "Details", "Status", "Date", "Total"]} />
  <Table.Body
    data={data}
    fields={[
      { name: "id", color: "var(--primary-color)", bold: true },
      { name: "img", avatar: true },
      { name: "details" },
      { name: "status", badge: { color: "blue", bordered: true } },
      { name: "date" },
      { name: "total", align: "right", color: "#475569" },
    ]}
  />
</Table.Root>;

/* Mode 3 */
<Table.Root>
  <Table.Head labels={["No.", "Details", "Status", "Date", "Total"]} />
  <Table.Body>
    <Table.Row color="light">
      <Table.Data>0001</Table.Data>
      <Table.Data>My details</Table.Data>
      <Table.Data>Delivered</Table.Data>
      <Table.Data>01/01/2024</Table.Data>
      <Table.Data align="right">$ 7.99</Table.Data>
    </Table.Row>

    <Table.Row color="dark">
      <Table.Data>0001</Table.Data>
      <Table.Data>My details</Table.Data>
      <Table.Data>Delivered</Table.Data>
      <Table.Data>01/01/2024</Table.Data>
      <Table.Data align="right">$ 7.99</Table.Data>
    </Table.Row>
  </Table.Body>
</Table.Root>;
            `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
