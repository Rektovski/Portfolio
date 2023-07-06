import "../../design/techBoxStyle.css";
import {iknowarray} from "../../helperJavascript Files/knowledgeArray";
import {CardImg, Col, Row} from "react-bootstrap";
import {Card, CardBody, CardFooter} from "@chakra-ui/react";

export default function TechKnowledge() {
    return (
        <>
            <Row style={{maxHeight: 600, overflow: "auto"}} className={'KnowledgeBox bg-dark text-light'}>
                {
                    iknowarray.map((item, id) => (
                        <Col key={id} sm={6} md={4} lg={3} xl={2} xxl={2} className={'g-4'}>
                            <Card align='center' className={'text-light KnowledgeCard'}>
                                <CardBody>
                                    <CardImg className={'rounded'} style={{width: 70, height: 70}} src={item.image}
                                             alt={'tech logos'}/>
                                </CardBody>
                                <CardFooter className={'CardFooterText text-center'}>
                                    {item.name}
                                </CardFooter>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}