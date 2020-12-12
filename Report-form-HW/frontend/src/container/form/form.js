import React, { useCallback, useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { Formik } from "formik"
import { Input, Select, Button, Typography, Col, Row, DatePicker } from "antd"

import * as Yup from "yup"
import "antd/dist/antd.css"
import ModalMaps from "../../component/map"
import ModalOptionMaps from "../../component/maps"

const { Title, Text } = Typography
const { Option } = Select

const initialValues = {}
const validateSch = {}

const FormEditPage = () => {
    const [showModal, setShowModal] = useState({})
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [formData, setFormData] = useState({ fields: [] })
    const [isSending, setIsSending] = useState(true)

    const { id } = useParams()
    const BACK_END_URL = useRef(`http://localhost:9000/api/forms/${id}`)

    const sendFormData = useCallback(
        (values) => {
            console.log("send value")
            console.log(values)
            fetch(BACK_END_URL.current, {
                body: JSON.stringify(values),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    var isSendingTmp = "true"
                    if (res.status === "200") {
                        console.log(res)
                        isSendingTmp = "false"
                    }
                    setIsSending(isSendingTmp)
                })
        },
        [isSending]
    )

    async function getFormById() {
        const res = await fetch(BACK_END_URL.current, {
            method: "GET",
        })
        res.json().then(
            (result) => {
                const tmpShowModal = {}
                setIsLoaded(true)
                result.fields.forEach((field) => {
                    if (field.type === "Date") {
                        initialValues[field.name] = null
                    } else if (field.type === "Location") {
                        initialValues[field.name] = { lat: Number, lng: Number }
                        tmpShowModal[field.name] = false
                    } else {
                        initialValues[field.name] = ""
                    }
                })
                setIsSending("true")
                setShowModal(tmpShowModal)
                setFormData(result)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }

    const openModal = useCallback(
        (fieldName) => {
            const tmpShowModal = { ...showModal }
            tmpShowModal[fieldName] = true
            setShowModal((prevShowModal) => ({ ...prevShowModal, ...tmpShowModal }))
        },
        [showModal]
    )

    const closeModal = useCallback(
        (fieldName) => {
            const tmpShowModal = { ...showModal }
            tmpShowModal[fieldName] = false
            setShowModal((prevShowModal) => ({ ...prevShowModal, ...tmpShowModal }))
        },
        [showModal]
    )

    useEffect(() => {
        getFormById()
    }, [])

    const initVallidation = () => {
        formData.fields.forEach((field) => {
            switch (field.type) {
                case "Text":
                    if (field.required) {
                        validateSch[field.name] = Yup.string()
                            .required("فیلد اجباری است")
                            .typeError("متن معتبر وارد کنید")
                    } else {
                        validateSch[field.name] = Yup.string().typeError(
                            "متن معتبر وارد کنید"
                        )
                    }
                    break
                case "Number":
                    if (field.required) {
                        validateSch[field.name] = Yup.number()
                            .required("فیلد اجباری است")
                            .typeError("عدد معتبر وارد کنید")
                    } else {
                        validateSch[field.name] = Yup.number().typeError(
                            "عدد معتبر وارد کنید"
                        )
                    }
                    break
                case "Date":
                    if (field.required) {
                        validateSch[field.name] = Yup.object()
                            .required("فیلد اجباری است")
                            .typeError("تاریخ معتبر وارد کنید")
                            .nullable()
                    } else {
                        validateSch[field.name] = Yup.object()
                            .typeError("تاریخ معتبر وارد کنید")
                            .nullable()
                    }
                    break
                case "Location":
                    if (field.required) {
                        validateSch[field.name] = Yup.object()
                            .required("فیلد اجباری است")
                            .typeError("موقعیت معتبر وارد کنید")
                    } else {
                        validateSch[field.name] = Yup.object().typeError(
                            "موقعیت معتبر وارد کنید"
                        )
                    }
                    break
                default:
            }
        })
        return Yup.object().shape(validateSch)
    }

    const textMemoizedCallback = useCallback(
        (field, { errors, handleChange, handleBlur, values, setFieldValue }) => {
            if (field.options) {
                return (
                    <Row type="flex" justify="start">
                        <Col span={8}>
                            <Text strong style={{ color: "#000080" }}>
                                {field.name} :
                            </Text>
                        </Col>
                        <Col span={8}>
                            <Select
                                key={field.name}
                                name={field.name}
                                placeholder="options"
                                onBlur={handleBlur}
                                value={values[field.name]}
                                onChange={(value) => {
                                    setFieldValue(field.name, value)
                                }}
                                style={{ marginBottom: 12, width: 200 }}
                            >
                                {field.options.map((item) => (
                                    <Option key={item.value} value={item.value}>
                                        {item.label}
                                    </Option>
                                ))}
                            </Select>
                        </Col>
                        <Col span={8}>
                            <Text type="danger">{errors[field.name]}</Text>
                        </Col>
                    </Row>
                )
            } else
                return (
                    <Row type="flex" justify="start">
                        <Col span={8}>
                            <Text strong style={{ color: "#000080" }}>
                                {field.name} :
                            </Text>
                        </Col>
                        <Col span={8}>
                            <Input
                                key={field.name}
                                name={field.name}
                                placeholder={field.title}
                                style={{ marginBottom: 12, width: 200 }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values[field.name]}
                            />
                        </Col>
                        <Col span={8}>
                            <Text
                                strong
                                style={{
                                    marginLeft: 12,
                                    width: 100,
                                    color: "#ff0000",
                                }}
                            >
                                {errors[field.name]}
                            </Text>
                        </Col>
                    </Row>
                )
        },
        []
    )

    const numberMemoizedCallback = useCallback(
        (field, { errors, handleChange, handleBlur, values, setFieldValue }) => {
            return (
                <Row type="flex" justify="start">
                    <Col span={8}>
                        <Text strong style={{ color: "#000080" }}>
                            {field.name} :
                        </Text>
                    </Col>
                    <Col span={8}>
                        <Input
                            key={field.name}
                            name={field.name}
                            placeholder={field.title}
                            style={{ marginBottom: 12, width: 200 }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[field.name]}
                        />
                    </Col>
                    <Col span={8}>
                        <Text type="danger">{errors[field.name]}</Text>
                    </Col>
                </Row>
            )
        },
        []
    )

    const dateMemoizedCallback = useCallback(
        (field, { errors, handleChange, handleBlur, values, setFieldValue }) => {
            if (field.options) {
                return (
                    <Row type="flex" justify="start">
                        <Col span={8}>
                            <Text strong style={{ color: "#000080" }}>
                                {field.name} :
                            </Text>
                        </Col>
                    </Row>
                )
            } else {
                return (
                    <Row type="flex" justify="start">
                        <Col span={8}>
                            <Text strong style={{ color: "#000080" }}>
                                {field.name} :
                            </Text>
                        </Col>
                        <Col span={8}>
                            <DatePicker
                                value={values[field.name]}
                                placeholder={field.title}
                                style={{ marginBottom: 12, width: 200 }}
                                onChange={(value) => {
                                    setFieldValue(field.name, value)
                                }}
                            />
                        </Col>
                        <Col span={8}>
                            <Text type="danger">{errors[field.name]}</Text>
                        </Col>
                    </Row>
                )
            }
        },
        []
    )

    const locationMemoizedCallback = useCallback(
        (field, { errors, handleChange, handleBlur, values, setFieldValue }) => {
            if (field.type === "Location") {
                if (field.options) {
                    return (
                        <div key={field.name}>
                            <Row type="flex" justify="start">
                                <Col span={8}>
                                    <Text strong style={{ color: "#000080" }}>
                                        {field.name} :
                                    </Text>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        style={{ marginBottom: 12, width: 200 }}
                                        block
                                        type="primary"
                                        onClick={() => {
                                            console.log("clicck")
                                            openModal(field.name)
                                        }}
                                    >
                                        انتخاب موقعیت
                                    </Button>
                                </Col>
                            </Row>
                            <ModalOptionMaps
                                {...console.log(
                                    "show modal" + showModal[field.name]
                                )}
                                maps={field.options}
                                visible={showModal[field.name]}
                                onClose={() => {
                                    closeModal(field.name)
                                }}
                                getLocation={(pos) => {
                                    setFieldValue(field.name, pos)
                                    closeModal(field.name)
                                    console.log("submit")
                                    console.log(
                                        "coord : " + pos.lat + " " + pos.long
                                    )
                                }}
                            />
                        </div>
                    )
                } else {
                    return (
                        <div key={field.name}>
                            <Row type="flex" justify="start">
                                <Col span={8}>
                                    <Text strong style={{ color: "#000080" }}>
                                        {field.name} :
                                    </Text>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        style={{ marginBottom: 12, width: 200 }}
                                        block
                                        type="primary"
                                        onClick={() => {
                                            console.log("clicck")
                                            openModal(field.name)
                                        }}
                                    >
                                        انتخاب موقعیت
                                    </Button>
                                </Col>
                            </Row>
                            <ModalMaps
                                {...console.log(showModal[field.name])}
                                visible={showModal[field.name]}
                                onClose={() => {
                                    closeModal(field.name)
                                }}
                                getLocation={(coords) => {
                                    setFieldValue(field.name, coords)
                                    closeModal(field.name)
                                    console.log("submit")
                                    console.log(
                                        "coord : " + coords.lat + " " + coords.lng
                                    )
                                }}
                            />
                        </div>
                    )
                }
            }
        },
        [closeModal, openModal, showModal]
    )

    const fieldTypeDecoder = (field, props) => {
        switch (field.type) {
            case "Text":
                return textMemoizedCallback(field, props)
            case "Number":
                return numberMemoizedCallback(field, props)
            case "Location":
                return locationMemoizedCallback(field, props)
            case "Date":
                return dateMemoizedCallback(field, props)
            default:
                return null
        }
    }
    console.log("check" + isSending)
    if (isSending === "false") {
        return <h2 style={{ textAlign: "center" }}>Form edited successfully !</h2>
    } else {
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div style={{ height: "100%", width: "100%", textAlign: "center" }}>
                    <h1 style={{ color: "#000080" }}>{formData.title}</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={initVallidation}
                        onSubmit={sendFormData}
                    >
                        {(props) => (
                            <Row type="flex" justify="center" align="middle">
                                <form onSubmit={props.handleSubmit}>
                                    <div className="form-group ">
                                        <Title
                                            level={4}
                                            style={{ color: "#000080" }}
                                        >
                                            id : {formData.id}
                                        </Title>
                                    </div>
                                    {formData.fields.map((field) =>
                                        fieldTypeDecoder(field, props)
                                    )}
                                    <Button
                                        block
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        onClick={props.handleSubmit}
                                    >
                                        ثبت
                                    </Button>
                                </form>
                            </Row>
                        )}
                    </Formik>
                </div>
            )
        }
    }
}

export default FormEditPage
