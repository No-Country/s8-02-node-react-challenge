import Empty from "../../components/activities/Empty"
import Lista from "../../components/activities/Lista"
import Header from "../../components/header/Header"

import axios from 'axios'
import { useEffect } from "react"
import example from './Example'
import Item from "../../components/activity/Item"
import { useSelector } from 'react-redux'
import Layout from "../../components/layout";

const Activity = () => {
    const { user } = useSelector((state) => state.auth);
    //const token = user.token.token
    //console.log(user, token)
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZiZWI5N2E5YmNjN2FjZmJhNWFjNmEiLCJpYXQiOjE2ODUzMjk0MjksImV4cCI6MTc3MTcyOTQyOX0.4tdGCwWTiDaCegrZHmVYq1e9MpTVJdlHJNLlFcPAqoY"

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'https://api-wallet.onrender.com',
           //timeout: 1000,
            headers: {'Authorization': token }
        });

        console.log('axios')
        instance.get('/auth/activity/activities').then(response => console.log(response)).catch(e => console.log(e))
    }, [])

    return (
        <>
            <Layout />
            {/*<Header dato={'Actividad'} show={'flex'} />*/}
            {/*
                example.activities.length < 1 ? <Empty /> : (
                    <div className='pl-4 pr-4'>
                        {example.activities.map(item => (
                            <Lista key={item._id} time={item.createdAt}/>
                        ))}
                    </div>
                )
                        */}
            <div className='pl-4 pr-4 h-5'>
                <div className='mt-4 border-[#39528D] border-b-2 mb-2'>
                    <p className='text-[#39528D] font-semibold'>Hoy</p>
                </div>
                <Lista />
                <Lista />

                <div className='mt-4 border-[#39528D] border-b-2 mb-2'>
                    <p className='text-[#39528D] font-semibold'>Ayer</p>
                </div>
                <Lista />
                <Lista />

                <div className='mt-4 border-[#39528D] border-b-2 mb-2'>
                    <p className='text-[#39528D] font-semibold'>Anteriores</p>
                </div>
                <Lista />
                <Lista />
                <Lista />
            </div>
        </>
    )
}

export default Activity