import React, { useState } from "react";
import {HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, Img} from './HeroElements'
import { Form,Input, Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import {isvalidPostalCode, validPostalCodeRegex} from '../../utils/regexTest'



function HeroSection() {
    const [Postal, setPostal] = useState('');
    let navigate = useNavigate();

    const handleSubmit = () => {
        if (isvalidPostalCode(Postal)){
            navigate("/book",{state:{id:1,postal:Postal}});
        }
    }

    const handlePostalChange = (event)=>{
        setPostal(event.currentTarget.value);
    }

    return (
        
        <HeroContainer>
            <HeroBg>
                {/* <ImageBg src={Image} /> */}
            </HeroBg>
            <HeroContent>
                <Img src={logo}/>
                <br/>
                <HeroH1>Trustable Cleaning Service in Singapore</HeroH1>
                <HeroP>
                    Safe and Reliable Cleaning Service for all types of housing!
                </HeroP>
            
            
            <Form>
                <Row>
                <Col span={14}>
                    <Form.Item
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
                        style={{'width':138}}
                    >
                        <Input onChange={handlePostalChange} placeholder="Postal Code" value={Postal}/>
                    </Form.Item>
                </Col>
                <Col span={8} style={{'marginLeft':6}}>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            Book Now
                        </Button>
                    </Form.Item>
                </Col>
                </Row>
            </Form>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
