// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { donate, listDonation } from '../actions/userActions';
// core components
import { Header } from "../components/";
import Ticker from 'react-ticker';
import Cards from 'react-credit-cards';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "../components/utils.js";
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
//import DefaultFooter from "components/Footers/DefaultFooter.js";

function DonationPage() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const lists = useSelector(state => state.listDonate);
  const { payload,loading } = lists;
  const dispatch = useDispatch();

  useEffect(() => {
    {
        dispatch(listDonation());
        if(!loading){
            const elems=[];
            payload.map((elem)=>{elems.push("User Id: "+elem.user_id+" Donation Amount: "+elem.amount)});
            setMessage(elems.join(" "));
        }
    }
    return () => {};
  }, []);

  const submitPayment = () =>{
    dispatch(donate(amount));
  }

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCVC(target.value);
    } else if (target.name === "amount") {
      setAmount(target.value);
    } else if (target.name === "name") {
      setName(target.value);
    }
  };
  return (
    <>
      <div className="wrapper">
        <Header />
        {!loading && <Ticker>
            {() => message ? (
            <p style={{ whiteSpace: "nowrap" }}>{message.toString()}</p>
            ) : (
            <p style={{ visibility: "hidden" }}>Placeholder</p>
            )}
        </Ticker>
        }
        <div className="section section-contact-us text-center">
          <Container>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <div className="send-button">
                <form onSubmit={submitPayment}>
                <div className="form-group">
                <input
                type="text"
                name="amount"
                className="form-control"
                placeholder="Amount"
                required
                onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                />
                </div>
                <div className="form-actions">
                <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    size="lg"
                  >
                    Submit Donation
                </Button>
                </div>
                </form>
                </div>
                </Col>
            </Row>
          </Container>
        </div>
        {/*<DefaultFooter />*/}
      </div>
    </>
  );
}

export default DonationPage;
