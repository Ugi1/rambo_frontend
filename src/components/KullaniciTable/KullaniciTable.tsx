import React, {useState} from "react";
import {Table, Button} from 'antd';
import './KullaniciTable.css';
import {User} from "../../util/States";
import {getAllUser} from "../../axios/BackendAPI";

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
    },
    {
        title: 'Password',
        dataIndex: 'password',
    }
];

const KullaniciTable = () => {
    const [users, setUsers] = useState<User[]>([])

    const [selectedRowState, setSelectedRowState] = useState({
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    })

    const reloadUserList = () => {
        setSelectedRowState(s => ({...s, loading: true}));

        getAllUser().then(response => {

            if (response.status === 200) {
                console.log('reload success')
                const userList: User[] = response.data
                setUsers(userList)
            } else {
                console.error('reload failed')
            }


            setTimeout(() => {
                setSelectedRowState({
                    selectedRowKeys: [],
                    loading: false,
                });
            }, 1000);
        })

    };
    const {loading, selectedRowKeys} = selectedRowState;

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div>
            <div style={{marginBottom: 16}}>
                <Button type="primary" onClick={reloadUserList} loading={loading}>
                    Reload
                </Button>
                <span style={{marginLeft: 8}}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table columns={columns} dataSource={users}/>
        </div>
    );

}

export default KullaniciTable;