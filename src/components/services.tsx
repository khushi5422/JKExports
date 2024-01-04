import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from "../styles/Home.module.css";


export default function Services() {
    return (
        <>
            <style>{`
        .car{
            background-color: #fffffff7;
            padding: 34px;
            min-height: 300px;
            min-width: 300px;
        }
        .cbody{
            padding: 0;
    text-align: center;
        }
        .fonn{
            font-size: medium;
        }
        @media only screen and (max-width: 769px) {
            .mobile{
                flex-direction: column;
            }
            .fonn{
                font-size: x-small;
            }
          }
        
        `}</style>
            <div className={`${styles.parallaxContainer}`}>
                <div className={`${styles.parallaxCaaardService} mt-3`}></div>
                <div className={`${styles.parallaxCardService}`}>
                    <div className='d-flex mobile'>
                        <Card className=' car  border-5 border-dark rounded-0 d-flex align-items-center'
                         data-aos="zoom-in-right"
                            data-aos-duration="1000"
                            data-aos-once="true"
                            >
                            <Image src="/qualityassurance.webp" width={90} height={90} className='' alt='Image' />
                            <Card.Body className='cbody'>
                                <Card.Title className='text-center'>Quality Assurance</Card.Title>
                                <Card.Text className='fonn'>
                                Experience the assurance of quality with our meticulously sourced and curated spices. We guarantee that each product meets the
                                 highest industry standards, ensuring consistency and excellence in every batch. Your satisfaction is our priority, and our 
                                 commitment to quality is unwavering.
                                </Card.Text>
                            </Card.Body>
                        </Card >
                        <Card className=' car  border-5 border-dark rounded-0 d-flex align-items-center' 
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        >
                            <Image src="/truck.webp" width={90} height={90} className='' alt='Image' />
                            <Card.Body className='cbody'>
                                <Card.Title className='text-center'>Bulk Ordering Made Easy</Card.Title>
                                <Card.Text className='fonn'>
                                Simplify your sourcing process with our seamless bulk ordering services. As your trusted wholesaler, we offer a hassle-free experience 
                                for large quantities. Whether youre a restaurant, distributor, or retailer, our streamlined ordering system ensures efficiency, prompt 
                                delivery, and the best value for your bulk spice needs.
                                </Card.Text>
                            </Card.Body>
                        </Card >
                        <Card className=' car border-5 border-dark rounded-0 d-flex align-items-center'
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        
                        >
                            <Image src="/global.webp" width={90} height={90} className='' alt='Image' />
                            <Card.Body className='cbody'>
                                <Card.Title className='text-center'>Global Distribution Network</Card.Title>
                                <Card.Text className='fonn'>
                                Connect with a global spice partner! Our extensive distribution network enables us to serve clients worldwide. Benefit from our 
                                efficient logistics and timely deliveries. As your reliable wholesaler, we strive to make the sourcing of premium Indian spices a 
                                smooth and reliable experience, no matter where you are.
                                </Card.Text>
                            </Card.Body>
                        </Card >

                    </div>
                </div>
            </div>
        </>
    )
}
