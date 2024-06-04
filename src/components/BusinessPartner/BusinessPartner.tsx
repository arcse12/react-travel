import React from "react";
import styles from "./BusinessPartner.module.css"
import { Row, Col, Divider,Typography } from "antd";


import image1 from "../../assets/images/microsoft-80658_640.png"
import image2 from "../../assets/images/facebook-807588_640.png"
import image3 from "../../assets/images/follow-826033_640.png"
import image4 from "../../assets/images/icon-720944_640.png"

const companies = [
    {src: image1, title: "Microsoft"},
    {src: image2, title:"Facebook"},
    {src: image3, title:"Ins"},
    {src: image4, title:"Youtube"}
]

export const BusinessPartner: React.FC = (props) => {
    return(
        <div className={styles.content}>
            <Divider orientation="center">
                <Typography.Title level={3}>合作企业</Typography.Title>
                <Row justify="space-around" align="middle">
                    {companies.map((c, index) => (
                        <Col span={6} key = {"bussiness-partner" + index} >
                            <img
                            alt = "bussiness-partner" 
                            src = {c.src}
                            style={{
                                width:"80%",
                                display:"block",
                                marginLeft:"auto",
                                marginRight:"auto"
                            }}
                            />
                        </Col>
                    ))}
                </Row>
            </Divider>
        </div>
    );
}