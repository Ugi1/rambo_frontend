import {Form, Input, Button, Checkbox} from 'antd';
import './Kayit.css'
import {useState} from "react";
import {initialUserState, User} from "../../util/States";
import {saveUsernameAndPassword} from "../../axios/BackendAPI";


const Kayit = () => {

    const [user, setUser] = useState<User>(initialUserState)

    const onFinish = async (values: any) => {
        await saveUsernameAndPassword(user.username, user.password)
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input onChange={e => setUser((u) => ({...u, username: e.target.value}))}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password onChange={e => setUser((u) => ({...u, password: e.target.value}))}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Kayit;