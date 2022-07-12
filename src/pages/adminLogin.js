import React, { useState } from "react";
import { Button, Typography, Alert, Col,Row, Form,Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import API from '../utils/baseURLs';

const { Title } = Typography;


function AdminLogin() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [InvalidLogin, setInvalidLogin] = useState(false);

    let navigate = useNavigate();

    const openNotificationWithIcon = (type) => {
        notification[type]({
          message: 'Something went wrong!',
          description:
            'fail to connect to backend!',
        });
    };

    const handleSubmit = ()=>{
        let data = {email:Email, password: Password};
        API.post('api/admin/login',data).then(res=>{
            const success = res.data.success;
            if (success){
                navigate("/admin88");
            }else {
                setInvalidLogin(true)
            }
        }).catch(()=>{
            openNotificationWithIcon('warning')
        })
    }


    const handleEmailChange = (event) =>{
        setEmail(event.currentTarget.value)
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.currentTarget.value)
    }

    return (
        <div>
            <Row style={{marginTop:'20px', paddingLeft:30}}>
            <Col span={10}>
                <Title level={2}>Login</Title>
                <Form layout={'vertical'} size={'large'} >
                    <Form.Item
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            }
                        ]}
                    >
                        <Input onChange={handleEmailChange} value={Email}/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            }
                        ]}
                    >
                        <Input.Password onChange={handlePasswordChange} value={Password}/>
                    </Form.Item>
                    {InvalidLogin && <Alert
                    message=""
                    description="Invalid Email or Password"
                    type="error"
                    showIcon/>}
                    <br></br>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
     
            </Row>
        </div>
    )
}

export default AdminLogin
