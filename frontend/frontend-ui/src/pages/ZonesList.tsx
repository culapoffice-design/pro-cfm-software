import { useList } from "@refinedev/core";
import { Table } from "antd";

export const ZonesList = () => {
  const { data, isLoading } = useList({ resource: "zones" });
  return (
    <Table
      loading={isLoading}
      dataSource={data?.data || []}
      rowKey="id"
      columns={[
        { title: "ID", dataIndex: "id" },
        { title: "Name", dataIndex: "name" },
        { title: "Level", dataIndex: "level" },
        { title: "Building", dataIndex: "building_id" },
      ]}
    />
  );
};
