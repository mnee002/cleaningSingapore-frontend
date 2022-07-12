import React, { useEffect, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import { DatePicker, Form,Input, Button, TimePicker, Radio, Row, Col, InputNumber, Select, notification} from 'antd';
import {validPostalCodeRegex} from '../utils/regexTest'
import styled from 'styled-components'
import API from "../utils/baseURLs"

const FormBody = styled.div`
    justify-content:center;
    display: flex;
    @media screen and (max-width: 760px){
        margin-left: 14px;
    }

    @media screen and (max-width: 480px){
        margin-left: 14px;
    }
`;

function Book() {
    const location = useLocation();
    let navigate = useNavigate();

    const [Postal, setPostal] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [AdditionalComment, setAdditionalComment] = useState('');
    const [Date, setDate] = useState('')
    const [Time, setTime] = useState('')
    const [Equip, setEquip] = useState(true)
    const [NumRooms, setNumRooms] = useState(1)
    const [NumBathRooms, setNumBathRooms] = useState(1)

    const houseTypes = [
        {
          value: 'HDB',
          label: 'HDB',
        },
        {
            value: 'Condo/Private Apartments',
            label: 'Condo/Private Apartments',
        },
        {
            value: 'Landed & Others',
            label: 'Landed & Others',
        }
        
    ]

    useEffect(()=>{
        let {postal} = location.state
        setPostal(postal)
    },[location.state])

    const openNotificationWithIcon = (type) => {
        notification[type]({
          message: 'Something went wrong!',
          description:
            'Please try to book again later, or contact us via WhatsApp directly!',
        });
    };

    const handlePostalChange = (event)=>{
        setPostal(event.currentTarget.value);
    }

    const handleNameChange = (event)=>{
        setName(event.currentTarget.value);
    }

    const handleEmailChange = (event)=>{
        setEmail(event.currentTarget.value);
    }

    const handlePhoneChange = (event)=>{
        setPhone(event.currentTarget.value);
    }

    const onDateChange =(_, dateString) => {
        setDate(dateString)
      };

    const onTimeChange = (_, timeString) => {
        setTime(timeString)
    };

    const onEquipmentChange = (event)=>{
        setEquip(event.target.value);
    }

    const onNumRoomsChange = (value)=>{
        setNumRooms(value);
    }

    const onNumBathRoomsChange = (value)=>{
        setNumBathRooms(value);
    }

    const handleCommentChange = (event)=>{
        setAdditionalComment(event.currentTarget.value)
    }

    const handleSubmit = ()=>{
        let data = {
            postal: Postal,
            name: Name,
            email: Email,
            phone: Phone,
            comment: AdditionalComment,
            date: Date,
            time: Time,
            needEquip: Equip,
            numRooms: NumRooms,
            numBathRooms: NumBathRooms
        }
    
        API.post('api/book/create',data).then(res=>{
            const success = res.data.success;
            if (success){
                navigate("/success");
                 
            }else {
                openNotificationWithIcon('warning')
            }
        }).catch(()=>{
            openNotificationWithIcon('warning')
        })
    }

    return (
        <FormBody>
           <Form layout={'vertical'} size={'large'} onFinish={handleSubmit}>
                <Form.Item
                        label="Postal code"
                        name="postal"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your postal code!',
                            },
                            {
                                pattern: new RegExp(validPostalCodeRegex),
                                message: "Please enter valid Singapore postal code"
                              }
                        ]}
                        initialValue={location.state.postal}
                    >
                        <Input onChange={handlePostalChange} placeholder="Postal Code" value={Postal}/>
                </Form.Item>
                <Form.Item
                    label = "Cleaning Date"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the cleaning date',
                        },
                    ]}
                >
                    <DatePicker onChange={onDateChange} />
                </Form.Item>
                <h3>Tell us about your house</h3>
                <Row>
                    <Col>
                        <h4>House Type: </h4>
                        <Form.Item
                            name="houseType"
                            initialValue="HDB"
                        >
                        <Select style={{ width: 200 }} options={houseTypes} />
                        </Form.Item>
                    </Col>
                    <Col style={{'marginLeft':12}}>
                        <h4>Number of Rooms: </h4>
                        <Form.Item
                            name="numRooms"
                            initialValue={1}
                        >
                            <InputNumber min={1} max={10} onChange={onNumRoomsChange}/>
                        </Form.Item>
                    </Col>
                    <Col style={{'marginLeft':12}}>
                        <h4 >Number of Bath Rooms: </h4>
                        <Form.Item
                            name="numBathRooms"
                            initialValue={1}
                        >
                            <InputNumber min={1} max={10} onChange={onNumBathRoomsChange}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    label = "Do you us to provide equipments and chemicals? (additional $20)"
                    name="radio"
                    initialValue={true}
                >
                    <Radio.Group onChange={onEquipmentChange} value={Equip}>
                        <Radio value={true}>Yes</Radio>
                        <Radio value={false}>No</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label = "Preferred Start Time"
                    name="time"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the preferred start time',
                        },
                    ]}
                >
                    <TimePicker use12Hours format="h:mm a" onChange={onTimeChange} />
                </Form.Item>
                <Form.Item
                        label="Additional Comments/Requests"
                        name="comment"
                    >
                        <Input onChange={handleCommentChange} value={AdditionalComment}/>
                </Form.Item>
                <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input onChange={handleNameChange} placeholder="Name" value={Name}/>
                </Form.Item>
                <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {type: 'email'},
                        ]}
                    >
                        <Input onChange={handleEmailChange} placeholder="Email" value={Email}/>
                </Form.Item>
                <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your contact number!',
                            },
                        ]}
                    >
                        <Input onChange={handlePhoneChange} placeholder="Phone number" value={Phone}/>
                </Form.Item>
                <Form.Item >
                    <Button block type="primary" htmlType="submit">
                        Book
                    </Button>
                </Form.Item>
            </Form>
        </FormBody>
    )
}

export default Book