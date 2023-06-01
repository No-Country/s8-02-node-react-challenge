import { useState, useEffect } from 'react';
import Layout from '../../components/layout'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ItemView = ({created}) => {
    return (
        <p>Creada el {created}</p>
    )
}





const Details = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('e')
    let _id = '6476b55528cb97aaebb79bd0' //'6477bb3b054a03b034bb5652' '6476b55528cb97aaebb79bd0'
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc2YjU1YzI4Y2I5N2FhZWJiNzliZDMiLCJpYXQiOjE2ODU1NjQwNDMsImV4cCI6MTc3MTk2NDA0M30.fMWtq__N1sSKJlqJWdfp2TCi_j7evok6be2CGPDaWp8"


    let { id } = useParams()

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'https://api-wallet.onrender.com',
            headers: {'Authorization': token }
        });

        instance.get(`/auth/activity/activities/${_id}`) //.UserAccountId
        .then(response => {
           // console.log(response.data.activities)
            console.log(response.data)
            setData(response.data.activities)
        }).catch(e => {
            console.log(e)
            setError(e.response.data.error)
        })

        //if(data.message != 'No se encontraron') setData(data.activities)

       // console.log(data[0].destinyAccountId.alias)
    }, [])
    return (
        <>
            <Layout />
            {
                data.map((item, index) => (
                   item._id === id ? <ItemView created={item.updatedAt} key={index} /> : null
                ))
            }
            <div>
                <p>Creada el {data.createdAt}</p>



            </div>
        </>
    )
}

export default Details