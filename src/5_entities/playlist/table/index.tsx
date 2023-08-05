import React from 'react';
import {Table, Tag} from "antd";
import {ColumnsType} from "antd/lib/table";

interface DataType {
    key: string;
    number: number;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: '#',
        dataIndex: 'number',
        key: 'number',
        render: (text) => <div>{text}</div>,
    },
    {
        title: 'Title',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Album',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        number: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        number: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        number: 3,
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const PlaylistTable = () => {
    return (
        <Table columns={columns} dataSource={data} />
    );
};

export default PlaylistTable;