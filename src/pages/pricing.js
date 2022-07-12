import React from 'react';
import { Table,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {priceTableColumns, HDBPriceData,CondoPriceData} from './pricingData'

function Pricing(props) {
    let navigate = useNavigate();

    const onClick = ()=>{
        navigate('/');
    }

    return (
        <div>
            <h3 style={{'padding':15, 'font':'Helvatica', 'fontWeight':'650'}}>Our rates below are only an indicative price</h3>
            <h3 style={{'paddingBottom':15,'paddingLeft':15, 'font':'Helvatica', 'fontWeight':'650'}}>(may subject to additional fees depending on condition and additional request)</h3>
            <h2 style={{'padding':15, 'font':'Helvatica', 'fontWeight':'bold'}}>HDB Prices</h2>
            <Table columns={priceTableColumns} dataSource={HDBPriceData}/>;
            <h2 style={{'padding':15, 'font':'Helvatica', 'fontWeight':'bold'}}>Condominiums and Private Apartments</h2>
            <Table columns={priceTableColumns} dataSource={CondoPriceData}/>;
            <h2 style={{'padding':15, 'font':'Helvatica', 'fontWeight':'600', 'fontSize':18}}>Landed Properties and others -
To be quoted separately*</h2>
            <h2 style={{'padding':15, 'font':'Helvatica', 'fontWeight':'600', 'fontSize':18}}>If you would like us to provide the respective chemicals and  equipments (e.g. Vacuum Cleaners, Mop, Cloths, Scrubs), it will be an additional of $20.</h2>
            <div style={{'paddingLeft':15}}>
                <Button type="primary" onClick={onClick} size={'large'}>
                    Book Now
                </Button>
            </div>
        </div>
    )
}

export default Pricing