import { useList } from "@refinedev/core";
import { Table } from "antd";

export const AssetsList = () => {
  const { data, isLoading } = useList({ resource: "assets" });
  return (
    <Table
      loading={isLoading}
      dataSource={data?.data || []}
      rowKey="id"
      columns={[
        { title: "ID", dataIndex: "id" },
        { title: "Name", dataIndex: "name" },
        { title: "Trade", dataIndex: "trade" },
        { title: "Manufacturer", dataIndex: "manufacturer" },
        { title: "Model", dataIndex: "model" },
        { title: "Serial", dataIndex: "serial" },
        { title: "Zone", dataIndex: "zone_id" },
      ]}
    />
  );
};
