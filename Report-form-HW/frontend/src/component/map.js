import GoogleMapReact from "google-map-react"
import React, {  useState } from "react"
import { Modal, Button } from "antd"

const ModalMaps = (props) => {
    const { onClose, visible } = props

    const mapStyles = {
        height: "100vh",
        width: "100%",
    }

    const defaultCenter = {
        lat: 41.3851,
        lng: 2.1734,
    }

    const [currentPosition, setCurrentPosition] = useState({})

    // const success = (position) => {
    //     const currentPosition = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //     }
    //     setCurrentPosition(currentPosition)
    //     console.log(
    //         "current position:" + currentPosition.lat + " " + currentPosition.lng
    //     )
    // }

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(success)
    // })

    return (
        <div>
            <Modal
                visible={visible}
                title="انتخاب موقعیت"
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        بازگشت
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => {
                            props.getLocation(
                                currentPosition.lat ? currentPosition : defaultCenter
                            )
                        }}
                    >
                        ثبت
                    </Button>,
                ]}
            >
                <div style={mapStyles}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.REACT_APP_GOOGLE_API_KEY,
                            language: "en",
                        }}
                        defaultZoom={13}
                        onClick={({ lat, lng }) => setCurrentPosition({ lat, lng })}
                        defaultCenter={
                            currentPosition.lat ? currentPosition : defaultCenter
                        }
                    >
                        {currentPosition.lat && (
                            <div
                                lat={currentPosition.lat}
                                lng={currentPosition.lng}
                                style={{
                                    height: 25,
                                    width: 25,
                                    borderRadius: "50%",
                                    backgroundColor: "blue",
                                }}
                            ></div>
                        )}
                    </GoogleMapReact>
                </div>
            </Modal>
        </div>
    )
}

export default ModalMaps
