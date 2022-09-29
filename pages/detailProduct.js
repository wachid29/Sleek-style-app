import React from "react";
import detailStyle from "../styles/Detail.module.css";
import Image from "next/image";
import { FiFilter, FiShoppingCart } from "react-icons/fi";
function DetailProduct() {
  const star = [4, 3, 2, 1];
  const select = [28, 1];

  return (
    <>
      <div className={`${detailStyle.main}`}>
        <div className={`container-fluid ${detailStyle.navbar}`}>
          <div className="row" style={{ padding: "10px 80px 15px 80px" }}>
            <div className="col-1 ">
              <Image
                src="/images/logo.png"
                width="85px"
                height="30px"
                alt="image"
              />
            </div>
            <div className="col-5 ">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Search"
              />
            </div>
            <div className="col-1 ">
              <div
                className="card d-flex justify-content-center align-items-center"
                style={{
                  width: "25px",
                  height: "25px",
                  marginTop: "5px",
                  border: "1px solid #8E8E93",
                }}
              >
                <FiFilter />
              </div>
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <FiShoppingCart style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Login
              </button>
            </div>
            <div className="col-2 ">
              <button type="button" className="btn btn-outline-secondary">
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid pt-4 ${detailStyle.content}`}
          style={{ padding: "10px 80px 10px 80px" }}
        >
          <h5 className="mb-5">
            Home {">"} category {">"} Shoes
          </h5>
          <div className="row">
            <div className="col-6 row ">
              <div className="col-6">
                <Image
                  src="/images/shoes4.png"
                  width="263px"
                  height="329px"
                  alt="image"
                />
              </div>
              <div className="col-6">
                <Image
                  src="/images/shoes3.png"
                  width="263px"
                  height="329px"
                  alt="image"
                />
              </div>
              <div className="col-6 mt-3">
                <Image
                  src="/images/shoes2.png"
                  width="263px"
                  height="329px"
                  alt="image"
                />
              </div>
              <div className="col-6 mt-3">
                <Image
                  src="/images/shoes1.png"
                  width="263px"
                  height="329px"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-6" style={{ paddingLeft: "50px" }}>
              <h3 className="mb-2">Nike CruzrOne (Bright Crimson)</h3>
              <h5 className="mb-2">Nike</h5>
              <Image
                src="/images/stars.png"
                width="120"
                height="18"
                alt="image"
              />
              <h5 className="mt-3">Price</h5>
              <h3>$ 20.0</h3>
              <h5 style={{ color: "#222222", marginTop: "30px" }}>Color</h5>
              <div className="d-flex gap-2">
                <span
                  className={`card ${detailStyle.color}`}
                  style={{ backgroundColor: "#1A1A1A" }}
                />
                <span
                  className={`card ${detailStyle.color}`}
                  style={{ backgroundColor: "#D84242" }}
                />
                <span
                  className={`card ${detailStyle.color}`}
                  style={{ backgroundColor: "#4290D8" }}
                />
                <span
                  className={`card ${detailStyle.color}`}
                  style={{ backgroundColor: "#42D86C" }}
                />
              </div>
              <div className="d-flex justify-content-between w-50">
                <h5 style={{ color: "#222222", marginTop: "30px" }}>Size</h5>
                <h5
                  style={{
                    color: "#222222",
                    marginTop: "30px",
                  }}
                >
                  Jumlah
                </h5>
              </div>
              <div
                className="d-flex justify-content-between w-100 mb-5"
                style={{ paddingRight: "230px" }}
              >
                {select.map((item, key) => (
                  <div
                    className="d-flex justity-content-between gap-1"
                    key={key}
                  >
                    <div
                      className="card d-flex align-items-center justify-content-center "
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                        background: "#D4D4D4",
                      }}
                    >
                      -
                    </div>
                    <h5 style={{ color: "#222222" }}>{item}</h5>
                    <div
                      className="card d-flex align-items-center justify-content-center "
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                        background: "#FFFFFF",
                      }}
                    >
                      +
                    </div>
                  </div>
                ))}
              </div>
              <div className={`d-flex gap-3 ${detailStyle.button1}`}>
                <button type="button" className="btn btn-outline-secondary">
                  Chat
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Add Bag
                </button>
              </div>
              <div className={`${detailStyle.button2}`}>
                <button type="button" className="btn btn-danger">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="mb-5">Informasi Produk</h3>
            <h4>Condition</h4>
            <h4 style={{ color: "#DB3022", marginBottom: "35px" }}>NEW</h4>
            <h4>Description</h4>
            <h5 className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
            <h5 className="mb-3">
              Donec non magna rutrum, pellentesque augue eu, sagittis velit.
              Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent sed
              enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt
              tristique placerat. Pellentesque a consequat mauris, vel suscipit
              ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam
              elit, sollicitudin eu nisl at, ornare suscipit magna.
            </h5>
            <h5 className="mb-3">
              Donec non magna rutrum, pellentesque augue eu, sagittis velit.
              Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent sed
              enim vel turpis blandit imperdiet ac ac felis.
            </h5>
            <h5 className="mb-3">
              In ultricies rutrum tempus. Mauris vel molestie orci.
            </h5>
          </div>
          <div style={{ borderBottom: "0.5px solid", marginBottom: "50px" }}>
            <h3 className="mb-4">Product Review</h3>
            <div className="row mb-4 d-flex align-items-center">
              <div className="col-2">
                <h2 style={{ fontSize: "60px" }}>
                  5.0
                  <span style={{ fontSize: "20px" }}>/10</span>
                </h2>
                <div className="d-flex gap-1">
                  {[...new Array(5)].map((key) => (
                    <Image
                      src={`/images/star.png`}
                      width=" 22px"
                      height="22px"
                      alt="contain"
                      key={key}
                    />
                  ))}
                </div>
              </div>
              <div className="col-3">
                <div className="d-flex align-items-center gap-2">
                  <Image
                    src={`/images/star.png`}
                    width=" 22px"
                    height="22px"
                    alt="contain"
                  />
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "100px" }}
                  >
                    <div>5</div>
                    <div style={{ color: "red" }}>---------</div>
                    <div>4</div>
                  </div>
                </div>
                {star.map((item, key) => (
                  <div className="d-flex align-items-center gap-2" key={key}>
                    <Image
                      src={`/images/star.png`}
                      width=" 22px"
                      height="22px"
                      alt="contain"
                    />
                    <div
                      className="d-flex justify-content-between"
                      style={{ width: "100px" }}
                    >
                      <span>{item}</span>
                      <span>0</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2>You can also like this</h2>
            <h5>You’ve never seen it before!</h5>
          </div>
          {[...new Array(2)].map((key) => (
            <div className="row" key={key}>
              <div className="col-1"></div>
              {[...new Array(5)].map((key) => (
                <div className="col-2" key={key}>
                  <Image
                    src={`/images/contain.png`}
                    width=" 200px"
                    height="280px"
                    alt="contain"
                  />
                </div>
              ))}
              <div className="col-1"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
