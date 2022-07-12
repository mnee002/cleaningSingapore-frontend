import React,{useState,useEffect} from "react";
import { Col, Row, Space, DatePicker ,Select,Table, Button, notification } from "antd";
import { Input } from "antd";
import { useNavigate } from 'react-router-dom';
import API from "../utils/baseURLs"

const { Search } = Input;
const { RangePicker } = DatePicker;

function Admin() {

    const [Bookings, setBookings] = useState([]);
    const [Filters, setFilters] = useState({});
    const [NewStatus,setNewStatus]= useState('pending')

    useEffect(()=>{
        handleAuth();
        getBookings({});
    },[])

    let navigate = useNavigate();

    const handleAuth = ()=>{
        API.get('api/admin/auth').then((res) => {
            const { success} = res.data;
            if (!success) {
                navigate('/admin88login')
            }
        });
    }

    const getBookings = (variables)=>{
        API.post('/api/book/getAll',variables).then((res)=>{
            const {success,bookings} = res.data
            if (success){
              setBookings(bookings)
            }
            else{
              alert("Failed to fetch bookings")
            }
        })
    }

    const handleDateFilters= (dates)=>{
        let newFilter = Filters
        newFilter.date=dates
        setFilters(newFilter)
        getBookings({filters:newFilter})
    }

    const statuses = [
        {
          value: 'all',
          label: 'All',
        },
        {
            value: 'pending',
            label: 'Pending',
        },
        {
            value: 'confirmed',
            label: 'Confirmed',
        },
        {
            value: 'finished',
            label: 'Finished',
        },
        {
            value: 'aborted',
            label: 'Aborted',
        }
        
    ]

    const statusToUpdate =[
        {
            value: 'pending',
            label: 'Pending',
        },
        {
            value: 'confirmed',
            label: 'Confirmed',
        },
        {
            value: 'finished',
            label: 'Finished',
        },
        {
            value: 'aborted',
            label: 'Aborted',
        }
    ]

    const handleStatusFilters= (value)=>{
        let newFilter = Filters
        if (value ==='all'){
            delete newFilter.status
        }
        else{
            newFilter.status=value
        }
        setFilters(newFilter)
        getBookings({filters:newFilter})
        
    }
    
    const handleSearch =(val)=>{
    let variables = {
        filers: Filters,
        searchTerm: val
    }
    getBookings(variables);
    
    }

    const bookingTableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name_',
          },
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date_',
          },
          {
            title: 'Time',
            dataIndex: 'time',
            key: 'time_',
          },
          {
            title: 'Postal',
            dataIndex: 'postal',
            key: 'postal_',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone_',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email_',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status_',
          },
          {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment_',
          },
          {
            title: '# Rooms',
            dataIndex: 'numRooms',
            key: 'numRooms_',
          },
          {
            title: '# Bath Rooms',
            dataIndex: 'numBathRooms',
            key: 'numBathRooms_',
          },
          {
            title: 'Need Equip',
            key: 'needEquip_',
            render: (_, booking) => (
              <Space size="middle">
                {booking.needEquip &&  <p> True </p>}
                {!booking.needEquip &&  <p> False </p>}
              </Space>
            ),
          },
          {
            title: 'Update Status',
            key: 'action',
            render: (_, booking) => (
            <>
                <Row>
                <Select style={{ width: 120 }} options={statusToUpdate} onChange={handleUpdateStatus} />
                </Row>
                <Row>
                    <a onClick={(e) => { UpdateStatus(booking._id) }}> Update</a>
                </Row>
            </>
            ),
          }
    ]

    const openNotificationWithIcon = (type) => {
        notification[type]({
          message: 'Something went wrong!',
          description:
            'fail to update!',
        });
    };

    const handleUpdateStatus = (value)=>{
        setNewStatus(value)
    }

    const UpdateStatus= (bookingId)=>{
        API.get(`api/book/updatestatus?id=${bookingId}&status=${NewStatus}`).then(res=>{
            const success = res.data.success;
            if (!success){
                openNotificationWithIcon('warning')
            }
        }).catch(()=>{
            openNotificationWithIcon('warning')
        })
        
    }


    return (
    <div
      style={{
        width: "100%",
        margin: "1rem auto",
      }}
    >
      <h1>Meetings' History</h1>
      <br />
      <Space>
      <Search
        placeholder="Search"
        onSearch={handleSearch}
        enterButton
        style={{ width: 1000 }}
      />
      <RangePicker onChange={handleDateFilters}/>
   
      <Select style={{ width: 200 }} options={statuses} onChange={handleStatusFilters} />
      </Space>
      <br />

      <div
        style={{
          margin: "3rem auto",
        }}
      >
        <Row gutter={[40, 40]}>
          <Col lg={24} md={24} xs={24}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "3rem 1.5rem",
                justifyContent: "center",
                alignContent: "center",
                opacity: "0.75",
              }}
            >
              <Table columns={bookingTableColumns} dataSource={Bookings} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
        
        
    )
}

export default Admin