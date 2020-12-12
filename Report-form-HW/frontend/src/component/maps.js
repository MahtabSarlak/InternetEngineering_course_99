import GoogleMapReact from "google-map-react"
import React, { useState } from "react"
import { Modal, Button } from "antd"

const ModalMaps = (props) => {
    const { onClose, visible, maps } = props

    const [currentPosition, setCurrentPosition] = useState({})

    return (
        <div>
            <Modal
                visible={visible}
                title="انتخاب موقعیت"
                onCancel={onClose}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => {
                            props.getLocation(currentPosition)
                        }}
                    >
                        ثبت
                    </Button>,
                ]}
            >
                <div style={{ display: "flex", justify: "start" }}>
                    {maps.map((map, index) => (
                        <Button
                            style={{
                                width: 150,
                                height: 150,
                                margin: "20px",
                                backgroundColor: "#c0d0f0",
                            }}
                            onClick={() => setCurrentPosition(map.value)}
                        >
                            <h2 style={{ color: "blue" }}>{map.label}</h2>
                            <GoogleMapReact
                                bootstrapURLKeys={{
                                    key: process.env.REACT_APP_GOOGLE_API_KEY,
                                    language: "en",
                                }}
                                defaultZoom={13}
                                defaultCenter={
                                    (parseInt(map.value.lat, 10),
                                    parseInt(map.value.long, 10))
                                }
                            >
                                <div
                                    lat={parseInt(map.value.lat, 10)}
                                    lng={parseInt(map.value.long, 10)}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        borderRadius: "50%",
                                        backgroundColor: "blue",
                                    }}
                                ></div>
                            </GoogleMapReact>
                        </Button>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default ModalMaps
