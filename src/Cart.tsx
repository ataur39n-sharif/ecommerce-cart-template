import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import SingleCard from "./components/Product/singleCard.tsx";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function Cart({products}) {

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </MDBTypography>
                                                <MDBTypography className="mb-0 text-muted">
                                                    <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                        <option value={undefined}>Default</option>
                                                        <option value={5}>5 items</option>
                                                        <option value={10}>10 items</option>
                                                        <option value={15}>15 items</option>
                                                        <option value={20}>20 items</option>
                                                    </select>
                                                </MDBTypography>
                                            </div>

                                            <hr className="my-4" />
                                            {
                                                (products as any[]).map((field:any,i) =>(
                                                    <SingleCard key={i} fields={field}/>
                                                ))
                                            }
                                            <hr className="my-4" />

                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                Summary
                                            </MDBTypography>

                                            <hr className="my-4" />

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                Shipping
                                            </MDBTypography>

                                            <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                    <option value={0}>--Select-Delivery--</option>
                                                    <option value={5}>Regular-Delivery- $5.00</option>
                                                    <option value={15}>Standard-Delivery- $15.00</option>
                                                    <option value={25}>Home-Delivery- $25.00</option>
                                                    <option value={35}>Premium-Delivery- $35.00</option>
                                                </select>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                Give code
                                            </MDBTypography>

                                            <div className="mb-5">
                                                <MDBInput size="lg" label="Enter your code" />
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between ">
                                                <MDBTypography tag="h6" className="text-uppercase">
                                                    Subtotal
                                                </MDBTypography>
                                                <MDBTypography tag="h6">$ 13.00</MDBTypography>
                                            </div>
                                            <div className="d-flex justify-content-between ">
                                                <MDBTypography tag="h6" className="text-uppercase">
                                                    Shipping
                                                </MDBTypography>
                                                <MDBTypography tag="h6">$ 0.00</MDBTypography>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <MDBTypography tag="h6" className="text-uppercase">
                                                    discount
                                                </MDBTypography>
                                                <MDBTypography tag="h6">$ 00</MDBTypography>
                                            </div>
                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-5">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    Total price
                                                </MDBTypography>
                                                <MDBTypography tag="h5">$ 137.00</MDBTypography>
                                            </div>

                                            <MDBBtn color="dark" block size="lg">
                                                Go to Checkout
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
