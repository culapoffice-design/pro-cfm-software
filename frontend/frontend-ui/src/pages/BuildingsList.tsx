import { useList } from "@refinedev/core";
import { Table } from "antd";

export const BuildingsList = () => {
  const { data, isLoading } = useList({ resource: "buildings" });
  return (
    <Table
      loading={isLoading}
      dataSource={data?.data || []}
      rowKey="id"
      columns={[
        { title: "ID", dataIndex: "id" },
        { title: "Name", dataIndex: "name" },
        { title: "Address", dataIndex: "address" },
      ]}
    />
  );
};
