import React, { useEffect, useState } from "react"
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import { Row, Col, Card } from "antd"
import logo from "./form.jpg"
import FormEditPage from "../form/form"

const { Meta } = Card
const BACK_END_URL = "http://localhost:9000/api/forms"

const Forms = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [forms, setForms] = useState([])

    const { path , url } = useRouteMatch()

    async function getForms() {
        const fetchData = await fetch(BACK_END_URL)
        fetchData.json().then(
            (res) => {
                const tempForms = []
                setIsLoaded(true)
                res.forEach((temp) => {
                    tempForms[temp.form.id] = {
                        title: temp.form.title,
                        id: temp.form.id,
                    }
                })
                setForms(tempForms)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }

    useEffect(() => {
        getForms()
    }, [])

    const desplayForms = (form, index) => {
        console.log("form")
        return (
            <Col style={{ paddingBottom: "16px" }}>
                <Link to={{ pathname: "/forms/" + form.id }}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="form" src={logo} />}
                    >
                        <Meta title={form.title} description={`form id is : ${form.id}`}/>
                    </Card>
                </Link>
            </Col>
        )
    }

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <Switch>
                <Route exact path={path}>
                    <div>
                        <h2>Forms</h2>
                        <nav>
                            <ul>
                                <Row gutter={16}>
                                    {forms.map((form, index) =>
                                        desplayForms(form, index)
                                    )}
                                </Row>
                            </ul>
                        </nav>
                    </div>
                </Route>
                <Route path={`${url}/:id`}>
                    <FormEditPage />
                </Route>
            </Switch>
        )
    }
}

export default Forms
